import { POST } from './route';
import { Resend } from 'resend';

// Mock Resend
jest.mock('resend', () => {
    const mockSend = jest.fn().mockResolvedValue({ data: { id: '123' }, error: null });
    const mockBatchSend = jest.fn().mockResolvedValue({
        data: { data: [{ id: '1' }, { id: '2' }, { id: '3' }] },
        error: null
    });
    const mockInstance = {
        emails: {
            send: mockSend,
        },
        batch: {
            send: mockBatchSend,
        },
    };
    const ResendMock = jest.fn(() => mockInstance);
    (ResendMock as any).__mockInstance = mockInstance;
    return {
        Resend: ResendMock,
    };
});

// Mock next/server
jest.mock('next/server', () => ({
    NextResponse: {
        json: jest.fn((body, init) => ({
            json: async () => body,
            status: init?.status || 200,
        })),
    },
}));

describe('POST /api/send-santa', () => {
    let mockSend: jest.Mock;
    let mockBatchSend: jest.Mock;

    beforeAll(() => {
        const mockResendInstance = (Resend as any).__mockInstance;
        if (mockResendInstance) {
            mockSend = mockResendInstance.emails.send;
            mockBatchSend = mockResendInstance.batch.send;
        }
    });

    beforeEach(() => {
        if (mockSend) mockSend.mockClear();
        if (mockBatchSend) {
            mockBatchSend.mockClear();
            // Default successful batch response
            mockBatchSend.mockResolvedValue({
                data: { data: [{ id: '1' }, { id: '2' }, { id: '3' }] },
                error: null
            });
        }
    });

    it('returns 200 for valid data and sends emails via batch', async () => {
        const body = {
            eventName: 'Office Party',
            eventDate: '2025-12-25',
            budget: '50',
            participants: [
                { id: '1', name: 'Alice', email: 'alice@example.com' },
                { id: '2', name: 'Bob', email: 'bob@example.com' },
                { id: '3', name: 'Charlie', email: 'charlie@example.com' },
            ],
            organizerEmail: 'org@example.com',
        };

        const req = {
            json: async () => body,
        } as unknown as Request;

        const res = await POST(req);
        const data = await res.json();

        expect(res.status).toBe(200);
        expect(data.success).toBe(true);

        // Should call batch.send once for participants
        expect(mockBatchSend).toHaveBeenCalledTimes(1);
        const batchCallArgs = mockBatchSend.mock.calls[0][0];
        expect(batchCallArgs).toHaveLength(3);

        const recipients = batchCallArgs.map((e: any) => e.to);
        expect(recipients).toContain('alice@example.com');
        expect(recipients).toContain('bob@example.com');
        expect(recipients).toContain('charlie@example.com');

        // Check email content for event details
        const emailHtml = batchCallArgs[0].html;
        expect(emailHtml).toContain('Office Party');
        expect(emailHtml).toContain('2025-12-25');
        expect(emailHtml).toContain('50');

        // Should call emails.send once for organizer
        expect(mockSend).toHaveBeenCalledTimes(1);
        expect(mockSend).toHaveBeenCalledWith(expect.objectContaining({
            to: 'org@example.com',
            subject: expect.stringContaining('Office Party')
        }));
    });

    it('returns 400 if event name or date is missing', async () => {
        const body = {
            eventName: '', // Missing
            eventDate: '', // Missing
            participants: [
                { id: '1', name: 'Alice', email: 'alice@example.com' },
                { id: '2', name: 'Bob', email: 'bob@example.com' },
                { id: '3', name: 'Charlie', email: 'charlie@example.com' },
            ],
        };
        const req = {
            json: async () => body,
        } as unknown as Request;

        const res = await POST(req);
        const data = await res.json();

        expect(res.status).toBe(400);
        expect(data.errors).toContain('Event Name is required');
        expect(data.errors).toContain('Exchange Date is required');
    });

    it('returns 400 if participants list is missing', async () => {
        const body = {
            eventName: 'Party',
            eventDate: '2025-12-25',
        };
        const req = {
            json: async () => body,
        } as unknown as Request;

        const res = await POST(req);
        const data = await res.json();

        expect(res.status).toBe(400);
        expect(data.errors).toContain('Participants list is required');
    });

    it('returns 400 if less than 3 participants', async () => {
        const body = {
            eventName: 'Party',
            eventDate: '2025-12-25',
            participants: [
                { id: '1', name: 'Alice', email: 'alice@example.com' },
                { id: '2', name: 'Bob', email: 'bob@example.com' },
            ],
        };
        const req = {
            json: async () => body,
        } as unknown as Request;

        const res = await POST(req);
        const data = await res.json();

        expect(res.status).toBe(400);
        expect(data.errors).toContain('Minimum 3 participants required');
    });
});

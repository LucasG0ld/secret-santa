import { render } from '@testing-library/react';
import { SnowfallEffect } from './SnowfallEffect';
import { useSnowfall } from '../../hooks/useSnowfall';

// Mock useSnowfall
jest.mock('../../hooks/useSnowfall');

describe('SnowfallEffect', () => {
    it('renders a canvas with the ref from the hook', () => {
        const mockRef = { current: document.createElement('canvas') };
        (useSnowfall as jest.Mock).mockReturnValue(mockRef);

        const { container } = render(<SnowfallEffect />);
        const canvas = container.querySelector('canvas');

        expect(canvas).toBeInTheDocument();
        expect(useSnowfall).toHaveBeenCalled();
    });
});

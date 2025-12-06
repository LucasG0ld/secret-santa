import { EmailGarland } from "./EmailGarland";

interface EmailTemplateProps {
  recipientName?: string;
  assignedPersonName?: string;
  eventName?: string;
  exchangeDate?: string;
  budget?: string;
  participants?: string[];
}

export function EmailTemplate({
  recipientName = "[Recipient's Name]",
  assignedPersonName = "[Assigned Person's Name]",
  eventName = "[Event Name]",
  exchangeDate = "[Exchange Date]",
  budget = "[Budget]",
  participants = ["Person 1", "Person 2", "Person 3", "Person 4", "Person 5"],
}: EmailTemplateProps) {
  return (
    <div style={{
      backgroundColor: '#F9F6F0',
      padding: '40px 20px',
      fontFamily: 'Inter, Helvetica, Arial, sans-serif',
      minHeight: '100vh',
    }}>
      {/* Email Container - Single Column 600px */}
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 16px rgba(47, 79, 79, 0.1)',
      }}>
        
        {/* HEADER SECTION */}
        <div style={{
          backgroundColor: '#F9F6F0',
          paddingTop: '30px',
          paddingBottom: '20px',
        }}>
          {/* Top Garland Banner */}
          <EmailGarland />
          
          {/* Main Title */}
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '42px',
            fontWeight: 700,
            lineHeight: '1.2',
            color: '#2F4F4F',
            textAlign: 'center',
            margin: '30px 20px 0 20px',
            padding: 0,
          }}>
            Your Secret Santa Mission!
          </h1>
        </div>

        {/* MAIN BODY SECTION */}
        <div style={{
          padding: '40px 30px',
        }}>
          {/* Personal Greeting */}
          <p style={{
            fontFamily: 'Inter, Helvetica, Arial, sans-serif',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '1.6',
            color: '#333333',
            margin: '0 0 30px 0',
          }}>
            Hello <strong>{recipientName}</strong>,
          </p>

          {/* The Big Reveal Section */}
          <div style={{
            backgroundColor: '#F9F6F0',
            borderRadius: '8px',
            padding: '30px',
            marginBottom: '30px',
            textAlign: 'center',
            border: '2px solid #2F4F4F',
          }}>
            <p style={{
              fontFamily: 'Inter, Helvetica, Arial, sans-serif',
              fontSize: '18px',
              fontWeight: 500,
              lineHeight: '1.6',
              color: '#2F4F4F',
              margin: '0 0 15px 0',
            }}>
              Your mission is to be the Secret Santa for...
            </p>
            
            <div style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '36px',
              fontWeight: 700,
              lineHeight: '1.3',
              color: '#D24545',
              margin: '0',
              padding: '15px 0',
            }}>
              {assignedPersonName}
            </div>
            
            {/* Decorative stars */}
            <div style={{
              fontSize: '24px',
              color: '#FFD700',
              margin: '10px 0 0 0',
            }}>
              ★ ★ ★
            </div>
          </div>

          {/* Event Details Section */}
          <div style={{
            marginBottom: '30px',
          }}>
            <h2 style={{
              fontFamily: 'Inter, Helvetica, Arial, sans-serif',
              fontSize: '20px',
              fontWeight: 600,
              lineHeight: '1.4',
              color: '#2F4F4F',
              margin: '0 0 15px 0',
            }}>
              Event Details
            </h2>
            
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
            }}>
              <tbody>
                <tr>
                  <td style={{
                    fontFamily: 'Inter, Helvetica, Arial, sans-serif',
                    fontSize: '16px',
                    fontWeight: 600,
                    lineHeight: '1.6',
                    color: '#2F4F4F',
                    padding: '8px 0',
                    width: '40%',
                  }}>
                    Event:
                  </td>
                  <td style={{
                    fontFamily: 'Inter, Helvetica, Arial, sans-serif',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '1.6',
                    color: '#333333',
                    padding: '8px 0',
                  }}>
                    {eventName}
                  </td>
                </tr>
                <tr>
                  <td style={{
                    fontFamily: 'Inter, Helvetica, Arial, sans-serif',
                    fontSize: '16px',
                    fontWeight: 600,
                    lineHeight: '1.6',
                    color: '#2F4F4F',
                    padding: '8px 0',
                    width: '40%',
                  }}>
                    Exchange Date:
                  </td>
                  <td style={{
                    fontFamily: 'Inter, Helvetica, Arial, sans-serif',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '1.6',
                    color: '#333333',
                    padding: '8px 0',
                  }}>
                    {exchangeDate}
                  </td>
                </tr>
                <tr>
                  <td style={{
                    fontFamily: 'Inter, Helvetica, Arial, sans-serif',
                    fontSize: '16px',
                    fontWeight: 600,
                    lineHeight: '1.6',
                    color: '#2F4F4F',
                    padding: '8px 0',
                    width: '40%',
                  }}>
                    Suggested Budget:
                  </td>
                  <td style={{
                    fontFamily: 'Inter, Helvetica, Arial, sans-serif',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '1.6',
                    color: '#333333',
                    padding: '8px 0',
                  }}>
                    {budget}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Participants List Section */}
          <div style={{
            backgroundColor: '#F9F6F0',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '20px',
          }}>
            <h2 style={{
              fontFamily: 'Inter, Helvetica, Arial, sans-serif',
              fontSize: '18px',
              fontWeight: 600,
              lineHeight: '1.4',
              color: '#2F4F4F',
              margin: '0 0 10px 0',
            }}>
              All Participants:
            </h2>
            
            <p style={{
              fontFamily: 'Inter, Helvetica, Arial, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '1.6',
              color: '#333333',
              margin: '0',
            }}>
              {participants.join(', ')}
            </p>
          </div>

          {/* Important Reminder */}
          <div style={{
            backgroundColor: '#FFF8E1',
            borderLeft: '4px solid #FFD700',
            padding: '15px 20px',
            marginBottom: '20px',
          }}>
            <p style={{
              fontFamily: 'Inter, Helvetica, Arial, sans-serif',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '1.6',
              color: '#333333',
              margin: '0',
            }}>
              <strong style={{ color: '#2F4F4F' }}>Remember:</strong> Keep your assignment secret! The magic of Secret Santa is in the surprise. 🎁
            </p>
          </div>
        </div>

        {/* FOOTER SECTION */}
        <div style={{
          backgroundColor: '#F9F6F0',
          paddingTop: '20px',
          paddingBottom: '30px',
        }}>
          {/* Closing Message */}
          <p style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '24px',
            fontWeight: 600,
            lineHeight: '1.3',
            color: '#D24545',
            textAlign: 'center',
            margin: '0 20px 20px 20px',
          }}>
            Happy Gifting!
          </p>
          
          {/* Bottom Garland */}
          <EmailGarland />
          
          {/* Branding */}
          <p style={{
            fontFamily: 'Inter, Helvetica, Arial, sans-serif',
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '1.5',
            color: '#666666',
            textAlign: 'center',
            margin: '20px 20px 0 20px',
          }}>
            Organized with the Secret Santa App
          </p>
        </div>
      </div>

      {/* Spacer */}
      <div style={{ height: '40px' }} />
    </div>
  );
}

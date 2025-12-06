// This component generates the pure HTML string for the email template
// Can be used server-side to generate actual email HTML

interface EmailData {
  recipientName: string;
  assignedPersonName: string;
  eventName: string;
  exchangeDate: string;
  budget: string;
  participants: string[];
}

export function generateEmailHTML(data: EmailData): string {
  const {
    recipientName,
    assignedPersonName,
    eventName,
    exchangeDate,
    budget,
    participants
  } = data;

  const participantsList = participants.join(', ');

  // Generate the light garland HTML
  const lights = [
    { color: '#D24545', size: 10 },
    { color: '#FFD700', size: 8 },
    { color: '#2F4F4F', size: 11 },
    { color: '#D24545', size: 9 },
    { color: '#FFD700', size: 10 },
    { color: '#2F4F4F', size: 8 },
    { color: '#D24545', size: 11 },
    { color: '#FFD700', size: 9 },
    { color: '#2F4F4F', size: 10 },
    { color: '#D24545', size: 8 },
    { color: '#FFD700', size: 11 },
    { color: '#2F4F4F', size: 9 },
    { color: '#D24545', size: 10 },
    { color: '#FFD700', size: 8 },
    { color: '#2F4F4F', size: 11 },
  ];

  const garlandHTML = `
    <div style="width: 100%; height: 40px; display: flex; align-items: center; justify-content: center; position: relative; margin: 0 auto; padding: 0 20px;">
      <div style="position: absolute; left: 20px; right: 20px; height: 1px; background-color: #333333; top: 50%; transform: translateY(-50%);"></div>
      <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; position: relative; z-index: 1;">
        ${lights.map(light => `
          <div style="width: ${light.size}px; height: ${light.size}px; border-radius: 50%; background-color: ${light.color}; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15), 0 0 8px ${light.color}66, 0 0 12px ${light.color}33; flex-shrink: 0;"></div>
        `).join('')}
      </div>
    </div>
  `;

  return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Your Secret Santa Mission!</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F9F6F0; font-family: Inter, Helvetica, Arial, sans-serif;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F9F6F0; padding: 40px 20px;">
    <tr>
      <td align="center">
        <!-- Email Container -->
        <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #FFFFFF; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(47, 79, 79, 0.1);">
          
          <!-- HEADER SECTION -->
          <tr>
            <td style="background-color: #F9F6F0; padding-top: 30px; padding-bottom: 20px;">
              <!-- Top Garland -->
              ${garlandHTML}
              
              <!-- Main Title -->
              <h1 style="font-family: 'Playfair Display', Georgia, serif; font-size: 42px; font-weight: 700; line-height: 1.2; color: #2F4F4F; text-align: center; margin: 30px 20px 0 20px; padding: 0;">
                Your Secret Santa Mission!
              </h1>
            </td>
          </tr>
          
          <!-- MAIN BODY SECTION -->
          <tr>
            <td style="padding: 40px 30px;">
              <!-- Personal Greeting -->
              <p style="font-family: Inter, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.6; color: #333333; margin: 0 0 30px 0;">
                Hello <strong>${recipientName}</strong>,
              </p>
              
              <!-- The Big Reveal Section -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F9F6F0; border-radius: 8px; padding: 30px; margin-bottom: 30px; text-align: center; border: 2px solid #2F4F4F;">
                <tr>
                  <td>
                    <p style="font-family: Inter, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 500; line-height: 1.6; color: #2F4F4F; margin: 0 0 15px 0;">
                      Your mission is to be the Secret Santa for...
                    </p>
                    
                    <div style="font-family: 'Playfair Display', Georgia, serif; font-size: 36px; font-weight: 700; line-height: 1.3; color: #D24545; margin: 0; padding: 15px 0;">
                      ${assignedPersonName}
                    </div>
                    
                    <!-- Decorative stars -->
                    <div style="font-size: 24px; color: #FFD700; margin: 10px 0 0 0;">
                      ★ ★ ★
                    </div>
                  </td>
                </tr>
              </table>
              
              <!-- Event Details Section -->
              <h2 style="font-family: Inter, Helvetica, Arial, sans-serif; font-size: 20px; font-weight: 600; line-height: 1.4; color: #2F4F4F; margin: 0 0 15px 0;">
                Event Details
              </h2>
              
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 30px;">
                <tr>
                  <td width="40%" style="font-family: Inter, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 600; line-height: 1.6; color: #2F4F4F; padding: 8px 0;">
                    Event:
                  </td>
                  <td style="font-family: Inter, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.6; color: #333333; padding: 8px 0;">
                    ${eventName}
                  </td>
                </tr>
                <tr>
                  <td width="40%" style="font-family: Inter, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 600; line-height: 1.6; color: #2F4F4F; padding: 8px 0;">
                    Exchange Date:
                  </td>
                  <td style="font-family: Inter, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.6; color: #333333; padding: 8px 0;">
                    ${exchangeDate}
                  </td>
                </tr>
                <tr>
                  <td width="40%" style="font-family: Inter, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 600; line-height: 1.6; color: #2F4F4F; padding: 8px 0;">
                    Suggested Budget:
                  </td>
                  <td style="font-family: Inter, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.6; color: #333333; padding: 8px 0;">
                    ${budget}
                  </td>
                </tr>
              </table>
              
              <!-- Participants List Section -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F9F6F0; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
                <tr>
                  <td>
                    <h2 style="font-family: Inter, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 600; line-height: 1.4; color: #2F4F4F; margin: 0 0 10px 0;">
                      All Participants:
                    </h2>
                    <p style="font-family: Inter, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.6; color: #333333; margin: 0;">
                      ${participantsList}
                    </p>
                  </td>
                </tr>
              </table>
              
              <!-- Important Reminder -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #FFF8E1; border-left: 4px solid #FFD700; padding: 15px 20px; margin-bottom: 20px;">
                <tr>
                  <td>
                    <p style="font-family: Inter, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 1.6; color: #333333; margin: 0;">
                      <strong style="color: #2F4F4F;">Remember:</strong> Keep your assignment secret! The magic of Secret Santa is in the surprise. 🎁
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- FOOTER SECTION -->
          <tr>
            <td style="background-color: #F9F6F0; padding-top: 20px; padding-bottom: 30px;">
              <!-- Closing Message -->
              <p style="font-family: 'Playfair Display', Georgia, serif; font-size: 24px; font-weight: 600; line-height: 1.3; color: #D24545; text-align: center; margin: 0 20px 20px 20px;">
                Happy Gifting!
              </p>
              
              <!-- Bottom Garland -->
              ${garlandHTML}
              
              <!-- Branding -->
              <p style="font-family: Inter, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; line-height: 1.5; color: #666666; text-align: center; margin: 20px 20px 0 20px;">
                Organized with the Secret Santa App
              </p>
            </td>
          </tr>
        </table>
        
        <!-- Spacer -->
        <div style="height: 40px;"></div>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

// Example usage component
export function EmailTemplateHTML() {
  const sampleData: EmailData = {
    recipientName: "Emma Johnson",
    assignedPersonName: "Michael Chen",
    eventName: "Office Holiday Party 2024",
    exchangeDate: "December 20, 2024",
    budget: "$25 - $30",
    participants: ["Emma Johnson", "Michael Chen", "Sarah Davis", "James Wilson", "Lisa Martinez", "David Brown"]
  };

  const htmlContent = generateEmailHTML(sampleData);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 border border-[#2F4F4F]/10">
        <h2 className="mb-4">Generated HTML Email Code</h2>
        <p className="text-[#333333] mb-4">
          This is the raw HTML that can be used in email services. Copy this code to use in your email sending system.
        </p>
        <pre className="bg-[#F9F6F0] p-4 rounded overflow-auto max-h-96 text-xs">
          <code>{htmlContent}</code>
        </pre>
      </div>
    </div>
  );
}

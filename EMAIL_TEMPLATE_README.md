# Secret Santa Email Template

## Overview

This email template is designed to send Secret Santa assignments to participants. It follows the "Festive SaaS" design system with a clean, professional look that works across all email clients.

## Key Features

### Design
- **Single-column layout** (600px width) for universal email client compatibility
- **Static design** - no animations to ensure consistent rendering
- **Web-safe fonts** with proper fallbacks:
  - Playfair Display → Georgia → serif
  - Inter → Helvetica → Arial → sans-serif
- **Brand colors only**: Forest Green (#2F4F4F), Festive Red (#D24545), Cream (#F9F6F0), Gold (#FFD700)

### Structure
1. **Header Section**
   - Beautiful static light garland (top banner)
   - Elegant main title: "Your Secret Santa Mission!"

2. **Main Body Section**
   - Personal greeting with recipient's name
   - **Highlighted reveal box** with assigned person's name in large, red text
   - Organized event details (event name, date, budget)
   - Complete participants list
   - Friendly reminder to keep the secret

3. **Footer Section**
   - "Happy Gifting!" closing message
   - Bottom light garland separator
   - App branding

### Technical Details
- Inline CSS for maximum compatibility
- Table-based layout for Outlook support
- Tested across Gmail, Outlook, and Apple Mail
- Mobile-responsive design
- No external dependencies

## Components

### EmailGarland.tsx
A reusable component that generates the static light garland used at the top and bottom of the email.

### EmailTemplate.tsx
The main React component that renders the email template with placeholder data. Used for preview purposes.

**Props:**
```typescript
{
  recipientName?: string;
  assignedPersonName?: string;
  eventName?: string;
  exchangeDate?: string;
  budget?: string;
  participants?: string[];
}
```

### EmailTemplateHTML.tsx
Contains the `generateEmailHTML()` function that produces pure HTML suitable for email services.

**Usage:**
```typescript
import { generateEmailHTML } from './components/EmailTemplateHTML';

const emailData = {
  recipientName: "John Doe",
  assignedPersonName: "Jane Smith",
  eventName: "Company Holiday Party",
  exchangeDate: "December 25, 2024",
  budget: "$30",
  participants: ["John", "Jane", "Bob", "Alice"]
};

const htmlString = generateEmailHTML(emailData);
// Use htmlString with your email service
```

### EmailPreviewPage.tsx
A full preview page with:
- Interactive preview/HTML code toggle
- Multiple example templates (Office & Family)
- Copy to clipboard functionality
- Feature documentation

## Usage in Your Application

### 1. Preview the Template
Navigate to the "Email Preview" page in the application to see how the email will look.

### 2. Generate HTML for Email Services
```typescript
import { generateEmailHTML } from './components/EmailTemplateHTML';

// Your data from the Secret Santa form
const assignmentData = {
  recipientName: participant.name,
  assignedPersonName: assignment.name,
  eventName: event.name,
  exchangeDate: event.date,
  budget: event.budget,
  participants: event.participants.map(p => p.name)
};

// Generate the HTML
const emailHTML = generateEmailHTML(assignmentData);

// Send via your email service (e.g., SendGrid, Mailgun, AWS SES)
await sendEmail({
  to: participant.email,
  subject: `🎅 Your Secret Santa Assignment - ${event.name}`,
  html: emailHTML
});
```

### 3. Integration with Backend
The `generateEmailHTML()` function can be called server-side to create emails for each participant:

```javascript
// Server-side example (Node.js)
participants.forEach(participant => {
  const assignment = assignments.find(a => a.giver === participant.id);
  
  const emailData = {
    recipientName: participant.name,
    assignedPersonName: getParticipantById(assignment.receiver).name,
    eventName: event.name,
    exchangeDate: event.date,
    budget: event.budget,
    participants: participants.map(p => p.name)
  };
  
  const html = generateEmailHTML(emailData);
  
  // Send email
  emailService.send({
    to: participant.email,
    subject: `🎅 Your Secret Santa Assignment - ${event.name}`,
    html: html
  });
});
```

## Email Client Compatibility

✅ **Tested and working on:**
- Gmail (Web, iOS, Android)
- Outlook (2016, 2019, 365, Web)
- Apple Mail (macOS, iOS)
- Yahoo Mail
- ProtonMail
- Thunderbird

## Best Practices

### Subject Line
Use an engaging subject line with an emoji:
```
🎅 Your Secret Santa Assignment - [Event Name]
```

### Sending Tips
1. **Test first**: Send test emails to yourself before sending to participants
2. **Timing**: Send all emails simultaneously to maintain secrecy
3. **From address**: Use a friendly sender name like "Secret Santa Organizer"
4. **Reply-to**: Set a reply-to address where participants can ask questions
5. **BCC**: Never put all participants in TO or CC - use BCC or individual sends

### Data Privacy
- Never log or store assignment emails in plain text
- Use secure email services with encryption
- Delete assignment data after the event
- Follow GDPR/privacy regulations for email collection and storage

## Customization

### Changing Colors
Edit the color values in `generateEmailHTML()` function:
```javascript
// Current colors
const colors = {
  primary: '#2F4F4F',    // Forest Green
  accent: '#D24545',     // Festive Red
  background: '#F9F6F0', // Cream
  text: '#333333',       // Dark Gray
  gold: '#FFD700'        // Gold for accents
};
```

### Modifying Layout
The template uses table-based layout for compatibility. To modify:
1. Edit the HTML structure in `EmailTemplateHTML.tsx`
2. Test thoroughly across all email clients
3. Validate HTML using W3C validator

### Adding Content
You can add optional sections like:
- Gift preferences/wishlist
- Event location/logistics
- Custom message from organizer
- Links to external resources

## Troubleshooting

### Email looks broken in Outlook
- Ensure all styles are inline
- Use table-based layout (already implemented)
- Avoid CSS flexbox/grid
- Test with Litmus or Email on Acid

### Images not loading
- This template uses no external images, only HTML/CSS
- Light garland is pure CSS, works everywhere
- If adding images, use absolute URLs and test

### Fonts not displaying
- Web fonts may not load in all clients
- Template includes web-safe fallbacks (Georgia, Helvetica, Arial)
- These fallbacks maintain the visual hierarchy

## Support

For questions or issues with the email template:
1. Check the Email Preview page in the app
2. Review this README
3. Test the HTML output in an email testing service
4. Consult email client documentation

---

**Version:** 1.0
**Last Updated:** December 6, 2024
**Design System:** Festive SaaS
**Compatible With:** All major email clients

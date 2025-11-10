import React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  subject,
  message,
}) => (
  <div>
    <h1 style={{ fontSize: '24px', color: '#333' }}>New Contact Form Submission</h1>
    <p style={{ fontSize: '16px', color: '#555' }}>
      You received a new message from your website&apos;s contact form.
    </p>
    <hr style={{ border: 'none', borderTop: '1px solid #eee' }} />
    <h3 style={{ fontSize: '18px', color: '#333' }}>Details:</h3>
    <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
      <li style={{ fontSize: '16px', marginBottom: '10px' }}>
        <strong>Name:</strong> {name}
      </li>
      <li style={{ fontSize: '16px', marginBottom: '10px' }}>
        <strong>Email:</strong> {email}
      </li>
      <li style={{ fontSize: '16px', marginBottom: '10px' }}>
        <strong>Subject:</strong> {subject}
      </li>
      <li style={{ fontSize: '16px' }}>
        <strong>Message:</strong>
        <p style={{ whiteSpace: 'pre-wrap', background: '#f9f9f9', padding: '15px', borderRadius: '5px' }}>
          {message}
        </p>
      </li>
    </ul>
  </div>
);

import React from 'react';

export interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function EmailTemplate({
  name,
  email,
  subject,
  message,
}: Readonly<EmailTemplateProps>) {
  return (
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
}

export function renderEmailTemplateToHtml({ name, email, subject, message }: EmailTemplateProps): string {
  return `
    <div>
      <h1 style="font-size: 24px; color: #333;">New Contact Form Submission</h1>
      <p style="font-size: 16px; color: #555;">
        You received a new message from your website's contact form.
      </p>
      <hr style="border: none; border-top: 1px solid #eee;" />
      <h3 style="font-size: 18px; color: #333;">Details:</h3>
      <ul style="list-style-type: none; padding-left: 0;">
        <li style="font-size: 16px; margin-bottom: 10px;">
          <strong>Name:</strong> ${name}
        </li>
        <li style="font-size: 16px; margin-bottom: 10px;">
          <strong>Email:</strong> ${email}
        </li>
        <li style="font-size: 16px; margin-bottom: 10px;">
          <strong>Subject:</strong> ${subject}
        </li>
        <li style="font-size: 16px;">
          <strong>Message:</strong>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">
            ${message}
          </p>
        </li>
      </ul>
    </div>
  `;
}

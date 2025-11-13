'use server'; // This line is critical!

import { Resend } from 'resend';
import EmailTemplate, { EmailTemplateProps, renderEmailTemplateToHtml } from '../components/EmailTemplate';

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  // This is for your local testing.
  // We'll log the data to the terminal so you can see it work.
  console.log('New Contact Form Submission:');
  console.log({ name, email, subject, message });

  // This is the real email-sending logic for when you deploy.
  // It needs the RESEND_API_KEY from your .env.local file.
  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
      await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>', // This must be a verified domain on Resend
        to: 'info@ghadirbabil.com', // The email address you want to send to
        subject: `New Website Message: ${subject}`,
        html: renderEmailTemplateToHtml({ name, email, subject, message }),
        replyTo: email,
      });
      
      return { success: true, error: null };
    } catch (error) {
      console.error(error);
      return { success: false, error: 'Failed to send message.' };
    }
  } else {
    // This will happen on localhost if the .env.local file is missing
    console.warn('RESEND_API_KEY is not set. Skipping email send.');
    // We'll pretend it worked so you can test the success message.
    return { success: true, error: null };
  }
}

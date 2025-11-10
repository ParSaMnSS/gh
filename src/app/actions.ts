'use server';

export async function submitContactForm(formData: FormData) {
  const data = Object.fromEntries(formData);
  console.log('New Contact Form Submission:', data);
  // In the future, we will add email-sending code here.
}

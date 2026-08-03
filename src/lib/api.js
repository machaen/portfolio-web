/**
 * POST the contact form to the /api/contact serverless function.
 * Throws an Error with a readable message on failure.
 */
export async function sendContactMessage(payload) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    const message = Array.isArray(data.message) ? data.message[0] : data.message;
    throw new Error(message || 'Something went wrong. Please try again.');
  }

  return data;
}

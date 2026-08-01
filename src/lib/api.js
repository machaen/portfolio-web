const API_BASE = import.meta.env.VITE_API_BASE ?? 'http://localhost:3000';

/**
 * POST the contact form to the NestJS API.
 * Throws an Error with a readable message on failure.
 */
export async function sendContactMessage(payload) {
  const res = await fetch(`${API_BASE}/api/contact`, {
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

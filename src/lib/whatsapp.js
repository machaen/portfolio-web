/** Builds a wa.me link from a display phone number, with an optional pre-filled message. */
export function getWhatsAppLink(phone, message) {
  const digits = phone.replace(/\D/g, '');
  const query = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${digits}${query}`;
}

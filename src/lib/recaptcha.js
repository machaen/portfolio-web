const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

let scriptPromise;

function loadScript() {
  if (window.grecaptcha) return Promise.resolve(window.grecaptcha);
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve(window.grecaptcha);
    script.onerror = () => reject(new Error('reCAPTCHA failed to load — check your connection or ad blocker.'));
    document.head.appendChild(script);
  });
  return scriptPromise;
}

/**
 * Resolves an action-scoped v3 token, or null if no site key is configured
 * (e.g. local dev without VITE_RECAPTCHA_SITE_KEY set).
 */
export async function getRecaptchaToken(action) {
  if (!SITE_KEY) return null;

  const grecaptcha = await loadScript();
  return new Promise((resolve, reject) => {
    grecaptcha.ready(() => {
      grecaptcha.execute(SITE_KEY, { action }).then(resolve).catch(reject);
    });
  });
}

import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref and a `shown` flag that flips to true the first time the
 * element scrolls into view. Used by the <Reveal> wrapper.
 */
export function useReveal(options = {}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px', ...options },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shown, options]);

  return { ref, shown };
}

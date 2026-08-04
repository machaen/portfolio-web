import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export default function Modal({ open, onClose, titleId, closeLabel, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement;
    document.body.style.overflow = 'hidden';

    const firstField = dialogRef.current?.querySelector('input, select, textarea');
    (firstField ?? dialogRef.current)?.focus();

    const handleKeydown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll(FOCUSABLE);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeydown);
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-bg/80 px-4 py-10 backdrop-blur-sm sm:items-center"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[560px] rounded-2xl border border-line-soft bg-panel p-6 shadow-[0_20px_60px_-10px_rgba(62,50,40,0.35)]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          className="absolute right-4 top-4 text-ink-faint transition-colors hover:text-ink"
        >
          <X size={18} />
        </button>
        {children}
      </div>
    </div>
  );
}

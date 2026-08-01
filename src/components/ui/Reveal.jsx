import { useReveal } from '../../hooks/useReveal';

/**
 * Fades + slides its children in on first scroll into view.
 * `as` chooses the rendered element (div by default).
 */
export default function Reveal({ as: Tag = 'div', className = '', children, ...props }) {
  const { ref, shown } = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${shown ? 'in' : ''} ${className}`} {...props}>
      {children}
    </Tag>
  );
}

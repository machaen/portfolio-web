import { Server } from 'lucide-react';
import { iconFor } from '../../lib/icons';

export default function Bullet({ bullet }) {
  const Icon = iconFor[bullet.icon] ?? Server;
  const key = Boolean(bullet.milestone);

  return (
    <li
      className={
        'flex items-start gap-[13px] text-[14.5px] leading-[1.58] ' +
        (key ? 'rounded-xl border border-amber-line bg-amber-soft p-4 text-ink' : 'text-ink-dim')
      }
    >
      <span
        className={
          'mt-px grid h-[30px] w-[30px] flex-none place-items-center rounded-lg border ' +
          (key ? 'border-amber bg-amber text-bg' : 'border-line-soft bg-raised text-ink-dim')
        }
      >
        <Icon size={15} />
      </span>
      <div>
        {key && (
          <span className="mb-[7px] inline-block rounded-[5px] border border-amber-line px-[7px] py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber">
            Key impact
          </span>
        )}
        <div>{bullet.text}</div>
      </div>
    </li>
  );
}

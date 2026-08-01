import Reveal from '../ui/Reveal';
import Bullet from './Bullet';

export default function RoleCard({ role }) {
  return (
    <Reveal as="article" className="relative pb-14 last:pb-0">
      <span className="role-dot" />

      <div className="mb-2 flex items-center gap-2.5 font-mono text-[12.5px] tracking-wide text-teal">
        <span>{role.period}</span>
        <span className="text-ink-faint">// {role.meta}</span>
      </div>

      <h3 className="font-display text-[1.5rem] font-semibold leading-tight tracking-tight">
        {role.company}
      </h3>
      <p className="mb-5 mt-[3px] text-[14.5px] text-ink-dim">{role.role}</p>

      <ul className="flex flex-col gap-[13px]">
        {role.bullets.map((bullet, i) => (
          <Bullet key={i} bullet={bullet} />
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {role.tags.map((tag) => (
          <span key={tag} className="tag-chip">
            {tag}
          </span>
        ))}
      </div>
    </Reveal>
  );
}

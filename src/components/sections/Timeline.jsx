import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import RoleCard from '../timeline/RoleCard';
import { roles } from '../../data/roles';

export default function Timeline() {
  return (
    <section id="timeline" className="py-16">
      <Reveal>
        <SectionHeading num="01" title="Career timeline" />
      </Reveal>
      <Reveal as="p" className="mb-11 mt-3 max-w-[560px] text-sm text-ink-dim">
        Ten-plus years of engineering work, most recent first. Highlighted entries mark the
        deliveries with the largest impact.
      </Reveal>

      <div className="relative pl-[34px]">
        <div className="timeline-spine">
          <div className="spine-pulse" />
        </div>
        {roles.map((role) => (
          <RoleCard key={role.company + role.period} role={role} />
        ))}
      </div>
    </section>
  );
}

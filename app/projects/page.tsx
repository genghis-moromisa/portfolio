import { SectionHeading } from '@/components/section-heading';
import { ProjectsFilter } from '@/components/projects-filter';
import { projects } from '@/content/projects';

export const metadata = {
  title: 'Projects'
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-10">
      <SectionHeading title="Projects" eyebrow="Selected Work">
        Each engagement balances brand restraint with clarity. Tag filters highlight focus areas.
      </SectionHeading>
      <ProjectsFilter projects={projects} />
    </div>
  );
}

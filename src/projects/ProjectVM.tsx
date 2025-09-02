export interface ProjectLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Project {
  id: string | number;
  title: string;
  description: string;
  image: string; // URL or local path
  tags?: string[];
  links?: ProjectLink[];
}

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className='m-2 my-4 group relative rounded-2xl overflow-hidden border border-accent backdrop-blur bg-primary-soft/80 shadow-sm hover:shadow-lg transition-shadow max-w-md'>
      <div className='h-44 sm:h-56 max-w-md bg-primary/60 overflow-hidden'>
        <img
          src={project.image}
          alt={project.title}
          className='w-full h-full object-scale-down group-hover:scale-105 transition-transform'
        />
      </div>

      <div className='p-4 sm:p-6'>
        <h3 className='text-lg font-semibold text-slate-900 dark:text-slate-100'>
          {project.title}
        </h3>
        <p className='mt-2 text-sm text-primary-text'>{project.description}</p>

        {project.tags && project.tags.length > 0 && (
          <div className='mt-3 flex flex-wrap gap-2'>
            {project.tags.map((t) => (
              <span
                key={t}
                className='inline-flex items-center px-2 py-1 text-xs font-medium rounded bg-accent text-primary-text'>
                {t}
              </span>
            ))}
          </div>
        )}

        {project.links && project.links.length > 0 && (
          <div className='mt-4 flex items-center gap-3'>
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noreferrer' : undefined}
                className='text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline'>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;

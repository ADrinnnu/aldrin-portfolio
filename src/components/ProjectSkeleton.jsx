const ProjectSkeleton = () => (
  <li className="flex animate-pulse items-center gap-5 py-5" aria-hidden>
    <div className="h-16 w-16 shrink-0 rounded-lg bg-soft sm:h-20 sm:w-20" />
    <div className="flex-1 space-y-2.5">
      <div className="h-4 w-1/3 rounded bg-soft" />
      <div className="h-3 w-3/4 rounded bg-soft" />
      <div className="h-3 w-1/4 rounded bg-soft" />
    </div>
  </li>
);

export default ProjectSkeleton;
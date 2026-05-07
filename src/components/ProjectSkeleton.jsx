const ProjectSkeleton = () => {
  return (
    // The "animate-pulse" class is what gives it that modern loading shimmer!
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm shadow-xl animate-pulse">
      {/* Image Placeholder */}
      <div className="aspect-video p-6 bg-white/5 flex items-center justify-center border-b border-white/5">
        <div className="w-20 h-20 rounded-full bg-white/10"></div>
      </div>
      
      {/* Text Placeholder */}
      <div className="p-6">
        {/* Title line */}
        <div className="h-6 bg-white/10 rounded w-3/4 mb-4"></div>
        {/* Description lines */}
        <div className="space-y-2">
          <div className="h-4 bg-white/10 rounded w-full"></div>
          <div className="h-4 bg-white/10 rounded w-5/6"></div>
          <div className="h-4 bg-white/10 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSkeleton;
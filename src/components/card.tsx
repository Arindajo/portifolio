import React from 'react';

interface ProjectProps {
  title: string;
  description: string;

  role: string;
  image: string;
  link: string;
  status: string;
}

export default function ProjectCard({ 
  title, 
  description, 
 
  role, 
  image, 
  link, 
  status 
}: ProjectProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between hover:border-blue-300 transition-all group h-full">
      
      {/* Image Container */}
      <div className="h-48 bg-slate-100 relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        {/* Status Badge
        <div className="absolute top-3 right-3">
          <span className="bg-emerald-500 text-white text-[10px] font-bold uppercase px-2 py-1 rounded shadow-sm">
            {status}
          </span>
        </div> */}
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 leading-tight">{title}</h3>
        <p className="text-sm font-medium text-blue-600 mt-1 mb-3">{role}</p>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">{description}</p>
        
       

        {/* Action Link */}
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 text-sm font-bold hover:underline inline-flex items-center gap-1 group/link"
        >
          View Project 
          <span className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">↗</span>
        </a>
      </div>
    </div>
  );
}
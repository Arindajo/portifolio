interface ProjectProps {
    title: string;
    description: string;
    tags: string[];
    role: string;
    link: string; 
  }
  
  export default function ProjectCard({ title, description, tags, role, link }: ProjectProps) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-all">
        <div>
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>
          <p className="text-sm font-medium text-blue-600 mb-3">{role}</p>
          <p className="text-slate-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span key={tag} className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">{tag}</span>
            ))}
          </div>
        </div>
        <a 
          href={link} 
          target="_blank" 
          className="text-blue-600 font-semibold hover:underline flex items-center gap-1"
        >
          View Project ↗
        </a>
      </div>
    );
  }
import ProjectCard from '../components/card';
import { Mail, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-12 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      
      {/* NAVIGATION */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center mb-16 py-4 border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="font-black text-2xl tracking-tighter text-blue-600">AJ<span className="text-slate-400">.</span></div>
        <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest text-slate-500">
          <a href="#about" className="hover:text-blue-600 transition-all">About</a>
          <a href="#tech" className="hover:text-blue-600 transition-all">Skills</a>
          <a href="#projects" className="hover:text-blue-600 transition-all">Projects</a>
          <a href="#contact" className="px-6 py-2 bg-slate-900 text-white rounded-full hover:bg-blue-600 transition-all">Hire Me</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto">
        
        {/* HERO SECTION */}
        <header className="flex flex-col md:flex-row items-center gap-16 mb-24 py-8">
          <div className="relative shrink-0">
            <div className="w-54 h-54 md:w-60 md:h-60 rounded-full overflow-hidden border-[4px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] ring-1 ring-slate-100">
              <img src="/profile.jpg" alt="Arinda Josephine" className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute bottom-6 right-6 w-7 h-7 bg-emerald-500 border-[5px] border-white rounded-full shadow-lg animate-pulse"></div>
          </div>

          <div className="text-center md:text-left flex-1">
            <h1 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tight mb-4">Arinda Josephine</h1>
            <p className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold text-sm mb-6 tracking-wide uppercase border border-blue-100">
              Junior Fullstack Developer 
            </p>
            <p className="text-slate-500 max-w-xl leading-relaxed text-xl mb-10 font-medium">
              My focus is building scalable, maintainable solutions that solve real user problems.
              I enjoy building responsive user interfaces, bridging clean code with creative design.
            </p>

            <div className="flex gap-4 justify-center md:justify-start">
              <SocialLink href="https://github.com/Arindajo" icon={<GithubIcon />} />
              <SocialLink href="https://ug.linkedin.com/in/arinda-josephine-27281a280" icon={<LinkedinIcon />} />
              <SocialLink href="mailto:arindajosephine7@gmail.com" icon={<Mail size={20} />} />
            </div>
          </div>
        </header>

        {/* ABOUT ME SECTION */}
        <section id="about" className="mb-24">
          <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/20 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <div className="max-w-4xl relative z-10">
              <h2 className="text-blue-600 font-bold uppercase tracking-[0.3em] text-sm mb-6">Who I Am</h2>
              <h3 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 leading-tight">Building simple solutions for <br/> complex problems.</h3>
              <div className="text-slate-600 text-xl leading-relaxed font-light">
                <p>
                  I am a Software Developer dedicated to building user-focused applications. My journey is driven by 
                  continuous learning, prioritizing clean, reusable code and Agile workflows to deliver simple solutions 
                  to complex problems. Beyond web development, I am passionate about IoT engineering, FinTech, 
                  and design using Figma, Adobe Photoshop, and Illustrator.
                </p>
              </div>
            </div>
          </div>
        </section>
{/* TECH STACKS SECTION */}
<section id="tech" className="mb-32">
  <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
    <div>
      <h2 className="text-3xl font-black mb-1 uppercase tracking-tighter text-slate-900">Tech Stack</h2>
      <p className="text-sm text-slate-500 font-medium">The tools and technologies I use to bring ideas to life.</p>
    </div>
    <div className="h-px bg-slate-100 flex-1 mx-6 hidden md:block mb-3 rounded-full"></div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      { title: "Frontend", items: ["React", "Next.js", "TS", "Flutter"], color: "blue" },
      { title: "Backend", items: ["Node.js", "Postgres", "Django"], color: "emerald" },
      { title: "Design", items: ["Figma", "Photoshop", "Illustrator"], color: "orange" },
      { title: "DevOps", items: ["Agile", "Git", "CI/CD"], color: "purple" }
    ].map((group) => (
      <div 
        key={group.title} 
        className="group p-6 rounded-[2rem] bg-slate-50/50 border border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300"
      >
        {/* Category Title */}
        <div className="flex items-center gap-2 mb-6">
          <div className={`w-1.5 h-1.5 rounded-full bg-${group.color}-500`}></div>
          <h4 className="text-slate-900 text-[13px] font-black uppercase tracking-[0.2em]">
            {group.title}
          </h4>
        </div>
        
        {/* frameworks */}
        <div className="flex flex-wrap gap-2">
          {group.items.map((item) => (
            <span 
              key={item} 
              className={`
                text-[10px] font-black uppercase tracking-tight
                px-4 py-2 rounded-full border border-white bg-white
                text-slate-600 shadow-sm transition-all duration-200
                group-hover:border-${group.color}-100 group-hover:text-slate-900
                hover:!bg-slate-900 hover:!text-white
                cursor-default select-none
              `}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>

        {/* FEATURED PROJECTS SECTION */}
        <section id="projects" className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 tracking-tighter uppercase">Featured Projects</h2>
            <p className="text-slate-500 max-w-xl mx-auto">A selection of projects ranging from financial technology to hardware-software integration.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ProjectCard title="TrackFunds App" role="Lead Developer" status="Live" image="/trackfunds.jpg" description="Full-stack mobile application built with Flutter and Node.js for real-time expense tracking." link="https://github.com/josephineAr/ExpenseTrackerApp" />
            <ProjectCard title="APF Service Portal" role="Frontend Lead" status="Completed" image="/portal.png" description="Secure service web portal, member management and admin portal for APF Uganda" link="https://apfuganda.org" />
            <ProjectCard title="IoT Swine Monitor" role="Hardware Engineer" status="Prototype" image="/Dashboard.png" description="Integrated hardware system using ESP32 to monitor sensor data." link="https://github.com/Arindajo/swine-app" />
          </div>
        </section>
        
        {/* REACH OUT  */}
        <footer id="contact" className="pt-20 pb-12 border-t border-slate-100 flex flex-col items-center text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-6">Available for new projects</span>
          <div className="max-w-2xl mb-10">
            <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6 text-slate-900">Reach Out</h3>
            <p className="text-lg text-slate-500 font-medium px-4">Let's work together. From concept to deployment, I build features that scale and are easy to maintain.</p>
          </div>

          <a href="mailto:arindajosephine7@gmail.com" className="group flex items-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-[1.05] shadow-xl shadow-slate-200 mb-12">
            <span className="text-sm font-black uppercase tracking-widest">Email Me</span>
            <ChevronRight size={18} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <h2 className="text-xl md:text-2xl font-black tracking-tighter text-slate-900 bg-yellow-100 px-6 py-2 rounded-lg mb-20 transition-all hover:bg-blue-50 hover:text-blue-600">
            arindajosephine7@gmail.com
          </h2>

          <div className="flex flex-col md:flex-row justify-between w-full items-center text-sm text-slate-400 font-medium pt-12 border-t border-slate-50">
            <p>© 2026 Arinda Josephine. Kampala, Uganda.</p>
            <div className="flex gap-8 mt-6 md:mt-0 uppercase tracking-tighter">
               <a href="/resume.pdf" target="_blank" className="hover:text-slate-900 transition-colors">Resume</a>
               <a href="https://github.com/Arindajo" className="hover:text-slate-900 transition-colors">GitHub</a>
               <a href="https://ug.linkedin.com/in/arinda-josephine-27281a280" className="hover:text-slate-900 transition-colors">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

function SocialLink({ href, icon }: { href: string, icon: any }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="p-4 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-slate-400 hover:text-blue-600">
      {icon}
    </a>
  );
}

const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>;

const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>;
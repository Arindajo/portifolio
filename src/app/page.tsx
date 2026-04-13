import ProjectCard from '../components/card';
import { Mail, Cpu, Palette, Layout, Server, Settings, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    
    <main className="min-h-screen bg-white text-slate-900 px-6 py-12 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      
      {/* NAVIGATION  */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center mb-16 py-4 border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="font-black text-2xl tracking-tighter text-blue-600">AJ<span className="text-slate-400">.</span></div>
        <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest text-slate-500">
          <a href="#about" className="hover:text-blue-600 transition-all">About</a>
          <a href="#tech" className="hover:text-blue-600 transition-all">Skills</a>
          <a href="#projects" className="hover:text-blue-600 transition-all">Projects</a>
          <a href="#contact" className="px-4 py-2 bg-slate-900 text-white rounded-full hover:bg-blue-600 transition-all">Hire Me</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto">
        
        {/* HERO SECTION  */}
        <header className="flex flex-col md:flex-row items-center gap-16 mb-32 py-12">
          <div className="relative shrink-0">
            <div className="w-44 h-44 md:w-60 md:h-60 rounded-full overflow-hidden border-[6px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] ring-1 ring-slate-100">
              <img 
                src="/profile.jpg" 
                alt="Arinda Josephine" 
                className="w-full h-full object-cover scale-110" 
              />
            </div>
            <div className="absolute bottom-6 right-6 w-7 h-7 bg-emerald-500 border-[5px] border-white rounded-full shadow-lg animate-pulse"></div>
          </div>

          <div className="text-center md:text-left flex-1">
            <h1 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tight mb-6">
              Arinda Josephine
            </h1>
            <p className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold text-sm mb-6 tracking-wide uppercase border border-blue-100">
              Junior Fullstack Developer 
            </p>
            <p className="text-slate-500 max-w-xl leading-relaxed text-xl mb-10 font-medium">
              Specializing in <span className="text-slate-900">modular  architectures</span>, Fintech logic, and IoT integrations. 
              Bridging clean code with creative design.
            </p>

            <div className="flex gap-4 justify-center md:justify-start">
              <SocialLink href="https://github.com/Arindajo" icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>} />
              <SocialLink href="https://linkedin.com/arinda-josephine" icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>} />
              <SocialLink href="arindajosephine7@gmail.com" icon={<Mail size={20} />} isEmail />
            </div>
          </div>
        </header>

        {/* ABOUT ME SECTION  */}
        <section id="about" className="mb-32">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <div className="max-w-4xl relative z-10">
              <h2 className="text-blue-400 font-bold uppercase tracking-[0.3em] text-sm mb-6">Discovery</h2>
              <h3 className="text-4xl md:text-5xl font-black mb-10 text-white leading-tight">
                Building simple solutions for <br/> complex problems.
              </h3>
              <div className="text-slate-400 text-xl leading-relaxed font-light">
                <p>
                  I am a Software Developer  dedicated to building modular, 
                  high-performance applications. My professional journey. I prioritize learning by 
                  doing, which drives me to prioritize clean, reusable code and professional Agile 
                  workflows to deliver simple solutions to complex problems. Beyond traditional web 
                  development, Am passionate about IoT engineering, working on FinTech Solutions 
                  and I also do design using Figma, Adobe Photoshop, 
                  and Illustrator.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACKS SECTION */}
        <section id="tech" className="mb-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-4xl font-black mb-2">Technical Expertise</h2>
              <p className="text-slate-500">The tools and technologies I use to bring ideas to life.</p>
            </div>
            <div className="h-1 bg-slate-100 flex-1 mx-8 hidden md:block mb-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StackCard title="Frontend" items={["React.js / Next.js", "TypeScript (TSX)", "Flutter & Dart", "Tailwind CSS"]} color="blue" />
            <StackCard title="Backend" items={["Node.js / Express", "PostgreSQL", "Django", "REST APIs"]} color="green" />
            <StackCard title="Design" items={["Figma", "Adobe Photoshop", "Adobe Illustrator", ]} color="orange" />
            <StackCard title="DevOps" items={["Agile & Scrum", "Git / GitHub", "CI/CD Pipelines", ]} color="purple" />
          </div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section id="projects" className="mb-40">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6">Featured Projects</h2>
            <p className="text-slate-500 max-w-xl mx-auto">A selection of projects ranging from financial technology to hardware-software integration.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ProjectCard title="TrackFunds App" role="Lead Developer" status="Live" image="/trackfunds.png" description="A full-stack mobile application built with Flutter and Node.js for real-time expense tracking." link="#" />
            <ProjectCard title="APF Service Portal" role="Frontend Lead" status="Completed" image="/portal.png" description="A secure service web portal, member management and admin portal for APF Uganda" link="#" />
            <ProjectCard title="IoT enabled Animal Monitor" role="Hardware Engineer" status="Prototype" image="/Dashboard.png" description="Integrated hardware system using ESP32 to monitor sensor data." link="#" />
          </div>
        </section>
        
        <footer id="contact" className="py-20 border-t border-slate-100 flex flex-col items-center text-center">
          <h2 className="text-4xl font-black mb-6 italic">Let's work together.</h2>
          <a href="mailto:your@email.com" className="text-2xl font-bold text-blue-600 hover:text-slate-900 transition-colors mb-12 flex items-center gap-2">
            arindajosephine7@gmail.com <ChevronRight size={24} />
          </a>
          <div className="flex flex-col md:flex-row justify-between w-full items-center text-sm text-slate-400 font-medium pt-12 border-t border-slate-50">
            <p>© 2026 Arinda Josephine. Kampala, Uganda.</p>
            <div className="flex gap-8 mt-6 md:mt-0 uppercase tracking-tighter">
               <a href="#" className="hover:text-slate-900 transition-colors">Resume</a>
               <a href="#" className="hover:text-slate-900 transition-colors">GitHub</a>
               <a href="#" className="hover:text-slate-900 transition-colors">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

// Sub-component for Social Links to keep code clean
function SocialLink({ href, icon, isEmail = false }: { href: string, icon: any, isEmail?: boolean }) {
  return (
    <a 
      href={href} 
      target={isEmail ? "_self" : "_blank"} 
      className="p-4 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-slate-400 hover:text-blue-600"
    >
      {icon}
    </a>
  );
}

// HELPER COMPONENT FOR STACK CARDS
function StackCard({ title, items, color }: { title: string, items: string[], color: string }) {
  const colors: any = {
    blue: "text-blue-600 bg-blue-50 border-blue-100",
    green: "text-emerald-600 bg-emerald-50 border-emerald-100",
    orange: "text-orange-600 bg-orange-50 border-orange-100",
    purple: "text-purple-600 bg-purple-50 border-purple-100"
  };

  return (
    <div className="p-10 border border-slate-100 rounded-[2.5rem] bg-white hover:border-blue-200 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 group">
      <div className={`w-fit px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border ${colors[color]}`}>
        {title}
      </div>
      <ul className="space-y-4">
        {items.map(item => (
          <li key={item} className="flex items-center gap-3 text-slate-600 font-medium group-hover:text-slate-900 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-blue-400 group-hover:scale-150 transition-all"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
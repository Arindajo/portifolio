import ProjectCard from '../components/card';
import { Mail, Cpu, Palette, Layout, Server, Settings } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-12">
      {/* NAVIGATION */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center mb-16 py-4 border-b border-slate-50">
        <div className="font-black text-xl tracking-tighter text-blue-600">AJ.</div>
        <div className="hidden md:flex gap-8 text-sm font-bold text-slate-500">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#tech" className="hover:text-blue-600 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto">
        
        {/* HERO SECTION */}
        <header className="flex flex-col md:flex-row items-center gap-10 mb-20 py-8">
          <div className="relative shrink-0">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-8 ring-slate-50">
              <img 
                src="/profile.jpg" 
                alt="Arinda Josephine" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute bottom-6 right-6 w-6 h-6 bg-emerald-500 border-4 border-white rounded-full shadow-lg"></div>
          </div>

          <div className="text-center md:text-left flex-1">
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-4">
              Arinda Josephine
            </h1>
            <p className="text-blue-600 font-bold text-lg md:text-xl mb-6 tracking-wide uppercase">
              Fullstack Developer & Frontend Team Lead
            </p>
            <p className="text-slate-600 max-w-xl leading-relaxed text-lg mb-8">
              Specializing in modular React architectures, Fintech logic, and IoT integrations. 
              Bridging clean code with creative design.
            </p>

            {/* SOCIAL MEDIA HANDLES */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://github.com" target="_blank" className="p-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all text-slate-600 hover:text-black hover:shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" className="p-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all text-slate-600 hover:text-blue-700 hover:shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="mailto:your@email.com" className="p-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all text-slate-600 hover:text-red-500 hover:shadow-sm">
                <Mail size={22} />
              </a>
            </div>
          </div>
        </header>

        {/* ABOUT ME SECTION */}
        <section id="about" className="mb-28 py-20 bg-slate-50 rounded-[3rem] px-8 md:px-16 border border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black mb-8 text-center md:text-left underline decoration-blue-500/30 underline-offset-8">
              Who I Am
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed">
              <p>
                I am a Software Developer and Frontend Team Lead dedicated to building modular, 
                high-performance applications. My professional philosophy is rooted in learning by 
                doing, which drives me to prioritize clean, reusable code and professional Agile 
                workflows to deliver simple solutions to complex problems. Beyond traditional web 
                development, I bridge the gap between hardware and software through IoT engineering 
                and leverage my expertise in visual storytelling using Figma, Adobe Photoshop, 
                and Illustrator to ensure every project is functional and aesthetically cohesive.
              </p>
            </div>
          </div>
        </section>

        {/* TECH STACKS SECTION */}
        <section id="tech" className="mb-32">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StackCard title="Frontend" items={["React.js / Next.js", "TypeScript (TSX)", "Flutter & Dart", "Tailwind CSS"]} color="blue" />
            <StackCard title="Backend" items={["Node.js / Express", "PostgreSQL", "Django", "REST APIs"]} color="green" />
            <StackCard title="Design" items={["Figma", "Adobe Photoshop", "Adobe Illustrator", "UI/UX Design"]} color="orange" />
            <StackCard title="DevOps" items={["Agile & Scrum", "Git / GitHub", "CI/CD Pipelines", "Modular Logic"]} color="purple" />
          </div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section id="projects" className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Featured Projects</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard 
              title="TrackFunds App"
              role="Lead Developer"
              status="Live"
              image="/trackfunds.png" 
              description="A full-stack mobile application built with Flutter and Node.js for real-time expense tracking and budget management."
             
              link="#"
            />
            <ProjectCard 
              title="Service Portal"
              role="Frontend Lead"
              status="Completed"
              image="/portal.png" 
              description="Enterprise dashboard for professional membership governance featuring automated alerts and secure document handling."
             
              link="#"
            />
            <ProjectCard 
              title="IoT Environment Monitor"
              role="Hardware Engineer"
              status="Prototype"
              image="/iot.png" 
              description="Integrated hardware system using ESP32 to monitor environmental sensor data with a real-time web dashboard."
            
              link="#"
            />
          </div>
        </section>
        
        <footer id="contact" className="py-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2026 Arinda Josephine. Designed & Developed with Next.js.</p>
          <div className="flex gap-8 mt-6 md:mt-0 font-bold uppercase tracking-widest text-[11px]">
             <a href="#" className="hover:text-blue-600 transition-colors">Resume</a>
             <a href="mailto:your@email.com" className="hover:text-blue-600 transition-colors">Get In Touch</a>
          </div>
        </footer>
      </div>
    </main>
  );
}


function StackCard({ title, items, color }: { title: string, items: string[], color: string }) {
  const colors: any = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    orange: "bg-orange-50 text-orange-600",
    purple: "bg-purple-50 text-purple-600"
  };

  return (
    <div className="p-8 border border-slate-100 rounded-3xl hover:shadow-lg transition-all duration-300">
      <div className={`w-fit px-4 py-1 rounded-full text-xs font-bold mb-6 ${colors[color]}`}>
        {title}
      </div>
      <ul className="text-sm text-slate-600 space-y-3 font-medium">
        {items.map(item => (
          <li key={item} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
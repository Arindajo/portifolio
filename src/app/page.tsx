import ProjectCard from '../components/card';
import { Mail, Cpu, Palette } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        
        {/* HERO SECTION */}
        <header className="flex flex-col md:flex-row items-center gap-10 mb-20">
          <div className="w-40 h-40 shrink-0">
            <img src="/profile.jpg" alt="Profile" className="rounded-2xl object-cover w-full h-full border shadow-md" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-black mb-2">Your Name</h1>
            <p className="text-blue-600 font-semibold mb-4 text-lg">Junior Fullstack Developer</p>
            
            {/* SOCIAL MEDIA HANDLES */}
            <div className="flex gap-3 justify-center md:justify-start">
              {/* GitHub */}
              <a href="https://github.com" target="_blank" className="p-2 border rounded-lg hover:bg-slate-50 transition-colors text-slate-600 hover:text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" className="p-2 border rounded-lg hover:bg-slate-50 transition-colors text-slate-600 hover:text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* Email */}
              <a href="mailto:your@email.com" className="p-2 border rounded-lg hover:bg-slate-50 transition-colors text-slate-600 hover:text-red-500">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </header>
     
{/* ABOUT ME SECTION */}
<section className="mb-24 py-16 border-t border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who I Am</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  I am a <span className="text-blue-600 font-semibold">Junior Software Developer</span>  I specialize in building modular, 
                  high-performance applications with a focus on usability.
                </p>
                <p>
                  My journey is driven by a <span className="italic">learning by doing</span> 
                  I prioritize clean code and professional Agile workflows.
                </p>
                <p>
                 I work with both hardware and software through IoT and also do designing using figma, adobe photoshop, adobe illustrator.
                </p>
              </div>
            </div>
            
            
          </div>
        </section>

        {/* TECH STACKS SECTION */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 text-center">Technical Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Frontend */}
            <div className="p-6 border border-slate-100 rounded-2xl hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="font-bold">Frontend</span>
              </div>
             
              <ul className="text-sm text-slate-600 space-y-2">
                <li>React.js / Next.js</li>
                <li>TypeScript (TSX)</li>
                <li>Flutter & Dart</li>
                <li>Tailwind CSS </li>
              </ul>
            </div>

            {/* Backend */}
            <div className="p-6 border border-slate-100 rounded-2xl hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="font-bold">Backend</span>
              </div>
              
              <ul className="text-sm text-slate-600 space-y-2">
                <li>Node.js / Express</li>
                <li>PostgreSQL</li>
               <li>Django</li>
              </ul>
            </div>

            {/* Design*/}
            <div className="p-6 border border-slate-100 rounded-2xl hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                <span className="font-bold">Design</span>
              </div>
            
              <ul className="text-sm text-slate-600 space-y-2">
                <li>Figma</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
               
              </ul>
            </div>

            {/* Professional Workflow */}
            <div className="p-6 border border-slate-100 rounded-2xl hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="font-bold">DevOps</span>
              </div>
            
              <ul className="text-sm text-slate-600 space-y-2">
                <li>Agile & Scrum</li>
                <li>Git / GitHub</li>
                <li>CI/CD Pipelines</li>
               
              </ul>
            </div>

          </div>
        </section>


        {/* FEATURED PROJECTS SECTION */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
            
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard 
              title="Online Bookstore"
              role="Fullstack Developer"
              status="Completed"
              image="/bookstore.png" 
              description="A collaborative online bookstore project with a chatbot assistant."
              
              link="#"
            />
          </div>
        </section>

        
        <footer className="py-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2026 Arinda Josephine. Built with Next.js & Tailwind CSS.</p>
          <div className="flex gap-6 mt-4 md:mt-0 font-medium">
             <a href="#" className="hover:text-blue-600 transition-colors">Resume</a>
             <a href="#" className="hover:text-blue-600 transition-colors">Projects</a>
             <a href="mailto:your@email.com" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
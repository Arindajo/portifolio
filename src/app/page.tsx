import ProjectCard from '../components/card';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 px-6 py-12">
      <section className="max-w-4xl mx-auto">
        {/* Hero Section */}
<header className="flex flex-col md:flex-row items-center gap-8 mb-16">
  <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full border-4 border-blue-500 shadow-lg">
    <img 
      src="/profile.jpg" 
      alt="Profile Photo" 
      className="object-cover w-full h-full"
    />
  </div>
  <div className="text-center md:text-left">
    <h1 className="text-4xl font-extrabold tracking-tight">Junior Fullstack Developer</h1>
    <p className="mt-2 text-lg text-slate-600 font-medium">
      Frontend UI/UX 
    </p>
    <p className="text-slate-500">
      Specializing in Frontend and Creative Design.
    </p>
  </div>
</header>

        {/* Projects Grid */}
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <ProjectCard 
    title="TrackFunds"
    role="Lead Fullstack Developer"
    description="Mobile budget tracker with real-time expense management."
    tags={["Flutter", "Node.js", "PostgreSQL"]}
    link="https://github.com/yourusername/trackfunds"
  />
  <ProjectCard 
    title="Service Portal"
    role="Frontend Team Lead"
    description="Secure dashboard for professional accounting associations."
    tags={["React", "TypeScript", "Tailwind"]}
    link="https://github.com/yourusername/service-portal"
  />
</div>
       
{/* About Section */}
<section className="mt-20 p-8 bg-blue-50 rounded-2xl border border-blue-100">
  <h2 className="text-2xl font-bold mb-4">About Me</h2>
  <p className="text-slate-700 leading-relaxed max-w-2xl">
    I am a Junior Software Developer with a passion 
    for building modular, usable applications. My approach is learning by building, 
    which has led me to lead teams in developing professional service portals 
    and personal projects like mobile budget trackers. I thrive in Agile environments 
    and love turning complex logic into simple UI.
  </p>
</section>
      </section>
    </main>
  );
}
import ProjectCard from '../components/card';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 px-6 py-12">
      <section className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <header className="mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight">Junior Fullstack Developer</h1>
          <p className="mt-4 text-lg text-slate-600">
            Frontend UI/UX 
          </p>
        </header>

        {/* Projects Grid */}
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard 
            title="TrackFunds"
            role="Lead Fullstack Developer"
            description="A mobile budget tracker that helps users manage expenses in real-time."
            tags={["Flutter", "Node.js", "PostgreSQL"]}
          />
          <ProjectCard 
            title="Service Portal"
            role="Frontend Team Lead"
            description="A secure dashboard for accounting associations to manage memberships."
            tags={["React", "TypeScript", "Tailwind CSS"]}
          />
        </div>
        {/* Skills Section */}
<section className="mt-20">
  <h2 className="text-2xl font-bold mb-8">Technical Stack</h2>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
    
    {/* Frontend */}
    <div>
      <h3 className="font-semibold text-slate-900 mb-3 underline decoration-blue-500 decoration-2 underline-offset-4">Frontend</h3>
      <ul className="space-y-2 text-slate-600">
        <li>React.js / Next.js</li>
        <li>TypeScript</li>
        <li>Flutter & Dart</li>
        <li>Tailwind CSS</li>
      </ul>
    </div>

    {/* Backend */}
    <div>
      <h3 className="font-semibold text-slate-900 mb-3 underline decoration-green-500 decoration-2 underline-offset-4">Backend</h3>
      <ul className="space-y-2 text-slate-600">
        <li>Node.js / Express</li>
        <li>PostgreSQL</li>
        <li>REST APIs</li>
        <li>Python</li>
      </ul>
    </div>

    {/* Professional Workflow */}
    <div>
      <h3 className="font-semibold text-slate-900 mb-3 underline decoration-purple-500 decoration-2 underline-offset-4">DevOps & Tools</h3>
      <ul className="space-y-2 text-slate-600">
        <li>Git / GitHub</li>
        <li>CI/CD (GitHub Actions)</li>
        <li>Agile / Scrum</li>
        <li>Vercel </li>
      </ul>
    </div>

  </div>
</section>
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
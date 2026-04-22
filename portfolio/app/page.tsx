import Button from "@/components/button";
import SkillCard from "@/components/skill-card";
import ProjectCard from "@/components/project-card";

export default function Home() {
  return (
      <main className="bg-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col gap-y-20 pt-20 pb-20 px-5">
            <section id="home" className="card flex flex-col gap-8 scroll-mt-20 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-sky-100">
              <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16">
                <div className="flex-1 text-center lg:text-left">
                  <p className="text-sky-700 font-bold text-sm sm:text-base uppercase tracking-[0.3em]">Simulation Engineering Team</p>
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 py-3">Models, tools, and dashboards built for engineering decisions.</h1>
                  <h3 className="text-lg sm:text-xl lg:text-2xl text-slate-700 max-w-4xl">We develop simulation workflows that shorten design cycles, expose failure modes earlier, and connect engineering insight to business decisions.</h3>
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
                    <Button href="/#projects">View Team Projects</Button>
                    <Button href="/#skills" children="Core Capabilities" className="bg-white border border-sky-300 hover:bg-sky-50" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 lg:w-[360px]">
                  <div className="rounded-2xl bg-slate-900 text-white p-5 shadow-md">
                    <p className="text-3xl font-bold">4</p>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Active Tool Tracks</p>
                  </div>
                  <div className="rounded-2xl bg-white p-5 shadow-md">
                    <p className="text-3xl font-bold text-slate-900">FEA</p>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Seals and Springs</p>
                  </div>
                  <div className="rounded-2xl bg-white p-5 shadow-md">
                    <p className="text-3xl font-bold text-slate-900">BI</p>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Commercial Reporting</p>
                  </div>
                  <div className="rounded-2xl bg-sky-600 text-white p-5 shadow-md">
                    <p className="text-3xl font-bold">24/7</p>
                    <p className="text-sm uppercase tracking-[0.2em] text-sky-100">Automated Studies</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-xl border border-slate-200 bg-white/80 p-4">
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-[0.2em]">What we build</p>
                  <p className="mt-2 text-slate-800">Parametric simulations, internal engineering tools, and stakeholder-ready analytics.</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white/80 p-4">
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-[0.2em]">What we optimize</p>
                  <p className="mt-2 text-slate-800">Seal life, spring performance, quoting speed, and operational visibility.</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white/80 p-4">
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-[0.2em]">How we work</p>
                  <p className="mt-2 text-slate-800">Physics-first models backed by clean data pipelines and lightweight interfaces.</p>
                </div>
              </div>
            </section>
    

            <section id="projects" className="card flex flex-col gap-3 scroll-mt-20">
              <h2 className="title">Projects</h2>
              <p className="text-text text-lg">A sample portfolio of simulation and engineering enablement work. These are placeholder case studies that show the types of tools this team builds.</p>
              <div className="grid grid-cols-1 min-[815px]:grid-cols-3 justify-items-center mx-auto gap-6 lg:gap-14 mt-6">
                <ProjectCard 
                  href="/"
                  title="Radial Seal Simulation"
                  shortDescription="Finite element workflow for contact pressure, wear trends, and leakage risk."
                  longDescription="A parameter-driven radial seal model used to evaluate lip geometry, shaft speed, interference, and temperature effects before prototype release."
                  mediaSrc="/projects/orbital/thumbnail.png"
                  comingSoon={true}
                />

                <ProjectCard 
                  href="/"
                  title="Spring Simulation Tool"
                  shortDescription="Interactive calculator and model set for force-deflection and fatigue tradeoffs."
                  longDescription="An internal design tool that lets engineers compare spring concepts, tune boundary conditions, and export simulation-ready inputs in minutes instead of hours."
                  mediaSrc="/projects/bike-simulation/thumbnail.png"
                  comingSoon={true}
                />

                <ProjectCard 
                  href="/"
                  title="Pricing Tool"
                  shortDescription="Commercial calculator that connects product rules, manufacturing assumptions, and quote logic."
                  longDescription="A browser-based pricing workflow that standardizes estimate inputs, surfaces margin sensitivity, and reduces quoting turnaround for engineered products."
                  mediaSrc="/projects/searxng/image.png"
                  comingSoon={true}
                />

                <ProjectCard 
                  href="/"
                  title="Power BI Operations Dashboard"
                  shortDescription="Executive and engineering reporting for test activity, quoting throughput, and project status."
                  longDescription="A Power BI dashboard suite that consolidates simulation program health, pipeline activity, and delivery metrics into one decision-ready reporting layer."
                  mediaSrc="/projects/driverseat/thumbnail.png"
                  comingSoon={true}
                />
              </div>
            </section>


            <section id="skills" className="card flex flex-col gap-3 scroll-mt-20">
              <h2 className="title">Capabilities</h2>
              <p className="text-text text-lg">This team sits at the overlap of simulation, software, and reporting. The stack below reflects the core tools used to build internal engineering applications and decision support systems.</p>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center mx-auto mb-4 md:mb-10  mt-6">
                <SkillCard imageSrc="/skills/skill-cpp.png" alt="C++ icon" skillName="Solver Integration" />
                <SkillCard imageSrc="/skills/skill-python.png" alt="Python icon" skillName="Automation" />
                <SkillCard imageSrc="/skills/skill-javascript.png" alt="JavaScript icon" skillName="Internal Tools" />
                <SkillCard imageSrc="/skills/skill-sql.png" alt="SQL icon" skillName="Data Modeling" />
                <SkillCard imageSrc="/skills/skill-django.png" alt="Django icon" skillName="Workflow Apps" />

              </div>


              <Button href="/#home" className="mx-auto">Back to Overview</Button> 
            </section>

        </div>
      </main>

  );
}

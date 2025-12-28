import ProjectCard from "@/components/project-card";

export default function PrivatePage() {
  return (
    <main className="bg-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col gap-y-20 pt-20 pb-20 px-5">
        
        <section className="card flex flex-col gap-3">
          <h2 className="title">Reference Links</h2>
          <p className="text-text text-lg">Quick access to frequently used tools and resources.</p>
          <div className="grid grid-cols-1 min-[815px]:grid-cols-3 justify-items-center mx-auto gap-6 lg:gap-14 mt-6">
            
            <ProjectCard 
              href="https://www.spaceship.com/application/advanced-dns-application/manage/matthewengineering.com/"
              title="Spaceship DNS"
              shortDescription="Domain DNS Management"
              longDescription="Manage DNS records and domain settings for matthewengineering.com through Spaceship's advanced DNS application."
              mediaSrc="/skills/skill-python.png"
              open_new_tab={true}
            />

            <ProjectCard 
              href="https://railway.com/dashboard/"
              title="Railway"
              shortDescription="Cloud Deployment Platform"
              longDescription="Access Railway projects for deployment, monitoring, and managing cloud infrastructure."
              mediaSrc="/skills/skill-python.png"
              open_new_tab={true}
            />

            <ProjectCard 
              href="https://nerdcave.com/tailwind-cheat-sheet"
              title="Tailwind Cheat Sheet"
              shortDescription="Quick Tailwind CSS Reference"
              longDescription="Comprehensive Tailwind CSS cheat sheet for quick reference during development."
              mediaSrc="/skills/skill-python.png"
              open_new_tab={true}
            />

          </div>
        </section>

        <section className="card flex flex-col gap-3">
          <h2 className="title">Self-Hosted Tools</h2>
          <p className="text-text text-lg">Private instances of powerful development and database management tools.</p>
          <div className="grid grid-cols-1 min-[815px]:grid-cols-3 justify-items-center mx-auto gap-6 lg:gap-14 mt-6">
            
            <ProjectCard 
              href="/"
              title="PG Admin"
              shortDescription="PostgreSQL Administration"
              longDescription="Web-based PostgreSQL database administration tool. Manage databases, run queries, and monitor performance."
              mediaSrc="/skills/skill-python.png"
              comingSoon={true}
            />

            <ProjectCard 
              href="/"
              title="DBeaver"
              shortDescription="Universal Database Tool"
              longDescription="Self-hosted universal database management tool supporting multiple database types with advanced features."
              mediaSrc="/skills/skill-python.png"
              comingSoon={true}
            />

            <ProjectCard 
              href="/"
              title="Noco DB"
              shortDescription="Open Source Airtable Alternative"
              longDescription="Transform your database into a smart spreadsheet. Self-hosted no-code database platform with API support."
              mediaSrc="/skills/skill-python.png"
              comingSoon={true}
            />

            <ProjectCard 
              href="/"
              title="N8N"
              shortDescription="Workflow Automation"
              longDescription="Self-hosted workflow automation tool. Create complex automations with visual workflows and AI agent integration."
              mediaSrc="/skills/skill-python.png"
              comingSoon={true}
            />

          </div>
        </section>

      </div>
    </main>
  );
}

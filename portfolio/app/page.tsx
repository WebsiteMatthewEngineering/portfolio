import Image from "next/image";
import Button from "@/components/button";
import SkillCard from "@/components/skill-card";
import ProjectCard from "@/components/project-card";

export default function Home() {
  return (
      <main className="bg-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col gap-y-20 pt-20 pb-20 px-5">
            <section id="home" className="card flex flex-col lg:flex-row items-center gap-8 lg:gap-20 scroll-mt-20">
              <Image src="/MatthewAdamProfessionalHeadshot.jpg" alt="Matthew Adam" width={300} height={400} className="w-[300px] h-full mx-auto lg:mx-0 rounded-lg flex-shrink-0" />
              
              {/* Flex columns for the text on the side  */}
              <div className="flex flex-col text-center lg:text-left">
                <p className="text-text font-bold text-lg sm:text-xl">Hello, my name is</p>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-text py-2">Matthew Adam</h1>
                <h3 className="text-lg sm:text-xl lg:text-2xl text-text">Mechatronics and Backend Engineer specializing in mechanical design, electrical controls, and database backend systems.</h3>
                {/* Flex columns for the buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
                  <Button href = "/about-me" children="About Me" />
                  <Button href = "/#projects" children="Explore My Work >" />
                </div>
              </div>
            </section>
    

            <section id="projects" className="card flex flex-col gap-3 scroll-mt-20">
              <h2 className="title">Projects</h2>
              <p className="text-text text-lg">Explore some of the projects I've worked on over the years. Click, tap, or hover on the images to explore.</p>
              <div className="grid grid-cols-1 min-[815px]:grid-cols-3 justify-items-center mx-auto gap-6 lg:gap-14 mt-6">
                

                <ProjectCard 
                  href="/projects/orbital"
                  title="Planet Physics"
                  shortDescription="A 2D orbital mechanics simulation"
                  longDescription="As a fun side project, I used physical equations to create a realistic 2D orbital mechanics simulation."
                  mediaSrc="/skills/skill-python.png"
                  comingSoon={false}
                />


                {/* Best Ideas */}
                <ProjectCard 
                  href="/"
                  title="Postershack"
                  shortDescription="Purchase AI Generated Posters"
                  longDescription="Explore a collection of AI generated posters. I created a platform to showcase and sell unique AI art prints."
                  mediaSrc="/skills/skill-python.png"
                  comingSoon={true}
                />
                <ProjectCard 
                  href="/"
                  title="Personalized Youtube"
                  shortDescription="Youtube transcripts and bookmarked timestamps"
                  longDescription="Customize your own Youtube experience with transcripts and bookmarked timestamps. Primarily for audiobooks and lectures."
                  mediaSrc="/skills/skill-python.png"
                  comingSoon={true}
                />

                {/* Tutorial Ideas */}
                <ProjectCard 
                  href="/"
                  title="AI Resume Analyzer"
                  shortDescription="AI Powered Resume Feedback Tool"
                  longDescription="Get feedback on your resume using AI. I developed a tool that analyzes resumes and provides suggestions for improvement."
                  mediaSrc="/skills/skill-python.png"
                  comingSoon={true}
                />


                {/* Reach Ideas */}
                <ProjectCard 
                  href="/"
                  title="Driverseat"
                  shortDescription="Budgeting and Investing Tool"
                  longDescription="Take control of your finances with Driverseat. I developed a budgeting and investing tool to help users manage their money effectively."
                  mediaSrc="/skills/skill-python.png"
                  comingSoon={true}
                />

                {/* Self Hosted */}
                <ProjectCard 
                  href="/projects/searxng"
                  title="SearXNG"
                  shortDescription="Self Hosted Private Search Engine"
                  longDescription="Private search engines are critical to AI based LLM web searching. I set up and customized my own SearXNG instance."
                  mediaSrc="/skills/skill-python.png"
                  comingSoon={false}
                />


                {/* <ProjectCard 
                  href="/"
                  title="N8N Agentic Workflows"
                  shortDescription="Self Hosted Automation with AI"
                  longDescription="Automate your workflows with N8N and AI agents. I set up a self hosted instance to explore automation possibilities."
                  mediaSrc="/skills/skill-python.png"
                  comingSoon={true}
                /> */}


              </div>
            </section>


            <section id="skills" className="card flex flex-col gap-3 scroll-mt-20">
              <h2 className="title">Skills</h2>
              <p className="text-text text-lg">Through my career, I've been involved in various mechatronics clubs, classes, and hobby projects. Here are some of the languages, frameworks, and tools I've learned along the way.</p>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center mx-auto mb-4 md:mb-10  mt-6">


                <SkillCard imageSrc="/skills/skill-cpp.png" alt="Placeholder" skillName="C++" />
                <SkillCard imageSrc="/skills/skill-python.png" alt="Placeholder" skillName="Python" />
                <SkillCard imageSrc="/skills/skill-javascript.png" alt="Placeholder" skillName="Javascript" />
                <SkillCard imageSrc="/skills/skill-sql.png" alt="Placeholder" skillName="SQL" />
                <SkillCard imageSrc="/skills/skill-django.png" alt="Placeholder" skillName="Django" />

              </div>


              <Button href='/MatthewAdamResume.pdf' children="View my resume!" className="mx-auto" /> 
            </section>

        </div>
      </main>

  );
}

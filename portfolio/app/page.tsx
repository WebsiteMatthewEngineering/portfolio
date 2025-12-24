import Image from "next/image";
import Button from "@/components/button";
import SkillCard from "@/components/skill-card";
import ProjectCard from "@/components/project-card";

export default function Home() {
  return (
      <main className="bg-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col gap-y-20 pt-20 pb-20 px-5">
            <section id="home" className="card flex flex-row items-center gap-20 scroll-mt-20">
              <Image src="/portrait.jpg" alt="Matthew Adam" width={300} height={400} className="w-[300px] h-full mx-auto md:mx-0 rounded-lg" />
              
              {/* Flex columns for the text on the side  */}
              <div className="flex flex-col">
                <p className="text-text font-bold text-xl">Hello, my name is</p>
                <h1 className="lg:text-7xl text-5xl font-bold text-text py-2">Matthew Adam</h1>
                <h3 className="text-2xl text-text">Mechatronics and Backend Engineer specializing in mechanical design, electrical controls, and database backend systems.</h3>
                {/* Flex columns for the buttons */}
                <div className="flex flex-row max-[475px]:flex-col md:max-[895px]:flex-col gap-4 pt-6">
                  <Button href = "/about-me" children="About Me" />
                  <Button href = "/" children="Explore My Work >" />
                </div>
              </div>
            </section>
    

            <section id="projects" className="card flex flex-col gap-3 scroll-mt-20">
              <h2 className="title">Projects</h2>
              <p className="text-text text-lg">Explore some of the projects I've worked on over the years. Click, tap, or hover on the images to explore.</p>
              <div className="grid grid-cols-1 min-[815px]:grid-cols-3 justify-items-center mx-auto gap-6 lg:gap-14 mt-6">
                

                <ProjectCard 
                  href="https://orbital.matthewengineering.com/"
                  title="Planet Physics"
                  shortDescription="A 2D orbital mechanics simulation"
                  longDescription="As a fun side project, I used physical equations to create a realistic 2D orbital mechanics simulation."
                  mediaSrc="/skills/skill-python.png"
                  comingSoon={false}
                />

                <ProjectCard 
                  href="/"
                  title="Placeholder Project"
                  shortDescription="Example"
                  longDescription="Example"
                  mediaSrc="/skills/skill-python.png"
                  comingSoon={true}
                />
                <ProjectCard 
                  href="/"
                  title="Placeholder Project"
                  shortDescription="Example"
                  longDescription="Example"
                  mediaSrc="/skills/skill-python.png"
                  comingSoon={true}
                />
                <ProjectCard 
                  href="/"
                  title="Placeholder Project"
                  shortDescription="Example"
                  longDescription="Example"
                  mediaSrc="/skills/skill-python.png"
                  comingSoon={true}
                />
                <ProjectCard 
                  href="/"
                  title="Placeholder Project"
                  shortDescription="Example"
                  longDescription="Example"
                  mediaSrc="/skills/skill-python.png"
                  comingSoon={true}
                />
                <ProjectCard 
                  href="/"
                  title="Placeholder Project"
                  shortDescription="Example"
                  longDescription="Example"
                  mediaSrc="/skills/skill-python.png"
                  comingSoon={true}
                />


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

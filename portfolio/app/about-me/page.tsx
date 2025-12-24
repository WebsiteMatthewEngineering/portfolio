import Image from "next/image";
import Button from "@/components/button";

export default function AboutMe() {
  return (
    <main className="bg-gray-200">
      <div className="max-w-5xl mx-auto flex flex-col gap-10 pt-20 pb-20 px-5">
        
        <div className="card flex flex-col gap-8 p-8">
            <div className="flex flex-row justify-between items-center mb-4">
                <h2 className="text-4xl font-bold text-text">About Me</h2>
                <Button href="/" className="">Return to home page</Button>
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-text text-lg text-justify">
                    Hi! I'm Matthew, an mechatronics engineer with a passion for new technologies for business impact. 
                    Currently, I'm working at Omniseal Solutions, a Saint Gobain business focused on delivering precision manufactured high end sealing solutions. 
                    Feel free to check out my resume linked in the footer at the bottom of the page!
                </p>
                <p className="text-text text-lg text-justify">
                    Outside of school, I enjoy working on personal projects, building mechatronic systems, and exploring 
                    new technologies. I also enjoy hiking, camping, and spending time with friends and family.
                </p>
            </div>

            <div className="max-w-xl mx-auto grid grid-cols-3 gap-4">
                <img alt="Activity photo" src="/portrait.jpg" className="rounded-lg object-cover w-full h-full" />
                <img alt="Group activity" src="/portrait.jpg" className="rounded-lg object-cover w-full h-full col-span-2" />
                <img alt="Outdoor adventure" src="/portrait.jpg" className="rounded-lg object-cover w-full h-full col-span-2" />
                <img alt="Hobby photo" src="/portrait.jpg" className="rounded-lg object-cover w-full h-full" />
                <img alt="Scenic view" src="/portrait.jpg" className="rounded-lg object-cover w-full max-h-[300px] col-span-3" />
            </div>

            <p className="text-text text-lg text-justify">
                During my time at WPI, I've had the opportunity to work on various robotics and engineering 
                projects. I've gained experience in mechanical design, electrical systems, programming, and 
                systems integration. These experiences have shaped my passion for creating innovative solutions 
                to real-world problems.
            </p>

            <div className="max-w-xl mx-auto grid grid-cols-2 gap-4">
                <img alt="Project work" src="/portrait.jpg" className="rounded-lg object-cover w-full max-h-[300px]" />
                <img alt="Innovation moment" src="/portrait.jpg" className="rounded-lg object-cover w-full max-h-[300px]" />
                <img alt="Team collaboration" src="/portrait.jpg" className="rounded-lg object-cover w-full max-h-[300px] col-span-2" />
            </div>

            <Button href="/" className="mx-auto">Return to home page</Button>
        </div>
      </div>
    </main>
  );
}

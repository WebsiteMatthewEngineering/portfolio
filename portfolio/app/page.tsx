import Image from "next/image";

export default function Home() {
  return (
      <main className="flex flex-col bg-base-200 px-2 sm:px-6">
        <section id="home" className="page-section flex flex-col md:flex-row gap-10 mt-32 items-center">
          {/* <img src="@/public/portait.jpg" alt="Eddie" className="w-[300px] h-full mx-auto md:mx-0 rounded-lg" /> */}
          <Image src="/portrait.jpg" alt="Matthew Adam" width={300} height={400} className="w-[300px] h-full mx-auto md:mx-0 rounded-lg" />
          <div className="flex flex-col">
            <p className="text-text font-bold text-xl">Hello, my name is</p>
            <h1 className="lg:text-7xl text-5xl font-bold text-text py-2">Matthew Adam</h1>
            <h2 className="text-2xl text-text">Mechatronics and Backend Engineer specializing in mechanical design, electrical controls, and database backend systems.</h2>
            <div className="flex flex-row max-[475px]:flex-col md:max-[895px]:flex-col gap-4 pt-6">
              <a href="/" className="button">About Me</a>
              <a href="/" className="button cursor-pointer">Explore my work <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg></a>
            </div>
          </div>
        </section>



        <div className="card w-300 bg-base-100 card-xl shadow-sm">
          <div className="card-body">
          <section id="projects">
            <h2 className="title">Projects</h2>
            <p className="text-text text-lg">Explore some of the projects I've worked on over the years. Click, tap, or hover on the images to explore.</p>
            <div className="grid grid-cols-1 min-[815px]:grid-cols-2 justify-items-center mx-auto gap-6 lg:gap-14 mt-6">
              <a href="/" className="max-w-[400px] group rounded-lg bg-background-secondary sm:p-4 p-2 shadow-accent shadow-md">
                <p className="text-text text-xl font-bold pb-2">Planet Physics</p>
                <div className="relative overflow-hidden aspect-video rounded-lg">
                  <video src="/static/media/planet-physics-demo.f8c9062687b55ea1eec8.mov" autoPlay loop muted className="w-full h-full object-cover" />
                  <div className="absolute top-0 h-full -translate-y-full group-hover:transform-none duration-500 transition-transform bg-background-secondary pt-1 p-4">
                    <p className="text-text lg:text-lg text-base">As a fun side project during high school, I used equations from an AP physics class to create a 2D orbital mechanics simulation.</p>
                    <p className="lg:mt-3 mt-1 button-small w-fit">Click to learn more!</p>
                  </div>
                </div>
              </a>

              <a href="/" className="max-w-[400px] group rounded-lg bg-background-secondary sm:p-4 p-2 shadow-accent shadow-md">
                <p className="text-text text-xl font-bold pb-2">Hypixel Player Tracker</p>
                <div className="relative overflow-hidden aspect-video rounded-lg">
                  <img src="/static/media/hypixel-player-tracker-output.0cc088297329198a78d7.png" alt="Hypixel Player Tracker" />
                  <div className="absolute top-0 h-full -translate-y-full group-hover:transform-none duration-500 transition-transform bg-background-secondary pt-1 p-4">
                    <p className="text-text lg:text-lg text-base">To gain an advantage in my favorite video game, I wrote a Python script that used a custom image-to-text algorithm and the game's API to tell me the skill level of the other players.</p>
                    <p className="lg:mt-3 mt-1 button-small w-fit">Click to learn more!</p>
                  </div>
                </div>
              </a>

              <a href="/" className="max-w-[400px] group rounded-lg bg-background-secondary sm:p-4 p-2 shadow-accent shadow-md">
                <p className="text-text text-xl font-bold pb-2">Hospital Application</p>
                <div className="relative overflow-hidden aspect-video rounded-lg">
                  <img src="/static/media/hospital-app-login.2b3279c2466cc1583258.png" alt="Hospital Application" />
                  <div className="absolute top-0 h-full -translate-y-full group-hover:transform-none duration-500 transition-transform bg-background-secondary pt-1 p-4">
                    <p className="text-text lg:text-lg text-base">This project was a mock service request manager and mapping service for Brigham and Women's Hospital. It includes a database, pathfinding, user authentication, and much more.</p>
                    <p className="lg:mt-3 mt-1 button-small w-fit">Click to learn more!</p>
                  </div>
                </div>
              </a>

              <a href="/" className="max-w-[400px] group rounded-lg bg-background-secondary sm:p-4 p-2 shadow-accent shadow-md">
                <p className="text-text text-xl font-bold pb-2">Visualizations</p>
                <div className="relative overflow-hidden aspect-video rounded-lg">
                  <video src="/static/media/visualizations.ecf30d9123cef2fe6ddc.mp4" autoPlay loop muted className="w-full h-full object-cover" />
                  <div className="absolute top-0 h-full -translate-y-full group-hover:transform-none duration-500 transition-transform bg-background-secondary pt-1 p-4">
                    <p className="text-text lg:text-lg text-base">As a fun summer project, I created a few visualizations in javascript using HTML canvas graphics.</p>
                    <p className="lg:mt-3 mt-1 button-small w-fit">Click to learn more!</p>
                  </div>
                </div>
              </a>


              {/* Section for the 3D hover cards */}
              <div className="hover-3d">
                {/* content */}
                <figure className="w-60 rounded-2xl">
                  <img src="https://img.daisyui.com/images/stock/card-1.webp?x" alt="Tailwind CSS 3D card" />
                </figure>
                {/* 8 empty divs needed for the 3D effect */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>

              <div className="hover-3d">
                {/* content */}
                <figure className="w-60 rounded-2xl">
                  <img src="https://img.daisyui.com/images/stock/card-2.webp?x" alt="Tailwind CSS 3D hover" />
                </figure>
                {/* 8 empty divs needed for the 3D effect */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>

              <div className="hover-3d">
                {/* content */}
                <figure className="w-60 rounded-2xl">
                  <img src="https://img.daisyui.com/images/stock/card-3.webp?x" alt="Tailwind CSS 3D hover" />
                </figure>
                {/* 8 empty divs needed for the 3D effect */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>


            </div>
          </section>
          </div>
        </div>



        <section id="skills" className="page-section flex flex-col gap-3 mt-12">
          <h2 className="title">Skills</h2>
          <p className="text-text text-lg">Since elementary school, I've been involved in various computer science clubs, classes, and hobby projects. Here are some of the languages, frameworks, and tools I've learned along the way.</p>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center mx-auto mb-4 md:mb-10  mt-6">
            <div className="bg-white p-3 duration-500 hover:scale-110 shadow-md shadow-accent hover:shadow-2xl hover:shadow-accent rounded-lg lg:w-36 sm:w-32 w-24"><img src="/static/media/java.26fabfb6a8fae662f174.png" alt="Java" className="bg-white mx-auto" /><p className="text-sm sm:text-lg lg:text-xl text-text font-bold text-center">Java</p></div>
            <div className="bg-white p-3 duration-500 hover:scale-110 shadow-md shadow-accent hover:shadow-2xl hover:shadow-accent rounded-lg lg:w-36 sm:w-32 w-24"><img src="data:image/png;base64,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" alt="C" className="bg-white mx-auto" /><p className="text-sm sm:text-lg lg:text-xl text-text font-bold text-center">C</p></div>
            <div className="bg-white p-3 duration-500 hover:scale-110 shadow-md shadow-accent hover:shadow-2xl hover:shadow-accent rounded-lg lg:w-36 sm:w-32 w-24"><img src="/static/media/python.aefe7a130ad61c9e9c34.webp" alt="Python" className="bg-white mx-auto" /><p className="text-sm sm:text-lg lg:text-xl text-text font-bold text-center">Python</p></div>
            <div className="bg-white p-3 duration-500 hover:scale-110 shadow-md shadow-accent hover:shadow-2xl hover:shadow-accent rounded-lg lg:w-36 sm:w-32 w-24"><img src="/static/media/typescript.8b592475761a995cb55405e3396bbc0d.svg" alt="Typescript" className="bg-white mx-auto" /><p className="text-sm sm:text-lg lg:text-xl text-text font-bold text-center">Typescript</p></div>
            <div className="bg-white p-3 duration-500 hover:scale-110 shadow-md shadow-accent hover:shadow-2xl hover:shadow-accent rounded-lg lg:w-36 sm:w-32 w-24"><img src="/static/media/react.2a0cac33f155e4a27216.webp" alt="React" className="bg-white mx-auto" /><p className="text-sm sm:text-lg lg:text-xl text-text font-bold text-center">React</p></div>
            <div className="bg-white p-3 duration-500 hover:scale-110 shadow-md shadow-accent hover:shadow-2xl hover:shadow-accent rounded-lg lg:w-36 sm:w-32 w-24"><img src="/static/media/tailwind.48122a3f11e7fc205905.jpeg" alt="Tailwind" className="bg-white mx-auto" /><p className="text-sm sm:text-lg lg:text-xl text-text font-bold text-center">Tailwind</p></div>
          </div>

          <a href="/" className="button mx-auto">View my resume!</a>
        </section>

        <footer className="bg-background-secondary w-full flex flex-row justify-center gap-4 sm:gap-8 p-4 mt-12">
          <a className="flex flex-col" href="/">
            <img className="sm:h-8 h-6 mx-auto" src="/static/media/linkedin.cd5d20e2b48ce677c2e2.png" alt="LinkedIn icon" />
            <p className="sm:text-base text-sm text-center">LinkedIn</p>
          </a>
          <a className="flex flex-col" href="/">
            <img className="sm:h-8 h-6 mx-auto" src="/static/media/github.06109883ca268f61732f726c4872c7c3.svg" alt="Github icon" />
            <p className="sm:text-base text-sm text-center">Github</p>
          </a>
          <a className="flex flex-col" href="/">
            <img className="sm:h-8 h-6 mx-auto" src="/static/media/email.c303e4fc73c4833f6dda07dd45559e8f.svg" alt="Email icon" />
            <p className="sm:text-base text-sm text-center">Email</p>
          </a>
        </footer>
      </main>
  );
}

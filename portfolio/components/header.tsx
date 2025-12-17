import Switcher from "@/components/switcher";

export default function Header() {
    return ( <header className="fixed w-full h-16 flex justify-between items-center px-4 z-10 bg-background-secondary text-text text-xl top-0">
          <a className="font-bold text-2xl content-center" href="/">Matthew Adam</a>
          <nav className="hidden md:flex">
            <a className="px-4 h-16 cursor-pointer content-center items-center flex hover:bg-background-hover" href="/">Home</a>
            <a className="px-4 h-16 cursor-pointer content-center items-center flex hover:bg-background-hover" href="/">Projects</a>
            <a className="px-4 h-16 cursor-pointer content-center items-center flex hover:bg-background-hover" href="/">Skills</a>
          </nav>
 
        <Switcher />
          
        </header>
        )}
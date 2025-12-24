// import Switcher from "@/components/switcher";

export default function Header() {
    return ( <header className="sticky w-full h-16 flex justify-between items-center px-4 z-10 bg-white text-black text-xl top-0">
          <a className="font-bold text-2xl content-center" href="/">Matthew Adam</a>
          <nav className="hidden md:flex">
            <a className="px-4 h-16 cursor-pointer content-center items-center flex hover:bg-gray-100" href="/">Home</a>
            <a className="px-4 h-16 cursor-pointer content-center items-center flex hover:bg-gray-100" href="/">Projects</a>
            <a className="px-4 h-16 cursor-pointer content-center items-center flex hover:bg-gray-100" href="/">Skills</a>
          </nav>
          
        </header>
        )}
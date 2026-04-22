import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simulation Engineering Team",
  description: "Portfolio site for a simulation engineering team building analysis tools, internal applications, and reporting dashboards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >


        <Header />


        {children}
        
      <footer className="bg-white w-full flex flex-row justify-center gap-4 sm:gap-8 p-4 relative">
        <a className="flex flex-col" href="/#projects">
          <img className="sm:h-8 h-6 mx-auto" src="/footer/footer-linkedin.png" alt="LinkedIn icon" />
          <p className="sm:text-base text-sm text-center">Projects</p>
        </a>
        <a className="flex flex-col" href="/#skills">
          <img className="sm:h-8 h-6 mx-auto" src="/footer/footer-github.svg" alt="Github icon" />
          <p className="sm:text-base text-sm text-center">Capabilities</p>
        </a>
        <a className="flex flex-col" href="/">
          <img className="sm:h-8 h-6 mx-auto" src="/footer/footer-resume.png" alt="Resume icon" />
          <p className="sm:text-base text-sm text-center">Overview</p>
        </a>
        <a className="flex flex-col" href="mailto:simulation.team@example.com">
          <img className="sm:h-8 h-6 mx-auto" src="/footer/footer-email.svg" alt="Email icon" />
          <p className="sm:text-base text-sm text-center">Contact</p>
        </a>
        <a href="/private" className="absolute bottom-0 right-0 w-32 h-16 opacity-0 hover:opacity-10 transition-opacity"></a>
      </footer>

      </body>
    </html>
  );
}

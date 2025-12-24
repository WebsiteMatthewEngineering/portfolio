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
  title: "Matthew Adam",
  description: "Personal portfolio of Matthew Adam",
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
        
      <footer className="bg-white w-full flex flex-row justify-center gap-4 sm:gap-8 p-4">
        <a className="flex flex-col" href="/">
          <img className="sm:h-8 h-6 mx-auto" src="/footer-linkedin.png" alt="LinkedIn icon" />
          <p className="sm:text-base text-sm text-center">LinkedIn</p>
        </a>
        <a className="flex flex-col" href="/">
          <img className="sm:h-8 h-6 mx-auto" src="/footer-github.svg" alt="Github icon" />
          <p className="sm:text-base text-sm text-center">Github</p>
        </a>
        <a className="flex flex-col" href="/">
          <img className="sm:h-8 h-6 mx-auto" src="/footer-resume.png" alt="Resume icon" />
          <p className="sm:text-base text-sm text-center">Resume</p>
        </a>
        <a className="flex flex-col" href="/">
          <img className="sm:h-8 h-6 mx-auto" src="/footer-email.svg" alt="Email icon" />
          <p className="sm:text-base text-sm text-center">Email</p>
        </a>
      </footer>

      </body>
    </html>
  );
}

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function Button({ href, children, className = "" }: ButtonProps) {
  return (
    <a href={href} className={`bg-sky-200 text-black font-semibold py-2 px-4 rounded-lg hover:bg-sky-500 transition-colors duration-200 w-full md:w-fit ${className}`}>
      <div className="mx-auto flex flex-row items-center">
        <p>{children}</p>
      </div>
    </a>
  );
}

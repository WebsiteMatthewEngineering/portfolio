interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  new_tab?: boolean;
}

export default function Button({ href, children, className = "", new_tab = false }: ButtonProps) {
  return (
    <a 
      href={href} 
      className={`bg-sky-200 text-black font-semibold py-2 px-4 rounded-lg hover:bg-sky-500 transition-colors duration-200 w-full md:w-fit ${className}`}
      {...(new_tab && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <div className="mx-auto flex flex-row items-center">
        <p>{children}</p>
      </div>
    </a>
  );
}

interface ProjectCardProps {
  href: string;
  title: string;
  mediaSrc: string;
  shortDescription: string;
  longDescription: string;
  isVideo?: boolean;
  comingSoon?: boolean;
  open_new_tab?: boolean;
}
import Button from "./button";

export default function ProjectCard({ 
  href, 
  title, 
  mediaSrc, 
  shortDescription,
  longDescription,
  isVideo = false,
  comingSoon = false, 
  open_new_tab = false
}: ProjectCardProps) {
  const CardWrapper = comingSoon ? 'div' : 'a';
  const wrapperProps = comingSoon 
    ? {} 
    : open_new_tab 
      ? { href, target: '_blank', rel: 'noopener noreferrer' } 
      : { href };
  
  return (
    <CardWrapper 
      {...wrapperProps}
      className={`group rounded-lg bg-background-secondary sm:p-4 p-2 shadow-accent shadow-lg ${comingSoon ? 'cursor-default opacity-60 grayscale' : ''}`}
    >

      <p className="text-text text-xl font-bold pb-2">{title} </p>
      <div className="relative overflow-hidden aspect-video rounded-lg">
          <div className="group-hover:translate-y-full transition-transform duration-500">
            <p className="text-text text-sm sm:text-base pb-3">{shortDescription}</p>
            {isVideo ? (
              <video 
                src={mediaSrc} 
                autoPlay 
                loop 
                muted
                className="w-full h-full object-cover"
              />
            ) : (
              <img 
                src={mediaSrc} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            )}
          </div>
        <div className="absolute top-0 left-0 w-full h-full -translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-background-secondary p-4 z-10">
          <p className="text-text lg:text-lg text-base">{longDescription}</p>
          <p className="lg:mt-3 mt-1 text-sky-400 font-semibold">
            Click to learn more!
            {/* {comingSoon ? 'Coming Soon' : 'Click to learn more!'} */}
          </p>
        </div>
      </div>
      {comingSoon ? <h1 className="text-center text-xl font-bold">(Coming Soon)</h1> : ''} 

    </CardWrapper>
  );
}

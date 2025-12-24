import Image from "next/image";

interface SkillCardProps {
  imageSrc: string;
  alt: string;
  skillName: string;
}

export default function SkillCard({ imageSrc, alt, skillName }: SkillCardProps) {
  return (
    <div className="bg-white p-3 duration-500 hover:scale-110 shadow-md shadow-accent hover:shadow-2xl hover:shadow-accent rounded-lg lg:w-36 sm:w-32 w-24 flex flex-col">
      <div className="h-16 sm:h-20 lg:h-24 w-full flex items-center justify-center mb-2">
        <img src={imageSrc} alt={alt} className="max-h-full max-w-full object-contain" />
      </div>
      <p className="text-sm sm:text-lg lg:text-xl text-text font-bold text-center">
        {skillName}
      </p>
    </div>
  );
}

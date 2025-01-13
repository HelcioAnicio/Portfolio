import { FaReact, FaHtml5, FaSass } from 'react-icons/fa';
import {
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandSupabase,
} from 'react-icons/tb';
import { IoLogoFirebase, IoLogoNodejs } from 'react-icons/io5';
import {
  SiPostgresql,
  SiPrisma,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { BsGit } from 'react-icons/bs';

export const Technology = () => {
  function getTechnologyStyle(text: string) {
    switch (text) {
      case 'React':
        return 'bg-blue-300 text-white';
      case 'Next':
        return 'bg-black text-white';
      case 'Typescript':
        return 'bg-blue-700 text-white';
      case 'Javascript':
        return 'bg-yellow-400 text-white';
      case 'Tailwind':
        return 'bg-gray-100 text-blue-400';
      case 'Firebase':
        return 'bg-gray-200 text-yellow-400';
      case 'Supabase':
        return 'bg-black text-green-400';
      case 'Postgree':
        return 'bg-blue-900 text-white';
      case 'Prisma':
        return 'bg-white text-gray-900';
      case 'Node':
        return 'bg-black text-green-600';
      case 'Shadcn':
        return 'bg-black text-white';
      case 'Sass':
        return 'bg-pink-500 text-white';
      case 'Html':
        return 'bg-orange-600 text-white';
      case 'Git':
        return 'bg-gray-300 text-red-500';
      default:
        return '';
    }
  }

  const techs = [
    { icon: <FaReact />, text: 'React' },
    { icon: <TbBrandNextjs />, text: 'Next' },
    { icon: <SiTypescript />, text: 'Typescript' },
    { icon: <TbBrandJavascript />, text: 'Javascript' },
    { icon: <SiPostgresql />, text: 'Postgree' },
    { icon: <SiPrisma />, text: 'Prisma' },
    { icon: <IoLogoFirebase />, text: 'Firebase' },
    { icon: <TbBrandSupabase />, text: 'Supabase' },
    { icon: <IoLogoNodejs />, text: 'Node' },
    { icon: <SiShadcnui />, text: 'Shadcn' },
    { icon: <SiTailwindcss />, text: 'Tailwind' },
    { icon: <FaSass />, text: 'Sass' },
    { icon: <FaHtml5 />, text: 'Html' },
    { icon: <BsGit />, text: 'Git' },
  ];

  return (
    <>
      <h2 className='text-primary-foreground text-2xl font-bolds mb-10 '>
        Tecnologias
      </h2>
      <div className='flex overflow-hidden space-x-16 group py-5 '>
        <div className='flex gap-16 animate-animate-scroll group-hover:paused'>
          {techs.map(({ icon, text }, index) => (
            <div
              key={index}
              className='flex flex-col items-center max-w-none'
              data-text={text}>
              <div
                className={`text-2xl p-4 rounded-md ${getTechnologyStyle(
                  text
                )}`}>
                {icon}
              </div>
              <p className='mt-2 text-sm font-light'>{text}</p>
            </div>
          ))}
        </div>
        <div
          className='flex gap-16 animate-animate-scroll group-hover:paused'
          aria-hidden='true'>
          {techs.map(({ icon, text }, index) => (
            <div
              key={index}
              className='flex flex-col items-center max-w-none'
              data-text={text}>
              <div
                className={`text-2xl p-4 rounded-md ${getTechnologyStyle(
                  text
                )}`}>
                {icon}
              </div>
              <p className='mt-2 text-sm font-light'>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

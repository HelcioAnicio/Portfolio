import "./Technology.modules.scss";
import { FaReact, FaHtml5, FaSass } from "react-icons/fa";
import {
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandSupabase,
} from "react-icons/tb";
import { IoLogoFirebase, IoLogoNodejs } from "react-icons/io5";
import {
  SiPostgresql,
  SiPrisma,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { BsGit } from "react-icons/bs";
// import { IoLogoCss3 } from 'react-icons/io5'

function Technology() {
  const techs = {
    react: {
      icon: <FaReact />,
      text: "React",
    },
    Next: {
      icon: <TbBrandNextjs />,
      text: "Next",
    },

    typescript: {
      icon: <SiTypescript />,
      text: "Typescript",
    },
    javaScript: {
      icon: <TbBrandJavascript />,
      text: "Javascript",
    },
    postgree: {
      icon: <SiPostgresql />,
      text: "Postgree",
    },
    prisma: {
      icon: <SiPrisma />,
      text: "Prisma",
    },
    firebase: {
      icon: <IoLogoFirebase />,
      text: "Firebase",
    },
    supabase: {
      icon: <TbBrandSupabase />,
      text: "Supabase",
    },
    node: {
      icon: <IoLogoNodejs />,
      text: "Node",
    },
    shadcn: {
      icon: <SiShadcnui />,
      text: "Shadcn",
    },
    tailwind: {
      icon: <SiTailwindcss />,
      text: "Tailwind",
    },
    sass: {
      icon: <FaSass />,
      text: "Sass",
    },
    html: {
      icon: <FaHtml5 />,
      text: "Html",
    },
    git: {
      icon: <BsGit />,
      text: "Git",
    },
  };

  return (
    <>
      <section
        id='Tech'
        className='SectionTech'>
        <h2>Tecnologias</h2>
        <div className='DivContainer'>
          {Object.entries(techs).map(([key, { icon, text }]) => (
            <button
              key={key}
              className={text}
              data-text={text}>
              <div>{icon}</div>
              <p>{text}</p>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
export default Technology;

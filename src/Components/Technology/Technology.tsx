import React from "react";
import "./Technology.modules.scss";
import { FaReact, FaHtml5, FaSass } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoFirebase, IoLogoNodejs } from "react-icons/io5";
import {
  SiPostgresql,
  SiPrisma,
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
    typescript: {
      icon: <SiTypescript />,
      text: "Typescript",
    },
    javaScript: {
      icon: <TbBrandJavascript />,
      text: "Javascript",
    },
    tailwind: {
      icon: <SiTailwindcss />,
      text: "Tailwind",
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
    node: {
      icon: <IoLogoNodejs />,
      text: "Node",
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
            <div
              key={key}
              className={text}>
              <div>{icon}</div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default Technology;

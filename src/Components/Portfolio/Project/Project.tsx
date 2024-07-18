import "./Project.modules.scss";
import { FaGithub } from "react-icons/fa";
import { GiMagnifyingGlass } from "react-icons/gi";
import { IconType } from "react-icons";
import React from "react";
// import MobileForm from "../../../assets/Form/mobile.png";

interface Project {
  style: string;
  img: string;
  vercel: string;
  github: string;
  nameProject: string;
  descriptionProject: string;
  techIcons: IconType[];
}

export const Project: React.FC<Project> = ({
  style,
  img,
  vercel,
  github,
  nameProject,
  descriptionProject,
  techIcons,
}) => {
  return (
    <>
      <div className={style}>
        <div className='DivImage'>
          <img
            src={img}
            alt='Mobile'
          />
          <div className='DivIconsDesktop'>
            <a
              href={vercel}
              target='_blank'>
              <GiMagnifyingGlass title='Acesse o site' />
            </a>
            <a
              href={github}
              target='_blank'>
              <FaGithub title='Acesse o GitHub' />
            </a>
          </div>
        </div>
        <div className='DivInformation'>
          <h3>
            {nameProject}
            <div className='DivIconsMobile'>
              <a
                href={vercel}
                target='_blank'>
                <GiMagnifyingGlass title='Acesse o site' />
              </a>
              <a
                href={github}
                target='_blank'>
                <FaGithub title='Acesse o GitHub' />
              </a>
            </div>
          </h3>
          <p>{descriptionProject}</p>
          <div className='Tech'>
            {techIcons.map((IconReact, key) => (
              <IconReact key={key} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

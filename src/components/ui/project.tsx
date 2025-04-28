import { IconType } from "react-icons";
// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from '@/components/ui/hover-card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image, { StaticImageData } from "next/image";
import { Button } from "./button";
import Link from "next/link";
import { Github, Globe } from "lucide-react";

interface Project {
  style?: string; // Mantido caso você queira passar estilos adicionais
  img: StaticImageData;
  vercel: string;
  github: string;
  nameProject: string;
  descriptionProject: string;
  techIcons: IconType[];
  backgroundUrl: StaticImageData;
}

export const Project: React.FC<Project> = ({
  style = "",
  img,
  vercel,
  github,
  nameProject,
  descriptionProject,
  techIcons,
  backgroundUrl,
}) => {
  return (
    <Dialog>
      <div
        className={`m-auto flex min-w-48 max-w-sm flex-col gap-6 ${style} w-full rounded-lg border border-primary-foreground p-7`}
      >
        <div
          style={{
            backgroundImage: `url(${backgroundUrl.src})`,
            backgroundPosition: "center center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          className={`relative m-auto h-48 w-full max-w-96 overflow-hidden rounded-lg`}
        >
          <Image
            src={img}
            alt="Mobile"
            className="absolute bottom-1 right-1 h-24 w-12 sm:h-32 sm:w-16"
          />
        </div>
        <div className="mt-4 flex flex-col gap-2 px-1">
          <h3
            className="text-3xl font-bold text-primary-foreground"
            title={nameProject}
          >
            {nameProject}
          </h3>
          <p
            className="line-clamp-4 overflow-hidden text-ellipsis"
            title="Description of Project"
          >
            {descriptionProject}
          </p>
        </div>
        <DialogTrigger className="mr-auto mt-4 rounded-md bg-primary px-3 py-2 text-primary-foreground hover:bg-secondary">
          Mais detalhes
        </DialogTrigger>
        <DialogContent className="min-h-1/2 flex h-max flex-col items-start justify-evenly gap-10">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-primary-foreground">
              {nameProject}
            </DialogTitle>
          </DialogHeader>
          <p className="text-xl">{descriptionProject}</p>
          <div>
            <div className="mt-2 flex gap-3">
              {techIcons.map((Icon, index) => (
                <Icon
                  key={index}
                  title={`${Icon.name}= Tecnologie's name`}
                  className="text-lg"
                />
              ))}
            </div>
            <div className="mt-4 flex">
              {vercel !== "" && (
                <>
                  <Link
                    href={vercel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-4"
                  >
                    <Button title="Ver site" className="hover:bg-card">
                      Ver Site <Globe />
                    </Button>
                  </Link>
                </>
              )}
              <Link href={github} target="_blank" rel="noopener noreferrer">
                <Button title="Ver código fonte" className="hover:bg-card">
                  Ver Código <Github />
                </Button>
              </Link>
            </div>
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
};

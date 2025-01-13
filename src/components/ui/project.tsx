import { IconType } from 'react-icons';
// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from '@/components/ui/hover-card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import Image, { StaticImageData } from 'next/image';
import { Button } from './button';
import Link from 'next/link';
import { Github, Globe } from 'lucide-react';

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
  style = '',
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
      <div className={`flex flex-col m-auto min-w-48 max-w-sm ${style} w-full`}>
        <div
          style={{
            backgroundImage: `url(${backgroundUrl.src})`,
            backgroundPosition: 'center center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
          className={`w-full max-w-96 h-48 m-auto relative overflow-hidden rounded-lg`}>
          <Image
            src={img}
            alt='Mobile'
            className='w-12 h-24 absolute bottom-1 right-1 sm:w-16 sm:h-32'
          />
        </div>
        <div className='flex flex-col mt-4 px-1'>
          <h3
            className='text-xl font-bold'
            title={nameProject}>
            {nameProject}
          </h3>
          <p
            className=' line-clamp-4 overflow-hidden text-ellipsis '
            title='Description of Project'>
            {descriptionProject}
          </p>
        </div>
        <DialogTrigger className='mt-4 mr-auto'>
          <Button> Mais detalhes </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className='text-xl font-bold'>
              {nameProject}
            </DialogTitle>
            <DialogDescription>
              <p className=''>{descriptionProject}</p>
              <div className='flex mt-2 gap-3'>
                {techIcons.map((Icon, index) => (
                  <Icon
                    key={index}
                    title={`${Icon.name}= Tecnologie's name`}
                    className='text-white text-lg'
                  />
                ))}
              </div>
              <div className='flex mt-4'>
                <Link
                  href={vercel}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mr-4'>
                  <Button
                    title='Ver site'
                    className='hover:bg-card'>
                    Ver Site <Globe />
                  </Button>
                </Link>
                <Link
                  href={github}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <Button
                    title='Ver código fonte'
                    className='hover:bg-card'>
                    Ver Código <Github />
                  </Button>
                </Link>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </div>
    </Dialog>
  );
};

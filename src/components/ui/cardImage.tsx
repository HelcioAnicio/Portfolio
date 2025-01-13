import Image from 'next/image';
import Profile from '../../../public/profile.png';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { HiCommandLine } from 'react-icons/hi2';
import { FileUser } from 'lucide-react';

export const CardImage = () => {
  return (
    <>
      <Card className='max-w-md w-full p-1'>
        <CardHeader className='p-1'>
          <CardTitle className='text-4xl p-1'>
            Olá,{' '}
            <span className='font-serif text-primary-foreground'>
              eu sou Hélcio
            </span>
          </CardTitle>
          <CardDescription className='sm:text-base flex justify-start items-center gap-1'>
            Desenvolvedor front-end, web e mobile. <HiCommandLine />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className='font-serif text-sm'>
            &#34;A tecnologia evolui, e não podemos ficar parados.&#34;
          </p>
        </CardContent>
        <CardFooter className='flex space-x-1 p-1'>
          <Button>
            Meu curriculo <FileUser />
          </Button>
          <Button>
            <FaWhatsapp />
          </Button>
          <Button variant={'default'}>
            <FaLinkedinIn />
          </Button>
        </CardFooter>
      </Card>
      <div className='rounded-full bg-gray-200 flex w-max ml-auto -mt-5 relative z-10'>
        <Image
          src={Profile}
          alt='Profile Picture'
          width={200}
          height={200}
        />
      </div>
    </>
  );
};

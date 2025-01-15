import Image from 'next/image';
import Profile from '../../../public/profile.png';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { HiCommandLine } from 'react-icons/hi2';
import { FileUser } from 'lucide-react';
import Link from 'next/link';

export const CardImage = () => {
  return (
    <Card className='w-full md:p-10 bg-transparent border-none md:flex justify-between'>
      <CardHeader className='px-2'>
        <CardTitle className='text-4xl'>
          Olá, <br />
          <span className='font-serif text-primary-foreground'>
            eu sou Hélcio
          </span>
        </CardTitle>
        <CardDescription className='sm:text-base flex justify-start items-center gap-1'>
          Desenvolvedor front-end, web e mobile. <HiCommandLine />
        </CardDescription>
        <div className='flex space-x-1 px-1'>
          <Link
            href={'/HelcioAnicio_curriculo.pdf'}
            target='_blank'
            download>
            <Button>
              Meu curriculo <FileUser />
            </Button>
          </Link>
          <Link
            href={'https://wa.me/message/B6KSMFVGOIKTI1'}
            target='_blank'>
            <Button>
              <FaWhatsapp />
            </Button>
          </Link>
          <Link
            href={'https://www.linkedin.com/in/helcio-anicio/'}
            target='_blank'>
            <Button>
              <FaLinkedinIn />
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardFooter className='flex flex-col gap-1 items-center '>
        <div className='flex justify-center items-center w-40 rounded-full bg-primary-foreground '>
          <Image
            className='w-36 rounded-full'
            src={Profile}
            alt='Profile Picture'
          />
        </div>
        <p className='font-serif text-sm text-center w-4/5 py-2 border-y'>
          &#34;A tecnologia evolui, e não podemos ficar parados.&#34;
        </p>
      </CardFooter>
      {/* <div className='flex justify-center w-44 bg-[url("../../public/backgroundProfile.svg")] bg-cover bg-[center_4rem] bg-no-repeat '> */}
    </Card>
  );
};

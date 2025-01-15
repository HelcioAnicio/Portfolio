import { Card, CardHeader, CardTitle, CardContent } from './card';
import Image from 'next/image';
import Html from '../../../public/html.png';
import { Separator } from '@radix-ui/react-separator';
import Link from 'next/link';

export const CardAboutMe = () => {
  const dataStart = new Date('2022-04-01');
  const dataToday = new Date();
  const timeWorking = dataToday.getFullYear() - dataStart.getFullYear();

  return (
    <Card className='w-full sm:p-2 max-w-3xl'>
      <CardHeader className='p-0'>
        <CardTitle className='text-primary-foreground font-sans text-2xl sm:flex justify-between gap-5'>
          <Image
            className='-mt-20 w-full object-cover sm:hidden '
            src={Html}
            alt='cumputer"s monitor'
          />
          <div className='flex flex-1 basis-3/6 gap-1 items-center py-10'>
            <Separator className='bg-primary-foreground w-full my-4 h-0.5' />
            <p className='min-w-max '>Sobre mim</p>
            <Separator className='bg-primary-foreground w-full h-0.5 my-4' />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col sm:flex-row sm:justify-between gap-2 leading-7 sm:px-10'>
        <div className='max-w-80 '>
          <p>
            Trabalho a {timeWorking} anos como desenvolvedor web e mobile,
            fazendo projetos como freelancer e prestando serviços. Meu objetivo
            é simples:
          </p>
          <p className='text-primary-foreground italic'>
            Combinar design, tecnologia e entregar soluções que realmente façam
            a diferença.
          </p>
        </div>
        <p className='max-w-80'>
          Você pode me encontrar criando projetos ou tentando explicar para meus
          pais o que eu faço no meu trabalho! Se você quer tirar sua{' '}
          <span className='text-primary-foreground'>ideia</span> do papel e
          transformá-la em realidade, basta{' '}
          <Link
            href=''
            className='underline text-primary-foreground'>
            me chamar!
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};

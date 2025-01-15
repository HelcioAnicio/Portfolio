'use client';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { House, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react';
import { Card } from './card';
import Link from 'next/link';
import { GrCode, GrUserManager } from 'react-icons/gr';
import { LiaLaptopCodeSolid } from 'react-icons/lia';
import { MdOutlineContactPhone } from 'react-icons/md';

export const Header = () => {
  const { setTheme } = useTheme();
  return (
    <header className='sticky top-0 z-50 bg-background h-20'>
      <Card className='flex items-center justify-between p-5 bg-background rounded-t-none h-16'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant='outline'
              size='icon'>
              <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
              <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
              <span className='sr-only'>Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem onClick={() => setTheme('light')}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <nav className='hidden lg:block'>
          <ul className='flex gap-4'>
            <Link
              href='#home'
              className='s'>
              <li className='hover:text-primary-foreground transition-all duration-300 hover:border-b-primary-foreground hover:border-b flex gap-1 items-center'>
                Home
                <House size={12} />
              </li>
            </Link>
            <Link href='#aboutMe'>
              <li className='hover:text-primary-foreground transition-all duration-300 hover:border-b-primary-foreground hover:border-b flex gap-1 items-center'>
                Sobre mim
                <GrUserManager size={12} />
              </li>
            </Link>
            <Link href='#projects'>
              <li className='hover:text-primary-foreground transition-all duration-300 hover:border-b-primary-foreground hover:border-b flex gap-1 items-center'>
                Projetos
                <LiaLaptopCodeSolid size={12} />
              </li>
            </Link>
            <Link href='#technology'>
              <li className='hover:text-primary-foreground transition-all duration-300 hover:border-b-primary-foreground hover:border-b flex gap-1 items-center'>
                Tecnologias
                <GrCode size={12} />
              </li>
            </Link>
            <Link href='#footer'>
              <li className='hover:text-primary-foreground transition-all duration-300 hover:border-b-primary-foreground hover:border-b flex gap-1 items-center'>
                Contato
                <MdOutlineContactPhone size={12} />
              </li>
            </Link>
          </ul>
        </nav>
        <div className='flex items-center gap-4 lg:hidden'>
          <Sheet>
            <SheetTrigger>
              <Button
                asChild
                variant='outline'
                size='icon'>
                <Menu size={16} />
              </Button>
            </SheetTrigger>
            <SheetContent side={'right'}>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  <nav>
                    <ul className='flex flex-col gap-6'>
                      <SheetClose asChild>
                        <Link href='#home'>
                          <li className='hover:text-primary-foreground transition-all duration-300 hover:border-b-primary-foreground hover:border-b flex gap-1 items-center w-max'>
                            Home
                            <House size={12} />
                          </li>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href='#aboutMe'>
                          <li className='hover:text-primary-foreground transition-all duration-300 hover:border-b-primary-foreground hover:border-b flex gap-1 items-center w-max'>
                            Sobre mim
                            <GrUserManager size={12} />
                          </li>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href='#projects'>
                          <li className='hover:text-primary-foreground transition-all duration-300 hover:border-b-primary-foreground hover:border-b flex gap-1 items-center w-max'>
                            Projetos
                            <LiaLaptopCodeSolid size={12} />
                          </li>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href='#technology'>
                          <li className='hover:text-primary-foreground transition-all duration-300 hover:border-b-primary-foreground hover:border-b flex gap-1 items-center w-max'>
                            Tecnologias
                            <GrCode size={12} />
                          </li>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href='#footer'>
                          <li className='hover:text-primary-foreground transition-all duration-300 hover:border-b-primary-foreground hover:border-b flex gap-1 items-center w-max'>
                            Contato
                            <MdOutlineContactPhone size={12} />
                          </li>
                        </Link>
                      </SheetClose>
                    </ul>
                  </nav>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </Card>
    </header>
  );
};

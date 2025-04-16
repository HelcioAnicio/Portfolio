"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Card } from "./card";
import Link from "next/link";

export const Header = () => {
  const { setTheme } = useTheme();

  return (
    <header className="h-20 border-none bg-background shadow-none">
      <Card className="h-16 rounded-t-none bg-background p-5">
        <div className="m-auto flex max-w-5xl items-center justify-between">
          <h1>
            <span className="text-primary-foreground">DEV</span> Helcio Anicio
          </h1>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-7">
              <Link href="#home">
                <li className="flex items-center gap-1 text-primary-foreground transition-all duration-300 hover:border-b hover:border-b-foreground hover:text-foreground">
                  Home
                </li>
              </Link>
              <Link href="#aboutMe">
                <li className="flex items-center gap-1 text-primary-foreground transition-all duration-300 hover:border-b hover:border-b-foreground hover:text-foreground">
                  Sobre mim
                </li>
              </Link>
              <Link href="#projects">
                <li className="flex items-center gap-1 text-primary-foreground transition-all duration-300 hover:border-b hover:border-b-foreground hover:text-foreground">
                  Projetos
                </li>
              </Link>
              <Link href="#technology">
                <li className="flex items-center gap-1 text-primary-foreground transition-all duration-300 hover:border-b hover:border-b-foreground hover:text-foreground">
                  Tecnologias
                </li>
              </Link>
              <Link href="#footer">
                <li className="flex items-center gap-1 text-primary-foreground transition-all duration-300 hover:border-b hover:border-b-foreground hover:text-foreground">
                  Fale comigo
                </li>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </ul>
          </nav>
          <div className="flex items-center gap-4 lg:hidden">
            <Sheet>
              <SheetTrigger>
                <Button asChild variant="outline" size="icon">
                  <Menu size={16} />
                </Button>
              </SheetTrigger>
              <SheetContent side={"right"}>
                <SheetHeader>
                  <SheetTitle>
                    <h1>
                      <span className="text-primary-foreground">DEV</span>{" "}
                      Helcio Anicio
                    </h1>
                  </SheetTitle>
                  <SheetDescription>
                    <nav>
                      <ul className="flex flex-col gap-6">
                        <SheetClose asChild>
                          <Link href="#home">
                            <li className="flex w-max items-center gap-1 text-primary-foreground transition-all duration-300 hover:border-b hover:border-b-foreground hover:text-foreground">
                              Home
                            </li>
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link href="#aboutMe">
                            <li className="flex w-max items-center gap-1 text-primary-foreground transition-all duration-300 hover:border-b hover:border-b-foreground hover:text-foreground">
                              Sobre mim
                            </li>
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link href="#projects">
                            <li className="flex w-max items-center gap-1 text-primary-foreground transition-all duration-300 hover:border-b hover:border-b-foreground hover:text-foreground">
                              Projetos
                            </li>
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link href="#technology">
                            <li className="flex w-max items-center gap-1 text-primary-foreground transition-all duration-300 hover:border-b hover:border-b-foreground hover:text-foreground">
                              Tecnologias
                            </li>
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <Link href="#footer">
                            <li className="flex w-max items-center gap-1 text-primary-foreground transition-all duration-300 hover:border-b hover:border-b-foreground hover:text-foreground">
                              Fale comigo
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
        </div>
      </Card>
    </header>
  );
};

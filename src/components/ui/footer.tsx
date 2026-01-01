import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.svg";

import { FaArrowRightLong } from "react-icons/fa6";

import { Button } from "./button";
import { Separator } from "./separator";

export const Footer = () => {
  return (
    <footer className="m-auto w-full max-w-5xl space-y-5 py-20" id="footer">
      <section
        id="home"
        className="flex w-full flex-col gap-5 px-2 pb-20 md:px-6"
      >
        <h2 className="text-2xl font-extrabold md:text-3xl md:leading-relaxed lg:leading-snug">
          Transforme sua ideia em realidade digital
        </h2>
        <p className="max-w-2xl text-sm">
          Mais agilidade, mais identidade, mais
          <span className="text-popover-foreground md:text-lg"> resultado</span>
          .
        </p>
        <Link href="https://wa.me/5531991973835?text=Olá+gostaria+sobre+o+desenvolvimento+de+sites/sistemas">
          <Button className="flex items-center gap-2 bg-popover-foreground text-background">
            Fale conosco <FaArrowRightLong />
          </Button>
        </Link>
      </section>
      <Separator />
      <div className="flex items-center gap-2">
        <Image className="w-6 lg:w-10" src={Logo} alt="Logo" />
        <h1>
          <span className="text-popover-foreground">Codando</span> ideias
        </h1>
      </div>
    </footer>
  );
};

import Link from "next/link";

import { FaArrowRightLong } from "react-icons/fa6";

export const CardImage = () => {
  return (
    <section
      id="home"
      className="flex h-full w-full max-w-5xl flex-col gap-10 px-2 md:gap-10 md:px-6 lg:gap-16"
    >
      <h1 className="text-2xl font-extrabold md:max-w-2xl md:text-3xl md:leading-relaxed lg:leading-snug">
        Ao seu lado profissionalizando e impulsionando a evolução do seu negócio
      </h1>
      <p className="max-w-lg text-sm">
        Cada{" "}
        <span className="text-sm text-popover-foreground">landing page</span> é
        pensada com atenção aos detalhes, clareza na comunicação e foco no{" "}
        <span className="text-sm text-popover-foreground">resultado</span>.
      </p>
      <Link
        className="flex items-center gap-2 text-popover-foreground underline underline-offset-2 transition-all duration-200 hover:opacity-85"
        href="https://wa.me/5531991973835?text=Olá+gostaria+sobre+o+desenvolvimento+de+sites/sistemas"
      >
        Fale conosco <FaArrowRightLong />
      </Link>
    </section>
  );
};

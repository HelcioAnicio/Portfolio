import Link from "next/link";

import { FaArrowRightLong } from "react-icons/fa6";

export const CardImage = () => {
  return (
    <section
      id="home"
      className="flex h-dvh w-full max-w-5xl flex-col justify-center gap-16 px-2 md:gap-10 md:px-6 lg:gap-24"
    >
      <h1 className="text-2xl font-extrabold md:max-w-2xl md:text-3xl md:leading-relaxed lg:leading-snug xl:max-w-3xl xl:text-5xl">
        Ao seu lado profissionalizando e impulsionando a evolução do seu negócio
      </h1>
      <p className="max-w-lg text-sm xl:text-lg">
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

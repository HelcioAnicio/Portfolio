// import Image from "next/image";
// import Profile from "../../../public/profile.png";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { FaLinkedinIn } from "react-icons/fa";
// import { IoLogoWhatsapp } from "react-icons/io";
// import { PiReadCvLogoFill } from "react-icons/pi";
import Link from "next/link";

import { FaArrowRightLong } from "react-icons/fa6";

export const CardImage = () => {
  return (
    <>
      <h1 className="text-3xl font-extrabold md:max-w-2xl md:text-4xl md:leading-relaxed lg:text-5xl lg:leading-snug">
        Ao seu lado modernizando seus produtos digitais e impulsionando a
        evolução do seu negócio
      </h1>
      <p className="max-w-2xl md:text-2xl">
        Cada projeto é pensado para ser único, com atenção aos detalhes e sempre
        focando a satisfação e <span className="md:text-lg">resultado</span>.
      </p>
      <Link
        className="flex items-center gap-2 text-yellow-500"
        href="https://wa.me/5531991973835?text=Olá+gostaria+sobre+o+desenvolvimento+de+sites/sistemas"
      >
        Fale conosco <FaArrowRightLong />
      </Link>
    </>
  );
};

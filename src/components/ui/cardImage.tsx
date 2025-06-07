import Image from "next/image";
import Profile from "../../../public/profile.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { PiReadCvLogoFill } from "react-icons/pi";
import Link from "next/link";

export const CardImage = () => {
  return (
    <Card className="flex min-h-max h-full w-full flex-col items-center justify-start border-none bg-transparent py-0 shadow-none sm:justify-evenly sm:gap-16 sm:px-0 lg:flex-row lg:justify-between">
      <CardHeader>
        <CardTitle className="flex w-full flex-col gap-2 text-primary-foreground lg:items-start">
          <Image
            className="mx-auto w-60 sm:w-96 lg:mx-0 lg:w-[500px]"
            src={Profile}
            alt="Profile Picture"
          />
          <p className="hidden gap-1 text-center text-base text-primary-foreground lg:block lg:text-start">
            Desenvolvedor front-end, web e aplicativos.
          </p>
          <ul className="mt-4 flex flex-row items-center justify-center gap-2 lg:justify-start">
            <li>
              <Link
                href={"/HelcioAnicio_curriculo.pdf"}
                target="_blank"
                download
              >
                <Button className="bg-primary-foreground text-background underline underline-offset-4 hover:bg-amber-300 lg:text-lg">
                  Curriculo <PiReadCvLogoFill className="lg:scale-150" />
                </Button>
              </Link>
            </li>
            <li>
              <Link href={"https://wa.link/1gbzvl"} target="_blank">
                <Button className="bg-primary-foreground text-background hover:bg-amber-300">
                  <IoLogoWhatsapp className="lg:scale-150" />
                </Button>
              </Link>
            </li>
            <li>
              <Link
                href={"https://www.linkedin.com/in/helcio-anicio/"}
                target="_blank"
              >
                <Button className="bg-primary-foreground text-background hover:bg-amber-300">
                  <FaLinkedinIn className="lg:scale-150" />
                </Button>
              </Link>
            </li>
          </ul>
        </CardTitle>
      </CardHeader>
      <CardContent className="mx-auto space-y-6 px-0 text-center font-light sm:w-full lg:mx-0 lg:space-y-10 lg:text-start">
        <p
          className={`text-4xl font-normal text-foreground sm:text-5xl lg:text-7xl`}
        >
          Eu sou <span className="font-bold lg:text-7xl">Helcio</span>
        </p>
        <p className="m-auto w-4/5 lg:m-0 lg:w-full">
          Trabalho há 3 anos como desenvolvedor web e de aplicativos, faço
          diversos projetos desde páginas únicas (landing page), site
          institucional, até e-commerces e sistemas completos. <br />
          <br /> Prestando serviço para empresas, pequenos negócios e
          profissionais autônomos! Ajudando a aumentar o alcance e
          profissionalizando negócios. <br />
          Meu lema é:{" "}
        </p>
        <p className="mx-auto w-4/5 max-w-96 rounded-md bg-none p-2 text-sm text-primary-foreground shadow-md shadow-gray-500 sm:w-4/5 sm:text-base lg:mx-0">
          Combinar design, tecnologia e entregar soluções que façam a diferença!
        </p>
      </CardContent>
    </Card>
  );
};

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
    <Card className="flex h-full w-full flex-col items-center justify-center border-none bg-transparent py-0 shadow-none sm:justify-evenly sm:gap-16 sm:px-2 lg:flex-row lg:justify-between">
      <CardHeader>
        <CardTitle className="flex w-full flex-col gap-2 text-primary-foreground lg:items-start">
          <Image
            className="mx-auto w-60 sm:w-96 lg:mx-0 lg:w-[500px]"
            src={Profile}
            alt="Profile Picture"
          />
          <p className="hidden gap-1 text-center text-base text-primary-foreground lg:block lg:text-start">
            Desenvolvedor front-end, web e mobile.
          </p>
          <ul className="lg:justs mt-4 flex flex-row items-center justify-center gap-2 lg:justify-start">
            <li>
              <Link
                href={"/HelcioAnicio_curriculo.pdf"}
                target="_blank"
                download
              >
                <Button className="bg-primary-foreground text-background underline underline-offset-4">
                  Curriculo <PiReadCvLogoFill />
                </Button>
              </Link>
            </li>
            <li>
              <Link
                href={"https://wa.me/message/B6KSMFVGOIKTI1"}
                target="_blank"
              >
                <Button className="bg-primary-foreground text-background">
                  <IoLogoWhatsapp />
                </Button>
              </Link>
            </li>
            <li>
              <Link
                href={"https://www.linkedin.com/in/helcio-anicio/"}
                target="_blank"
              >
                <Button className="bg-primary-foreground text-background">
                  <FaLinkedinIn />
                </Button>
              </Link>
            </li>
          </ul>
        </CardTitle>
      </CardHeader>
      <CardContent className="mx-auto space-y-6 px-1 text-center font-light sm:w-4/5 lg:mx-0 lg:space-y-10 lg:text-start">
        <p className={`text-5xl font-normal text-foreground lg:text-7xl`}>
          Eu sou <span className="font-bold lg:text-7xl">Helcio</span>
        </p>
        <p className="m-auto w-4/5 sm:m-0">
          Trabalho há 3 anos como desenvolvedor web e mobile, fazendo projetos
          freelancer e prestando serviço para empresas também! Ajudando a
          aumentar o alcance e profissionalizando negócios. <br />
          Meu lema é:{" "}
        </p>
        <p className="mx-auto w-4/5 max-w-96 rounded-md bg-none p-2 text-sm text-primary-foreground shadow-md shadow-gray-500 sm:w-4/5 sm:text-base lg:mx-0">
          Combinar design, tecnologia e entregar soluções que façam a diferença!
        </p>
      </CardContent>
    </Card>
  );
};

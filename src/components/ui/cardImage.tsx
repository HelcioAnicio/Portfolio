import Image from "next/image";
import Profile from "../../../public/profile.png";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { PiReadCvLogoFill } from "react-icons/pi";
import { HiCommandLine } from "react-icons/hi2";
import Link from "next/link";

export const CardImage = () => {
  return (
    <Card className="flex w-full flex-col items-baseline justify-between border-none bg-transparent shadow-none sm:gap-7 sm:p-2">
      <CardHeader className="flex flex-wrap gap-10 px-2 sm:flex-row sm:items-center">
        <Image className="w-44 sm:w-80" src={Profile} alt="Profile Picture" />
        <CardTitle className="flex flex-col gap-2 text-4xl text-primary-foreground">
          <span className="font-limelight text-7xl">
            Olá, <br />
          </span>
          <p className={`text-5xl text-foreground`}>eu sou Hélcio</p>
          <p className="flex items-end justify-start gap-1 text-base text-primary-foreground">
            Desenvolvedor front-end, web e mobile. <HiCommandLine />
          </p>
          <ul className="mt-4 flex flex-row gap-2">
            <li>
              <Link
                href={"/HelcioAnicio_curriculo.pdf"}
                target="_blank"
                download
              >
                <Button>
                  Meu curriculo <PiReadCvLogoFill />
                </Button>
              </Link>
            </li>
            <li>
              <Link
                href={"https://wa.me/message/B6KSMFVGOIKTI1"}
                target="_blank"
              >
                <Button>
                  <IoLogoWhatsapp />
                </Button>
              </Link>
            </li>
            <li>
              <Link
                href={"https://www.linkedin.com/in/helcio-anicio/"}
                target="_blank"
              >
                <Button>
                  <FaLinkedinIn />
                </Button>
              </Link>
            </li>
          </ul>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex px-1 font-light sm:w-4/5">
        Trabalho há 3 anos como desenvolvedor web e mobile, fazendo projetos
        freelancer e prestando serviço para empresas também! Ajudando a aumentar
        o alcance e profissionalizando negócios. <br />
        Meu lema é:{" "}
      </CardContent>
      <CardFooter className="p-0">
        <p className="font- w-4/5 max-w-96 rounded-md bg-primary-foreground p-2 text-sm text-black">
          Combinar design, tecnologia e entregar soluções que façam a diferença!
        </p>
      </CardFooter>
    </Card>
  );
};

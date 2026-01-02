import { CardReason } from "./cardReason";

import { BsGraphUpArrow } from "react-icons/bs";
import { TbRulerMeasure } from "react-icons/tb";
import { IoGlobeSharp } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineTrendingUp } from "react-icons/md";
import { FaGears } from "react-icons/fa6";
import { BsShieldLockFill } from "react-icons/bs";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import DataUp from "../../../public/dataUp.png";
import MenAndWomen from "../../../public/menAndWomen.png";
import Engine from "../../../public/engine.png";

import Image from "next/image";

export const WhyDevLab = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollScreen = (direction: string) => {
    if (direction === "right" && containerRef.current) {
      containerRef.current.scrollLeft += 500;
    }
    if (direction === "left" && containerRef.current) {
      containerRef.current.scrollLeft -= 500;
    }
    if (direction === "rightMd" && containerRef.current) {
      containerRef.current.scrollLeft += 650;
    }
    if (direction === "leftMd" && containerRef.current) {
      containerRef.current.scrollLeft -= 650;
    }
  };
  return (
    <section className="relative flex w-full flex-col gap-5 rounded-md bg-foreground px-1 pb-10 pt-6 md:p-6">
      <h2 className="text-lg text-background">
        Porquê a <span className="text-popover-foreground">Codando </span>
        ideias?
      </h2>
      <div
        ref={containerRef}
        className="no-scrollbar relative flex w-full gap-40 overflow-auto scroll-smooth px-2 pb-5 md:p-6"
      >
        <div className="relative flex flex-col gap-10">
          <CardReason
            icon={<BsGraphUpArrow />}
            title="Alto desempenho e velocidade"
            text="Cada linha de código é escrita pensando na leveza e perfomance. Isso garante carregamento rápido, melhor experiência para o usuário e mais chances de destaque nos mecanismos de busca dos navegadores."
          />
          <CardReason
            newClassName="ml-32 md:ml-48"
            icon={<TbRulerMeasure />}
            title="Design sob medida"
            text="O site é desenvolvido com exclusividade, respeitando a identidade da marca e oferecendo uma experiência única para o público, sem limitações de layout ou estrutura."
          />
          <Image
            className="absolute -right-[25%] top-0 w-64 md:-right-[8%]"
            src={DataUp}
            alt="Logo"
          />
        </div>
        <div className="relative flex flex-col gap-10">
          <CardReason
            newClassName="-ml-20"
            icon={<IoGlobeSharp />}
            title="Navegação inteligente"
            text="O fluxo do site é pensado para guiar o usuário de forma intuitica até a ação desejada, seja um contato, uma compra ou um agendamento. Isso aumenta o engajamento e gera melhores resultados."
          />
          <CardReason
            icon={<TfiHeadphoneAlt />}
            title="Atendimento direto e continuo"
            text="Você fala com quem desenvolve. Isso significa mais agilidade para ajustes, melhorias e suporte sempre que precisar, sem depender de terceiros ou burocracias."
          />
          <Image
            className="absolute -right-[80%] bottom-0 w-64 md:-right-[60%]"
            src={MenAndWomen}
            alt="Logo"
          />
        </div>
        <div className="ml-16 flex flex-col gap-10 md:ml-24">
          <CardReason
            newClassName="-ml-20"
            icon={<MdOutlineTrendingUp />}
            title="Pronto para crescer"
            text="O código e a estrutura são pensados para o futuro. À medida que o negócio cresce, o site pode ser expandido com novos recursos, páginas ou sistemas, sem complicações."
          />
          <CardReason
            icon={<FaGears />}
            title="Funcionalidades personalizadas"
            text="Não existem limitações: o site é modelado conforme a real necessidade do negócio. Seja uma área de login, painel administrativo, integração com sistemas ou qualquer recurso estratégico."
          />
        </div>
        <div className="relative flex flex-col">
          <CardReason
            newClassName="-ml-20"
            icon={<BsShieldLockFill />}
            title="Segurança reforçada"
            text="O projeto é contruído com atenção à segurança desde a bade, usando boas práticas e recursos personalizados para proteger dados e evitar vulnerabilidades."
          />
          <Image
            className="absolute bottom-0 right-0 w-72"
            src={Engine}
            alt="Logo"
          />
        </div>
      </div>
      <Button
        className={`absolute bottom-2 left-10 z-50 w-max items-end transition-all duration-150 md:hidden`}
        variant="ghost"
        onClick={() => scrollScreen("left")}
      >
        <FaArrowCircleLeft className="size-7 text-primary" />
      </Button>
      <Button
        className={`absolute bottom-2 left-10 z-50 hidden w-max items-end transition-all duration-150 md:block`}
        variant="ghost"
        onClick={() => scrollScreen("leftMd")}
      >
        <FaArrowCircleLeft className="size-7 text-primary" />
      </Button>

      <Button
        className="absolute bottom-2 right-10 z-50 w-max items-end transition-all duration-150 md:hidden"
        variant="ghost"
        onClick={() => scrollScreen("right")}
      >
        <FaArrowCircleRight className="size-7 text-primary" />
      </Button>
      <Button
        className="absolute bottom-2 right-10 z-50 hidden w-max items-end transition-all duration-150 md:block"
        variant="ghost"
        onClick={() => scrollScreen("rightMd")}
      >
        <FaArrowCircleRight className="size-7 text-primary" />
      </Button>
    </section>
  );
};

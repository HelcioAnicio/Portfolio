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

export const WhyDevLab = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollScreen = (direction: string) => {
    if (direction === "right" && containerRef.current) {
      containerRef.current.scrollLeft += 600;
    }
    if (direction === "left" && containerRef.current) {
      containerRef.current.scrollLeft -= 600;
    }
  };
  return (
    <>
      <h2 className="text-lg text-black">
        Porquê a <span className="text-popover-foreground">Codando </span>
        ideias?
      </h2>
      <div
        ref={containerRef}
        className="no-scrollbar relative flex w-full gap-40 overflow-auto scroll-smooth px-2 pb-5 md:p-6"
      >
        <div className="flex flex-col gap-10">
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
        </div>
        <div className="flex flex-col gap-10">
          <CardReason
            newClassName="-ml-32"
            icon={<IoGlobeSharp />}
            title="Navegação inteligente"
            text="O fluxo do site é pensado para guiar o usuário de forma intuitica até a ação desejada, seja um contato, uma compra ou um agendamento. Isso aumenta o engajamento e gera melhores resultados."
          />
          <CardReason
            icon={<TfiHeadphoneAlt />}
            title="Atendimento direto e continuo"
            text="Você fala com quem desenvolve. Isso significa mais agilidade para ajustes, melhorias e suporte sempre que precisar, sem depender de terceiros ou burocracias."
          />
        </div>
        <div className="flex flex-col gap-10">
          <CardReason
            newClassName="-ml-32"
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
        <div className="flex flex-col gap-10">
          <CardReason
            newClassName="-ml-32"
            icon={<BsShieldLockFill />}
            title="Segurança reforçada"
            text="O projeto é contruído com atenção à segurança desde a bade, usando boas práticas e recursos personalizados para proteger dados e evitar vulnerabilidades."
          />
        </div>
      </div>
      <Button
        className={`absolute bottom-2 left-10 z-50 w-max items-end transition-all duration-150`}
        variant="ghost"
        onClick={() => scrollScreen("left")}
      >
        <FaArrowCircleLeft className="size-7 text-primary" />
      </Button>

      <Button
        className="absolute bottom-2 right-10 z-50 w-max items-end"
        variant="ghost"
        onClick={() => scrollScreen("right")}
      >
        <FaArrowCircleRight className="size-7 text-primary" />
      </Button>
    </>
  );
};

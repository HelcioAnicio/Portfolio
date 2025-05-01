import MobileMarketingDigital from "../../../public/marketingDigital/mobile.png";
import MobileMonguilhoDental from "../../../public/monguilhoDental/mobile.png";
import MobileUrl from "../../../public/url/mobile.png";
import MobileFAQ from "../../../public/faq/mobile.png";
import MobileEcommerce from "../../../public/ecommerceFsw/mobile.png";
import MobileAgroFinance from "../../../public/agroFinance/mobile.png";
import MobileGfAdvogados from "../../../public/gfAdvogados/mobile.png";
import MobileBarberDev from "../../../public/barberDev/mobile.png";
import MobileLessaDiplomas from "../../../public/lessaDiplomas/mobile.png";
import MobileUnipromotora from "../../../public/unipromotora/mobile.png";

import DesktopAgroFinance from "../../../public/agroFinance/desktop.png";
import DesktopEcommerce from "../../../public/ecommerceFsw/desktop.png";
import DesktopLessaDiplomas from "../../../public/lessaDiplomas/desktop.png";
import DesktopUnipromotora from "../../../public/unipromotora/desktop.png";
import DesktopUrl from "../../../public/url/desktop.png";
import DesktopMarketing from "../../../public/marketingDigital/desktop.png";
import DesktopGfAdvogados from "../../../public/gfAdvogados/desktop.png";
import DesktopBarberDev from "../../../public/barberDev/desktop.png";
import DesktopMonguilho from "../../../public/monguilhoDental/desktop.png";
import DesktopFaq from "../../../public/faq/desktop.png";
import { FaHtml5, FaReact } from "react-icons/fa";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io5";
import { BsStripe } from "react-icons/bs";
import {
  AiOutlineLoading3Quarters,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import {
  SiAxios,
  SiPostgresql,
  SiPrisma,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaRegWindowRestore } from "react-icons/fa6";

import { Project } from "./project";
// import { GitHubRepos } from "@/components/ui/repository";
import Autoplay from "embla-carousel-autoplay";

export const ListProjects = () => {
  return (
    <Card className="bg-nome mx-auto h-dvh w-full max-w-5xl scroll-smooth border-none">
      <CardHeader>
        <CardTitle className="flex w-full items-center gap-1 py-5 text-2xl text-primary-foreground sm:py-10">
          <FaRegWindowRestore className="text-foreground" />
          <h2 className="min-w-max text-foreground"> Pricipais Projetos</h2>
        </CardTitle>
        {/* <GitHubRepos /> */}
      </CardHeader>
      <CardContent className="p-1 pb-5">
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            <CarouselItem className="lg:basis-1/3">
              <Project
                backgroundUrl={DesktopAgroFinance}
                img={MobileAgroFinance}
                vercel={"https://agro-finance-real.vercel.app/"}
                github={"https://github.com/HelcioAnicio/AgroFinance"}
                nameProject="Em construção ..."
                descriptionProject="Esse é sistema SAAS chamado inicialmente AgroFinance, objetivo ter total controle do animais da fazenda. Dentro desse sistema é possivel gerenciar animais, e o financeiro da fazendo tudo de forma automatizada."
                techIcons={[
                  TbBrandNextjs,
                  FaReact,
                  SiTypescript,
                  SiPrisma,
                  SiSupabase,
                  SiPostgresql,
                  SiTailwindcss,
                  SiShadcnui,
                  BsStripe,
                ]}
              />
            </CarouselItem>

            <CarouselItem className="lg:basis-1/3">
              <Project
                backgroundUrl={DesktopEcommerce}
                img={MobileEcommerce}
                vercel={
                  "https://ecommerce-fsw-git-main-helcioanicios-projects.vercel.app/"
                }
                github={"https://github.com/HelcioAnicio/Ecommerce-FSW"}
                nameProject="Ecommerce FSW"
                descriptionProject="O site oferece login simplificado com contas do Google, navegação por categorias de produtos e opções de descontos. Os usuários podem gerenciar seu carrinho de compras, incluindo adicionar, remover e modificar itens. O pagamento é seguro e eficiente através da integração com a API do Stripe, com suporte a webhooks para processar eventos de pagamento."
                techIcons={[
                  FaReact,
                  SiTypescript,
                  SiPrisma,
                  TbBrandNextjs,
                  SiSupabase,
                  SiTailwindcss,
                  BsStripe,
                ]}
              />
            </CarouselItem>

            <CarouselItem className="lg:basis-1/3">
              <Project
                backgroundUrl={DesktopLessaDiplomas}
                img={MobileLessaDiplomas}
                vercel={
                  "https://ecommerce-fsw-git-main-helcioanicios-projects.vercel.app/"
                }
                github={"https://github.com/HelcioAnicio/Ecommerce-FSW"}
                nameProject="Revalidação de Diplomas"
                descriptionProject="Apresentação de um propósito de ajudar pessoas com diplomas no exterior a validar no Brasil e exercer a profissão. O site é uma vitrine para mostrar os serviços prestados."
                techIcons={[FaReact, SiTypescript, SiTailwindcss]}
              />
            </CarouselItem>

            <CarouselItem className="lg:basis-1/3">
              <Project
                backgroundUrl={DesktopUnipromotora}
                img={MobileUnipromotora}
                vercel={
                  "https://unipromotora-helcioanicios-projects.vercel.app/"
                }
                github={"https://github.com/HelcioAnicio/Unipromotora"}
                nameProject="Unipromotora"
                descriptionProject="Site institucional para mostrar os serviços de empréstimos prestados pela empresa, com um formulário de contato com integração a um CRM e automatização com whatsapp para facilitar a comunicação com os clientes."
                techIcons={[FaReact, SiTypescript, SiTailwindcss, SiAxios]}
              />
            </CarouselItem>

            <CarouselItem className="lg:basis-1/3">
              <Project
                backgroundUrl={DesktopBarberDev}
                img={MobileBarberDev}
                vercel={
                  "https://dev-barber-ex-helcioanicios-projects.vercel.app/"
                }
                github={"https://github.com/HelcioAnicio/devBarberEx"}
                nameProject="Barber Dev"
                descriptionProject="Este projeto é um website para uma barbearia, mostrando o designer e também um campo para agendamento como exemplo."
                techIcons={[TbBrandJavascript, FaHtml5, IoLogoCss3]}
              />
            </CarouselItem>
            <CarouselItem className="lg:basis-1/3">
              <Project
                backgroundUrl={DesktopGfAdvogados}
                img={MobileGfAdvogados}
                vercel={
                  "https://gf-advogados-helcioanicios-projects.vercel.app/"
                }
                github={"https://github.com/HelcioAnicio/MarketingDigital"}
                nameProject="GF Advogados"
                descriptionProject="Empresa consolidada, de um advocacia, mostrando a equipe e todos os serviços prestados no meio juridico, e claro mostrando os feedbacks e clientes atendidos."
                techIcons={[TbBrandJavascript, FaHtml5, IoLogoCss3]}
              />
            </CarouselItem>

            <CarouselItem className="lg:basis-1/3">
              <Project
                backgroundUrl={DesktopMarketing}
                img={MobileMarketingDigital}
                vercel={"https://marketing-digital-eight.vercel.app/"}
                github={"https://github.com/HelcioAnicio/MarketingDigital"}
                nameProject="Marketing Digital"
                descriptionProject="Empresa de marketing digital, mostra os serviços, cards de orçamento e redes sociais, além de conter um form ao final para realizar contato."
                techIcons={[TbBrandJavascript, FaHtml5, IoLogoCss3]}
              />
            </CarouselItem>
            <CarouselItem className="lg:basis-1/3">
              <Project
                backgroundUrl={DesktopMonguilho}
                img={MobileMonguilhoDental}
                vercel={"https://monguilho-dental.vercel.app/"}
                github={"https://github.com/HelcioAnicio/MonguilhoDental"}
                nameProject="Monguilho Dental - Clinica"
                descriptionProject="Esse site mostra uma clinica dentária, mostrando os serviços, dados e informações da clinica."
                techIcons={[TbBrandJavascript, FaHtml5, IoLogoCss3]}
              />
            </CarouselItem>
            <CarouselItem className="lg:basis-1/3">
              <Project
                backgroundUrl={DesktopUrl}
                img={MobileUrl}
                vercel={"https://url-shortener-seven-delta.vercel.app/"}
                github={"https://github.com/HelcioAnicio/url-shortener"}
                nameProject="Encurtador de Links"
                descriptionProject="O Encurtador de URL é uma ferramenta grátis para encurtar links
                de redes sociais do Instagram, Facebook, YouTube, Twitter,
                Linked In, Pinterest e sites com autoridade na Internet."
                techIcons={[TbBrandJavascript, FaHtml5, IoLogoCss3]}
              />
            </CarouselItem>
            <CarouselItem className="lg:basis-1/3">
              <Project
                backgroundUrl={DesktopFaq}
                img={MobileFAQ}
                vercel={"https://faq-questions.vercel.app/"}
                github={"https://github.com/HelcioAnicio/FAQ_Questions"}
                nameProject="FAQ (Perguntas frequentes)"
                descriptionProject="Frequently Asked Questions é um site onde você vai encontrar
            algumas perguntas e respostas mais frequentes realizadas sobre
            mim."
                techIcons={[TbBrandJavascript, FaHtml5, IoLogoCss3]}
              />
            </CarouselItem>
            <CarouselItem className="lg:basis-1/3">
              <div className="flex w-full max-w-lg flex-col items-center p-4">
                <div className="flex h-60 w-full animate-spin items-center justify-center">
                  <AiOutlineLoading3Quarters size={64} />
                </div>
                <div className="text-center">
                  <h3 className="mt-4 text-lg">Em breve</h3>
                  <div className="mt-4 flex gap-2">
                    <AiOutlineQuestionCircle size="24" />
                    <AiOutlineQuestionCircle size="24" />
                    <AiOutlineQuestionCircle size="24" />
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="" />
          <CarouselNext className="" />
        </Carousel>
      </CardContent>
    </Card>
  );
};

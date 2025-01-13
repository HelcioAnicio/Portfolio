import MobileMarketingDigital from '../../../public/marketingDigital/mobile.png';
import MobileMonguilhoDental from '../../../public/monguilhoDental/mobile.png';
import MobileWebSiteDigital from '../../../public/websiteDigital/mobile.png';
import MobileCarSeller from '../../../public/carSeller/mobile.png';
import MobileUrl from '../../../public/url/mobile.png';
import MobileFAQ from '../../../public/faq/mobile.png';
import MobileEcommerce from '../../../public/ecommerceFsw/mobile.png';
import DesktopImage from '../../../public/ecommerceFsw/desktop.png';
import DesktopUrl from '../../../public/url/desktop.png';
import DesktopMarketing from '../../../public/marketingDigital/desktop.png';
import DesktopMonguilho from '../../../public/monguilhoDental/desktop.png';
import DesktopWebSite from '../../../public/websiteDigital/desktop.png';
import DesktopCarSeller from '../../../public/carSeller/desktop.png';
import DesktopFaq from '../../../public/faq/desktop.png';
import { FaHtml5, FaReact } from 'react-icons/fa';
import { TbBrandJavascript, TbBrandNextjs } from 'react-icons/tb';
import { IoLogoCss3 } from 'react-icons/io5';
import { BsStripe } from 'react-icons/bs';
import {
  AiOutlineLoading3Quarters,
  AiOutlineQuestionCircle,
} from 'react-icons/ai';
import {
  SiPrisma,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Project } from './project';

export const ListProjects = () => {
  return (
    <>
      <Card className='w-full max-w-2xl m-auto '>
        <CardHeader>
          <CardTitle className='text-center text-2xl text-primary-foreground'>
            Pricipais Projetos
          </CardTitle>
        </CardHeader>
        <CardContent className='p-1 pb-5'>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}>
            <CarouselContent>
              <CarouselItem className='lg:basis-1/3'>
                <Project
                  backgroundUrl={DesktopImage}
                  img={MobileEcommerce}
                  vercel={
                    'https://ecommerce-fsw-git-main-helcioanicios-projects.vercel.app/'
                  }
                  github={'https://github.com/HelcioAnicio/Ecommerce-FSW'}
                  nameProject='Ecommerce FSW'
                  descriptionProject='O site oferece login simplificado com contas do Google, navegação por categorias de produtos e opções de descontos. Os usuários podem gerenciar seu carrinho de compras, incluindo adicionar, remover e modificar itens. O pagamento é seguro e eficiente através da integração com a API do Stripe, com suporte a webhooks para processar eventos de pagamento.'
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
              <CarouselItem className='lg:basis-1/3'>
                <Project
                  backgroundUrl={DesktopUrl}
                  img={MobileUrl}
                  vercel={'https://url-shortener-seven-delta.vercel.app/'}
                  github={'https://github.com/HelcioAnicio/url-shortener'}
                  nameProject='Encurtador de Links'
                  descriptionProject='O Encurtador de URL é uma ferramenta grátis para encurtar links
                de redes sociais do Instagram, Facebook, YouTube, Twitter,
                Linked In, Pinterest e sites com autoridade na Internet.'
                  techIcons={[TbBrandJavascript, FaHtml5, IoLogoCss3]}
                />
              </CarouselItem>
              <CarouselItem className='lg:basis-1/3'>
                <Project
                  backgroundUrl={DesktopMarketing}
                  img={MobileMarketingDigital}
                  vercel={'https://marketing-digital-eight.vercel.app/'}
                  github={'https://github.com/HelcioAnicio/MarketingDigital'}
                  nameProject='Marketing Digital'
                  descriptionProject='Empresa de marketing digital, mostra os serviços, cards de orçamento e redes sociais, além de conter um form ao final para realizar contato.'
                  techIcons={[TbBrandJavascript, FaHtml5, IoLogoCss3]}
                />
              </CarouselItem>
              <CarouselItem className='lg:basis-1/3'>
                <Project
                  backgroundUrl={DesktopMonguilho}
                  img={MobileMonguilhoDental}
                  vercel={'https://monguilho-dental.vercel.app/'}
                  github={'https://github.com/HelcioAnicio/MonguilhoDental'}
                  nameProject='Monguilho Dental - Clinica'
                  descriptionProject='Esse site mostra uma clinica dentária, mostrando os serviços, dados e informações da clinica.'
                  techIcons={[TbBrandJavascript, FaHtml5, IoLogoCss3]}
                />
              </CarouselItem>
              <CarouselItem className='lg:basis-1/3'>
                <Project
                  backgroundUrl={DesktopWebSite}
                  img={MobileWebSiteDigital}
                  vercel={'https://web-site-digitalnew.vercel.app/'}
                  github={'https://github.com/HelcioAnicio/WebSite-Digital'}
                  nameProject='Web site  Digital'
                  descriptionProject='Web site que mostra planos para assinatura, informações sobre a empresa e tambem icons que levara você diretamente para as redes sociais.'
                  techIcons={[TbBrandJavascript, FaHtml5, IoLogoCss3]}
                />
              </CarouselItem>
              <CarouselItem className='lg:basis-1/3'>
                <Project
                  backgroundUrl={DesktopCarSeller}
                  img={MobileCarSeller}
                  vercel={'https://car-seller-eta.vercel.app/'}
                  github={'https://github.com/HelcioAnicio/Car-seller'}
                  nameProject='Vendas de veiculos'
                  descriptionProject='Aqui você conseguirá ver uma concessionária de carros, com preços, fotos, preços e outras coisas sobre os carros.'
                  techIcons={[TbBrandJavascript, FaHtml5, IoLogoCss3]}
                />
              </CarouselItem>
              <CarouselItem className='lg:basis-1/3'>
                <Project
                  backgroundUrl={DesktopFaq}
                  img={MobileFAQ}
                  vercel={'https://faq-questions.vercel.app/'}
                  github={'https://github.com/HelcioAnicio/FAQ_Questions'}
                  nameProject='FAQ (Perguntas frequentes)'
                  descriptionProject='Frequently Asked Questions é um site onde você vai encontrar
            algumas perguntas e respostas mais frequentes realizadas sobre
            mim.'
                  techIcons={[TbBrandJavascript, FaHtml5, IoLogoCss3]}
                />
              </CarouselItem>
              <CarouselItem className='lg:basis-1/3'>
                <div className='flex flex-col w-full max-w-lg p-4 items-center'>
                  <div className='w-full h-60 flex items-center justify-center animate-spin'>
                    <AiOutlineLoading3Quarters
                      size={64}
                      className='text-white'
                    />
                  </div>
                  <div className='text-center'>
                    <h3 className='text-white text-lg mt-4'>Em breve</h3>
                    <div className='flex gap-2 mt-4'>
                      <AiOutlineQuestionCircle
                        className='text-white'
                        size='24'
                      />
                      <AiOutlineQuestionCircle
                        className='text-white'
                        size='24'
                      />
                      <AiOutlineQuestionCircle
                        className='text-white'
                        size='24'
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
      </Card>
    </>
  );
};

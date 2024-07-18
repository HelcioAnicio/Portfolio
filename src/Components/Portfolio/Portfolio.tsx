import "./Portfolio.modules.scss";
import { FaHtml5, FaSass, FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoCss3, IoLogoFirebase, IoLogoNodejs } from "react-icons/io5";
import {
  AiOutlineLoading3Quarters,
  AiOutlineQuestionCircle,
} from "react-icons/ai";

import MobileForm from "../../assets/Form/mobile.png";
import MobileMarketingDigital from "../../assets/Marketing-Digital/mobile.png";
import MobileMonguilhoDental from "../../assets/Monguilho-Dental/mobile.png";
import MobileWebSiteDigital from "../../assets/WebSite-Digital/mobile.png";
import MobileDentalClinic from "../../assets/Dental-clinic/mobile.png";
import MobileCarSeller from "../../assets/Car-seller/mobile.png";
import MobileUrl from "../../assets/Url/mobile.png";
import MobileCalculator from "../../assets/Calculator/mobile.png";
import MobileMarvel from "../../assets/Marvel/mobile.png";
import MobileFAQ from "../../assets/Faq/mobile.png";
import MobileRating from "../../assets/Rating/mobile.png";
import { Project } from "./Project/Project";
import { SiTailwindcss } from "react-icons/si";

function Portfolio() {
  return (
    <>
      <section
        id='Portfolio'
        className='SectionContainer'>
        <h2>Portifólio</h2>
        <div className='DivContent'>
          <Project
            style='Url'
            img={MobileUrl}
            vercel={"https://url-shortener-seven-delta.vercel.app/"}
            github={"https://github.com/HelcioAnicio/url-shortener"}
            nameProject='Encurtador de Links'
            descriptionProject='O Encurtador de URL é uma ferramenta grátis para encurtar links
                de redes sociais do Instagram, Facebook, YouTube, Twitter,
                Linked In, Pinterest e sites com autoridade na Internet.'
            techIcons={[TbBrandJavascript, FaHtml5, IoLogoCss3]}
          />

          <Project
            style='Form'
            img={MobileForm}
            vercel={"https://contact-form-two-xi.vercel.app"}
            github={"https://github.com/HelcioAnicio/Contact_form"}
            nameProject='Formulario de Contato'
            descriptionProject='Este projeto é formulário de contato, um canal de comunicação que conecta clientes e a mim. Por meio dele, as pessoas disponibilizam seus dados, como primeiro nome, ultimo nome, e-mail e senha.'
            techIcons={[
              FaReact,
              TbBrandJavascript,
              FaSass,
              FaHtml5,
              IoLogoFirebase,
              IoLogoNodejs,
            ]}
          />

          <Project
            style='MarketingDigital'
            img={MobileMarketingDigital}
            vercel={"https://marketing-digital-eight.vercel.app/"}
            github={"https://github.com/HelcioAnicio/MarketingDigital"}
            nameProject='Marketing Digital'
            descriptionProject='Empresa de marketing digital, mostra os serviços, cards de orçamento e redes sociais, além de conter um form ao final para realizar contato.'
            techIcons={[TbBrandJavascript, FaHtml5, IoLogoCss3]}
          />

          <Project
            style='MonguilhoDental'
            img={MobileMonguilhoDental}
            vercel={"https://monguilho-dental.vercel.app/"}
            github={"https://github.com/HelcioAnicio/MonguilhoDental"}
            nameProject='Monguilho Dental - Clinica'
            descriptionProject='Esse site mostra uma clinica dentária, mostrando os serviços, dados e informações da clinica.'
            techIcons={[TbBrandJavascript, FaHtml5, IoLogoCss3]}
          />

          <Project
            style='WebSiteDigital'
            img={MobileWebSiteDigital}
            vercel={"https://web-site-digitalnew.vercel.app/"}
            github={"https://github.com/HelcioAnicio/WebSite-Digital"}
            nameProject='Web site  Digital'
            descriptionProject='Web site que mostra planos para assinatura, informações sobre a empresa e tambem icons que levara você diretamente para as redes sociais.'
            techIcons={[TbBrandJavascript, FaHtml5, IoLogoCss3]}
          />

          <Project
            style='Dental-clinic'
            img={MobileDentalClinic}
            vercel={"https://dental-clinic-psi.vercel.app/"}
            github={"https://github.com/HelcioAnicio/Dental-Clinic"}
            nameProject='Clinica dentaria'
            descriptionProject='Uma clinica dentária, mostra um perfil da dentista e tambem videos da clinica.'
            techIcons={[TbBrandJavascript, FaHtml5, IoLogoCss3]}
          />

          <Project
            style='Car-seller'
            img={MobileCarSeller}
            vercel={"https://car-seller-eta.vercel.app/"}
            github={"https://github.com/HelcioAnicio/Car-seller"}
            nameProject='Vendas de veiculos'
            descriptionProject='Aqui você conseguirá ver uma concessionária de carros, com preços, fotos, preços e outras coisas sobre os carros.'
            techIcons={[TbBrandJavascript, FaHtml5, IoLogoCss3]}
          />

          <Project
            style='FAQ'
            img={MobileFAQ}
            vercel={"https://faq-questions.vercel.app/"}
            github={"https://github.com/HelcioAnicio/FAQ_Questions"}
            nameProject='FAQ (Perguntas frequentes)'
            descriptionProject='Frequently Asked Questions é um site onde você vai encontrar
            algumas perguntas e respostas mais frequentes realizadas sobre
            mim.'
            techIcons={[TbBrandJavascript, FaHtml5, IoLogoCss3]}
          />

          <Project
            style='Marvel'
            img={MobileMarvel}
            vercel={"https://marvel-comics-react--five.vercel.app/"}
            github={"https://github.com/HelcioAnicio/MarvelComics-react/"}
            nameProject='Marvel'
            descriptionProject='Este site foi criado para poder pesquisar qualquer personagem da
                Marvel, é possível ver fotos, descrições dos personagens,
                filmes, HQs e qualquer informação sobre o universo Marvel'
            techIcons={[
              FaReact,
              TbBrandJavascript,
              SiTailwindcss,
              FaHtml5,
              IoLogoCss3,
            ]}
          />

          <Project
            style='Calculator'
            img={MobileCalculator}
            vercel={"https://calculator-helcioanicio.vercel.app/"}
            github={"https://github.com/HelcioAnicio/calculator/"}
            nameProject='Calculadora'
            descriptionProject='Nesse projeto você verá uma calculadora funcional, porém onde
                existe uma lógica desafiadora em JavaScript.'
            techIcons={[TbBrandJavascript, FaHtml5, IoLogoCss3]}
          />

          <Project
            style='Rating'
            img={MobileRating}
            vercel={"https://rating-feedback.vercel.app/"}
            github={"https://github.com/HelcioAnicio/Rating_feedback/"}
            nameProject='Serviço de avaliação'
            descriptionProject='Este site é uma página sobre feedback ao final de algum serviço
                ou atendimento. Ao final, vai aparecer uma tela com 5 números e
                a pessoa vai escolher a avaliação para o serviço ou atendimento
                …'
            techIcons={[TbBrandJavascript, FaHtml5, IoLogoCss3]}
          />

          <div className='Soon'>
            <div className='DivImage'>
              <AiOutlineLoading3Quarters className='Loading' />
            </div>
            <div className='DivInformation'>
              <h3>Em breve</h3>
              <div className='Tech'>
                <AiOutlineQuestionCircle className='Question' />
                <AiOutlineQuestionCircle className='Question' />
                <AiOutlineQuestionCircle className='Question' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;

import "./Portfolio.modules.scss";
import { FaReact, FaHtml5, FaSass, FaGithub } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoFirebase, IoLogoNodejs } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { GiMagnifyingGlass } from "react-icons/gi";
import {
  AiOutlineLoading3Quarters,
  AiOutlineQuestionCircle,
} from "react-icons/ai";

import MobileForm from "../../assets/Form/mobile.png";
import MobileUrl from "../../assets/Url/mobile.png";
import MobileCalculator from "../../assets/Calculator/mobile.png";
import MobileToDoList from "../../assets/ToDoList/mobile.png";
import MobileWeather from "../../assets/Weather/mobile.png";
import MobileClock from "../../assets/Clock/mobile.png";
import MobileMarvel from "../../assets/Marvel/mobile.png";
import MobileFAQ from "../../assets/Faq/mobile.png";
import MobileRating from "../../assets/Rating/mobile.png";
import MobileStopWatch from "../../assets/StopWatch/mobile.png";

function Portfolio() {
  return (
    <>
      <section
        id='Portfolio'
        className='SectionContainer'>
        <h2>Portifólio</h2>
        <div className='DivContent'>
          <div className='Form'>
            <div className='DivImage'>
              <img
                src={MobileForm}
                alt='Mobile'
              />
              <div className='DivIconsDesktop'>
                <a href='https://contact-form-two-xi.vercel.app/'>
                  <GiMagnifyingGlass title='Acesse o site' />
                </a>
                <a href='https://github.com/HelcioAnicio/Contact_form'>
                  <FaGithub title='Acesse o GitHub' />
                </a>
              </div>
            </div>
            <div className='DivInformation'>
              <h3>
                Formulário de contato
                <div className='DivIconsMobile'>
                  <a href='https://contact-form-two-xi.vercel.app/'>
                    <GiMagnifyingGlass title='Acesse o site' />
                  </a>
                  <a href='https://github.com/HelcioAnicio/Contact_form'>
                    <FaGithub title='Acesse o GitHub' />
                  </a>
                </div>
              </h3>
              <p>
                Este projeto é formulário de contato, um canal de comunicação
                que conecta clientes e a mim. Por meio dele, as pessoas
                disponibilizam seus dados, como primeiro nome, ultimo nome,
                e-mail e senha.
              </p>
              <div className='Tech'>
                <FaReact className='react' />
                <TbBrandJavascript className='js' />
                <FaSass className='scss' />
                <FaHtml5 className='html' />
                <IoLogoFirebase className='firebase' />
                <IoLogoNodejs className='node' />
              </div>
            </div>
          </div>

          <div className='Url'>
            <div className='DivImage'>
              <img
                src={MobileUrl}
                alt='Mobile'
              />
              <div className='DivIconsDesktop'>
                <a href='https://url-shortener-seven-delta.vercel.app/'>
                  <GiMagnifyingGlass title='Acesse o site' />
                </a>
                <a href='https://github.com/HelcioAnicio/url-shortener'>
                  <FaGithub title='Acesse o GitHub' />
                </a>
              </div>
            </div>
            <div className='DivInformation'>
              <h3>
                Encurtador de link
                <div className='DivIconsMobile'>
                  <a href='https://url-shortener-seven-delta.vercel.app/'>
                    <GiMagnifyingGlass title='Acesse o site' />
                  </a>
                  <a href='https://github.com/HelcioAnicio/url-shortener'>
                    <FaGithub title='Acesse o GitHub' />
                  </a>
                </div>
              </h3>
              <p>
                O Encurtador de URL é uma ferramenta grátis para encurtar links
                de redes sociais do Instagram, Facebook, YouTube, Twitter,
                Linked In, Pinterest e sites com autoridade na Internet.
              </p>
              <div className='Tech'>
                <TbBrandJavascript className='js' />
                <FaHtml5 className='html' />
                <IoLogoCss3 className='css' />
              </div>
            </div>
          </div>

          <div className='Calculator'>
            <div className='DivImage'>
              <img
                src={MobileCalculator}
                alt='Mobile'
              />
              <div className='DivIconsDesktop'>
                <a href='https://calculator-helcioanicio.vercel.app/'>
                  <GiMagnifyingGlass title='Acesse o site' />
                </a>
                <a href='https://github.com/HelcioAnicio/calculator'>
                  <FaGithub title='Acesse o GitHub' />
                </a>
              </div>
            </div>
            <div className='DivInformation'>
              <h3>
                Calculadora
                <div className='DivIconsMobile'>
                  <a href='https://calculator-helcioanicio.vercel.app/'>
                    <GiMagnifyingGlass title='Acesse o site' />
                  </a>
                  <a href='https://github.com/HelcioAnicio/calculator'>
                    <FaGithub title='Acesse o GitHub' />
                  </a>
                </div>
              </h3>
              <p>
                Nesse projeto você verá uma calculadora funcional, porém onde
                existe uma lógica desafiadora em JavaScript.
              </p>
              <div className='Tech'>
                <TbBrandJavascript className='js' />
                <FaHtml5 className='html' />
                <IoLogoCss3 className='css' />
              </div>
            </div>
          </div>

          <div className='Marvel'>
            <div className='DivImage'>
              <img
                src={MobileMarvel}
                alt='Mobile'
              />
              <div className='DivIconsDesktop'>
                <a href='https://marvel-git-main-helcioanicio.vercel.app/'>
                  <GiMagnifyingGlass title='Acesse o site' />
                </a>
                <a href='https://github.com/HelcioAnicio/Marvel'>
                  <FaGithub title='Acesse o GitHub' />
                </a>
              </div>
            </div>
            <div className='DivInformation'>
              <h3>
                Marvel
                <div className='DivIconsMobile'>
                  <a href='https://marvel-git-main-helcioanicio.vercel.app/'>
                    <GiMagnifyingGlass title='Acesse o site' />
                  </a>
                  <a href='https://github.com/HelcioAnicio/Marvel'>
                    <FaGithub title='Acesse o GitHub' />
                  </a>
                </div>
              </h3>
              <p>
                Este site foi criado para poder pesquisar qualquer personagem da
                Marvel, é possível ver fotos, descrições dos personagens,
                filmes, HQs e qualquer informação sobre o universo Marvel.
              </p>
              <div className='Tech'>
                <TbBrandJavascript className='js' />
                <FaHtml5 className='html' />
                <FaSass className='scss' />
                <IoLogoCss3 className='css' />
              </div>
            </div>
          </div>

          <div className='Weather'>
            <div className='DivImage'>
              <img
                src={MobileWeather}
                alt='Mobile'
              />
              <div className='DivIconsDesktop'>
                <a href='https://weather-git-main-helcioanicio.vercel.app/'>
                  <GiMagnifyingGlass title='Acesse o site' />
                </a>
                <a href='https://github.com/HelcioAnicio/Weather'>
                  <FaGithub title='Acesse o GitHub' />
                </a>
              </div>
            </div>
            <div className='DivInformation'>
              <h3>
                Previsão do tempo
                <div className='DivIconsMobile'>
                  <a href='https://to-do-list-nine-kohl.vercel.app/'>
                    <GiMagnifyingGlass title='Acesse o site' />
                  </a>
                  <a href='https://github.com/HelcioAnicio/ToDoList'>
                    <FaGithub title='Acesse o GitHub' />
                  </a>
                </div>
              </h3>
              <p>
                Nesse site você será capaz de realizar uma pesquisa de qualquer
                cidade do mundo, um banco de dados de cidades bem grande. E
                aparecerá a previsão do tempo naquele exato momento, com algumas
                informações sobre a cidade.
              </p>
              <div className='Tech'>
                <TbBrandJavascript className='js' />
                <FaHtml5 className='html' />
                <FaSass className='scss' />
                <IoLogoCss3 className='css' />
              </div>
            </div>
          </div>

          <div className='ToDoList'>
            <div className='DivImage'>
              <img
                src={MobileToDoList}
                alt='Mobile'
              />
              <div className='DivIconsDesktop'>
                <a href='https://to-do-list-nine-kohl.vercel.app/'>
                  <GiMagnifyingGlass title='Acesse o site' />
                </a>
                <a href='https://github.com/HelcioAnicio/ToDoList'>
                  <FaGithub title='Acesse o GitHub' />
                </a>
              </div>
            </div>
            <div className='DivInformation'>
              <h3>
                To Do List
                <div className='DivIconsMobile'>
                  <a href='https://to-do-list-nine-kohl.vercel.app/'>
                    <GiMagnifyingGlass title='Acesse o site' />
                  </a>
                  <a href='https://github.com/HelcioAnicio/ToDoList'>
                    <FaGithub title='Acesse o GitHub' />
                  </a>
                </div>
              </h3>
              <p>
                Uma lista de tarefas, onde pode adicionar, marcar como concluido
                e tambem excluir caso tenha feito algo que queria. E tambem um
                botão para alterar o tema de cores.
              </p>
              <div className='Tech'>
                <TbBrandJavascript className='js' />
                <FaHtml5 className='html' />
                <FaSass className='scss' />
                <IoLogoCss3 className='css' />
              </div>
            </div>
          </div>

          <div className='Clock'>
            <div className='DivImage'>
              <img
                src={MobileClock}
                alt='Mobile'
              />
              <div className='DivIconsDesktop'>
                <a href='https://clock-teal-mu.vercel.app/'>
                  <GiMagnifyingGlass title='Acesse o site' />
                </a>
                <a href='https://github.com/HelcioAnicio/Clock'>
                  <FaGithub title='Acesse o GitHub' />
                </a>
              </div>
            </div>
            <div className='DivInformation'>
              <h3>
                Clock
                <div className='DivIconsMobile'>
                  <a href='https://clock-teal-mu.vercel.app/'>
                    <GiMagnifyingGlass title='Acesse o site' />
                  </a>
                  <a href='https://github.com/HelcioAnicio/Clock'>
                    <FaGithub title='Acesse o GitHub' />
                  </a>
                </div>
              </h3>
              <p>
                Um relógio digital, mostra as horas atualizadas a cada segundo.
              </p>
              <div className='Tech'>
                <TbBrandJavascript className='js' />
                <FaHtml5 className='html' />
                <FaSass className='scss' />
                <IoLogoCss3 className='css' />
              </div>
            </div>
          </div>

          <div className='FAQ'>
            <div className='DivImage'>
              <img
                src={MobileFAQ}
                alt='Mobile'
              />
              <div className='DivIconsDesktop'>
                <a href='https://faq-questions.vercel.app/'>
                  <GiMagnifyingGlass title='Acesse o site' />
                </a>
                <a href='https://github.com/HelcioAnicio/FAQ_Questions'>
                  <FaGithub title='Acesse o GitHub' />
                </a>
              </div>
            </div>
            <div className='DivInformation'>
              <h3>
                FAQ (Perguntas frequentes)
                <div className='DivIconsMobile'>
                  <a href='https://faq-questions.vercel.app/'>
                    <GiMagnifyingGlass title='Acesse o site' />
                  </a>
                  <a href='https://github.com/HelcioAnicio/FAQ_Questions'>
                    <FaGithub title='Acesse o GitHub' />
                  </a>
                </div>
              </h3>
              <p>
                Frequently Asked Questions é um site onde você vai encontrar
                algumas perguntas e respostas mais frequentes realizadas sobre
                mim.
              </p>
              <div className='Tech'>
                <TbBrandJavascript className='js' />
                <FaHtml5 className='html' />
                <IoLogoCss3 className='css' />
              </div>
            </div>
          </div>

          <div className='Rating'>
            <div className='DivImage'>
              <img
                src={MobileRating}
                alt='Mobile'
              />
              <div className='DivIconsDesktop'>
                <a href='https://rating-feedback.vercel.app/'>
                  <GiMagnifyingGlass title='Acesse o site' />
                </a>
                <a href='https://github.com/HelcioAnicio/Rating_feedback'>
                  <FaGithub title='Acesse o GitHub' />
                </a>
              </div>
            </div>
            <div className='DivInformation'>
              <h3>
                Serviço de avaliação
                <div className='DivIconsMobile'>
                  <a href='https://rating-feedback.vercel.app/'>
                    <GiMagnifyingGlass title='Acesse o site' />
                  </a>
                  <a href='https://github.com/HelcioAnicio/Rating_feedback'>
                    <FaGithub title='Acesse o GitHub' />
                  </a>
                </div>
              </h3>
              <p>
                Este site é uma página sobre feedback ao final de algum serviço
                ou atendimento. Ao final, vai aparecer uma tela com 5 números e
                a pessoa vai escolher a avaliação para o serviço ou atendimento
                …
              </p>
              <div className='Tech'>
                <TbBrandJavascript className='js' />
                <FaHtml5 className='html' />
                <IoLogoCss3 className='css' />
              </div>
            </div>
          </div>

          <div className='StopWatch'>
            <div className='DivImage'>
              <img
                src={MobileStopWatch}
                alt='Mobile'
              />
              <div className='DivIconsDesktop'>
                <a href='https://https://stop-watch-khaki.vercel.app/'>
                  <GiMagnifyingGlass title='Acesse o site' />
                </a>
                <a href='https://github.com/HelcioAnicio/StopWatch'>
                  <FaGithub title='Acesse o GitHub' />
                </a>
              </div>
            </div>
            <div className='DivInformation'>
              <h3>
                StopWatch
                <div className='DivIconsMobile'>
                  <a href='https://stop-watch-git-main-helcioanicio.vercel.app/'>
                    <GiMagnifyingGlass title='Acesse o site' />
                  </a>
                  <a href='https://github.com/HelcioAnicio/StopWatch'>
                    <FaGithub title='Acesse o GitHub' />
                  </a>
                </div>
              </h3>
              <p>
                Fiz este site capaz de cronometrar, parar, reiniciar e anotar
                abaixo dos botões. Aqui você pode “aproveitar” o tempo
                facilmente.
              </p>
              <div className='Tech'>
                <TbBrandJavascript className='js' />
                <FaHtml5 className='html' />
                <IoLogoCss3 className='css' />
              </div>
            </div>
          </div>

          <div className='Soon'>
            <div className='DivImage'>
              <AiOutlineLoading3Quarters className='Loading' />
            </div>
            <div className='DivInformation'>
              <h3>Em breve</h3>
              {/* <p></p> */}
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

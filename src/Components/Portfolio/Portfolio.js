import './Portfolio.modules.scss'
import { FaReact, FaHtml5, FaSass, FaGithub } from 'react-icons/fa';
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoFirebase, IoLogoNodejs } from 'react-icons/io5'
import { IoLogoCss3 } from 'react-icons/io5'
import { GiMagnifyingGlass } from 'react-icons/gi'
import { AiOutlineLoading3Quarters, AiOutlineQuestionCircle } from 'react-icons/ai'


import MobileForm  from '../../assets/Form/mobile.png';
import MobileUrl  from '../../assets/Url/mobile.png';
import MobileCalculator from '../../assets/Calculator/mobile.png';
import MobileToDoList from '../../assets/ToDoList/mobile.png';
import MobileClock from '../../assets/Clock/mobile.png';
import MobileFAQ  from '../../assets/Faq/mobile.png';
import MobileRating  from '../../assets/Rating/mobile.png';
import MobileQRCode  from '../../assets/QRcode/mobile.png';
import MobileCars from '../../assets/Cars/mobile.png';
import MobileSocialTree from '../../assets/SocialTree/mobile.png';



function Portfolio () {
    return (
        <>
            <section id='Portfolio' className="SectionContainer">
                <h2>Portifólio</h2>
                <div className="DivContent">

                    <div className="Form">
                        <div className="DivImage">
                            <img src={MobileForm} alt="Mobile" />
                            <div className="DivIconsDesktop">
                                <a href="https://contact-form-two-xi.vercel.app/">
                                    <GiMagnifyingGlass title='Acesse o site' />
                                </a>
                                <a href="https://github.com/HelcioAnicio/Contact_form">
                                    <FaGithub title='Acesse o GitHub' />
                                </a>
                            </div>
                        </div>
                        <div className="DivInformation">
                            <h3>
                                Formulário de contato
                                <div className="DivIconsMobile">
                                    <a href="https://contact-form-two-xi.vercel.app/">
                                        <GiMagnifyingGlass title='Acesse o site' />
                                    </a>
                                    <a href="https://github.com/HelcioAnicio/Contact_form">
                                        <FaGithub title='Acesse o GitHub' />
                                    </a>
                                </div>
                            </h3>
                            <p>
                                Este projeto é formulário de contato, um canal de comunicação que conecta clientes e a mim. 
                                Por meio dele, as pessoas disponibilizam seus dados, como primeiro nome, ultimo nome, e-mail e senha caso fosse necessario um login. 
                            </p>
                            <div className="Tech">
                                <FaReact className='react'/>
                                <TbBrandJavascript className='js'/>
                                <FaSass className='scss'/>
                                <FaHtml5 className='html'/>
                                <IoLogoFirebase className='firebase'/>
                                <IoLogoNodejs className='node'/>
                            </div>
                        </div>
                    </div>

                    <div className="Url">
                        <div className="DivImage">
                            <img src={MobileUrl} alt="Mobile" />
                            <div className="DivIconsDesktop">
                                <a href="https://url-shortener-seven-delta.vercel.app/">
                                    <GiMagnifyingGlass title='Acesse o site' />
                                </a>
                                <a href="https://github.com/HelcioAnicio/url-shortener">
                                    <FaGithub title='Acesse o GitHub' />
                                </a>
                            </div>
                        </div>
                        <div className="DivInformation">
                            <h3>
                                Encurtador de link
                                <div className="DivIconsMobile">
                                    <a href="https://url-shortener-seven-delta.vercel.app/">
                                        <GiMagnifyingGlass title='Acesse o site' />
                                    </a>
                                    <a href="https://github.com/HelcioAnicio/url-shortener">
                                        <FaGithub title='Acesse o GitHub' />
                                    </a>
                                </div>
                            </h3>
                            <p>
                                O Encurtador de URL é uma ferramenta grátis para encurtar links de redes sociais do Instagram,
                                Facebook, YouTube, Twitter, Linked In, Pinterest e sites com autoridade na Internet.
                            </p>
                            <div className="Tech">
                                <TbBrandJavascript className='js'/>
                                <FaHtml5 className='html'/>
                                <IoLogoCss3 className='css'/>
                            </div>
                        </div>
                    </div>

                    <div className="Calculator">
                        <div className="DivImage">
                            <img src={MobileCalculator} alt="Mobile" />
                            <div className="DivIconsDesktop">
                                <a href="https://calculator-helcioanicio.vercel.app/">
                                    <GiMagnifyingGlass title='Acesse o site' />
                                </a>
                                <a href="https://github.com/HelcioAnicio/calculator">
                                    <FaGithub title='Acesse o GitHub' />
                                </a>
                            </div>
                        </div>
                        <div className="DivInformation">
                            <h3>
                                Calculadora
                                <div className="DivIconsMobile">
                                    <a href="https://calculator-helcioanicio.vercel.app/">
                                        <GiMagnifyingGlass title='Acesse o site' />
                                    </a>
                                    <a href="https://github.com/HelcioAnicio/calculator">
                                        <FaGithub title='Acesse o GitHub' />
                                    </a>
                                </div>
                            </h3>
                            <p>
                                Nesse projeto você verá uma calculadora funcional, porém onde existe uma lógica desafiadora em JavaScript.
                            </p>
                            <div className="Tech">
                                <TbBrandJavascript className='js'/>
                                <FaHtml5 className='html'/>
                                <IoLogoCss3 className='css'/>
                            </div>
                        </div>
                    </div>

                    <div className="ToDoList">
                        <div className="DivImage">
                            <img src={MobileToDoList} alt="Mobile" />
                            <div className="DivIconsDesktop">
                                <a href="https://to-do-list-nine-kohl.vercel.app/">
                                    <GiMagnifyingGlass title='Acesse o site' />
                                </a>
                                <a href="https://github.com/HelcioAnicio/ToDoList">
                                    <FaGithub title='Acesse o GitHub' />
                                </a>
                            </div>
                        </div>
                        <div className="DivInformation">
                            <h3>
                                To Do List
                                <div className="DivIconsMobile">
                                    <a href="https://to-do-list-nine-kohl.vercel.app/">
                                        <GiMagnifyingGlass title='Acesse o site' />
                                    </a>
                                    <a href="https://github.com/HelcioAnicio/ToDoList">
                                        <FaGithub title='Acesse o GitHub' />
                                    </a>
                                </div>
                            </h3>
                            <p>
                                Uma lista de tarefas, onde pode adicionar, marcar como concluido e tambem excluir caso tenha feito algo que queria. E tambem um botão para alterar o tema de cores.
                            </p>
                            <div className="Tech">
                                <TbBrandJavascript className='js'/>
                                <FaHtml5 className='html'/>
                                <FaSass className='scss'/>
                                <IoLogoCss3 className='css'/>
                            </div>
                        </div>
                    </div>

                    <div className="Clock">
                        <div className="DivImage">
                            <img src={MobileClock} alt="Mobile" />
                            <div className="DivIconsDesktop">
                                <a href="https://clock-teal-mu.vercel.app/">
                                    <GiMagnifyingGlass title='Acesse o site' />
                                </a>
                                <a href="https://github.com/HelcioAnicio/Clock">
                                    <FaGithub title='Acesse o GitHub' />
                                </a>
                            </div>
                        </div>
                        <div className="DivInformation">
                            <h3>
                                Clock
                                <div className="DivIconsMobile">
                                    <a href="https://clock-teal-mu.vercel.app/">
                                        <GiMagnifyingGlass title='Acesse o site' />
                                    </a>
                                    <a href="https://github.com/HelcioAnicio/Clock">
                                        <FaGithub title='Acesse o GitHub' />
                                    </a>
                                </div>
                            </h3>
                            <p>
                                Um relógio digital, mostra as horas atualizadas a cada segundo.
                            </p>
                            <div className="Tech">
                                <TbBrandJavascript className='js'/>
                                <FaHtml5 className='html'/>
                                <FaSass className='scss'/>
                                <IoLogoCss3 className='css'/>
                            </div>
                        </div>
                    </div>

                    <div className="FAQ">
                        <div className="DivImage">
                            <img src={MobileFAQ} alt="Mobile" />
                            <div className="DivIconsDesktop">
                                <a href="https://faq-questions.vercel.app/">
                                    <GiMagnifyingGlass title='Acesse o site' />
                                </a>
                                <a href="https://github.com/HelcioAnicio/FAQ_Questions">
                                    <FaGithub title='Acesse o GitHub' />
                                </a>
                            </div>
                        </div>
                        <div className="DivInformation">
                            <h3>
                                FAQ (Perguntas frequentes)
                                <div className="DivIconsMobile">
                                    <a href="https://faq-questions.vercel.app/">
                                        <GiMagnifyingGlass title='Acesse o site' />
                                    </a>
                                    <a href="https://github.com/HelcioAnicio/FAQ_Questions">
                                        <FaGithub title='Acesse o GitHub' />
                                    </a>
                                </div>
                            </h3>
                            <p>
                                Frequently Asked Questions é um site onde você vai encontrar algumas perguntas e respostas mais frequentes realizadas sobre mim.
                            </p>
                            <div className="Tech">
                                <TbBrandJavascript className='js'/>
                                <FaHtml5 className='html'/>
                                <IoLogoCss3 className='css'/>
                            </div>
                        </div>
                    </div>

                    <div className="Rating">
                        <div className="DivImage">
                            <img src={MobileRating} alt="Mobile" />
                            <div className="DivIconsDesktop">
                                <a href="https://rating-feedback.vercel.app/">
                                    <GiMagnifyingGlass title='Acesse o site' />
                                </a>
                                <a href="https://github.com/HelcioAnicio/Rating_feedback">
                                    <FaGithub title='Acesse o GitHub' />
                                </a>
                            </div>
                        </div>
                        <div className="DivInformation">
                            <h3>
                                Serviço de avaliação
                                <div className="DivIconsMobile">
                                    <a href="https://rating-feedback.vercel.app/">
                                        <GiMagnifyingGlass title='Acesse o site' />
                                    </a>
                                    <a href="https://github.com/HelcioAnicio/Rating_feedback">
                                        <FaGithub title='Acesse o GitHub' />
                                    </a>
                                </div>
                            </h3>
                            <p>
                                Este site é uma página sobre feedback ao final de algum serviço ou atendimento. Ao final, vai aparecer uma tela com 5 números e a pessoa vai escolher a avaliação para o serviço ou atendimento …
                            </p>
                            <div className="Tech">
                                <TbBrandJavascript className='js'/>
                                <FaHtml5 className='html'/>
                                <IoLogoCss3 className='css'/>
                            </div>
                        </div>
                    </div>

                    <div className="QRCode">
                        <div className="DivImage">
                            <img src={MobileQRCode} alt="Mobile" />
                            <div className="DivIconsDesktop">
                                <a href="https://qr-code-kappa-blue.vercel.app/">
                                    <GiMagnifyingGlass title='Acesse o site' />
                                </a>
                                <a href="https://github.com/HelcioAnicio/QRCode">
                                    <FaGithub title='Acesse o GitHub' />
                                </a>
                            </div>
                        </div>
                        <div className="DivInformation">
                            <h3>
                                QR Code
                                <div className="DivIconsMobile">
                                    <a href="https://qr-code-kappa-blue.vercel.app/">
                                        <GiMagnifyingGlass title='Acesse o site' />
                                    </a>
                                    <a href="https://github.com/HelcioAnicio/QRCode">
                                        <FaGithub title='Acesse o GitHub' />
                                    </a>
                                </div>
                            </h3>
                            <p>
                                Nesta página você receberá um QR Code, que pode ser utilizado para o seu negócio ou qualquer outra coisa que você desejar. Como exemplo ao fazer a leitura será direcionado para o meu GitHub.                               
                            </p>
                            <div className="Tech">
                                <FaHtml5 className='html'/>
                                <IoLogoCss3 className='css'/>
                            </div>
                        </div>
                    </div>

                    <div className="Cars">
                        <div className="DivImage">
                            <img src={MobileCars} alt="Mobile" />
                            <div className="DivIconsDesktop">
                                <a href="https://product-informations.vercel.app/">
                                    <GiMagnifyingGlass title='Acesse o site' />
                                </a>
                                <a href="https://github.com/HelcioAnicio/Product_informations">
                                    <FaGithub title='Acesse o GitHub' />
                                </a>
                            </div>
                        </div>
                        <div className="DivInformation">
                            <h3>
                                Informações de produtos
                                <div className="DivIconsMobile">
                                    <a href="https://product-informations.vercel.app/">
                                        <GiMagnifyingGlass title='Acesse o site' />
                                    </a>
                                    <a href="https://github.com/HelcioAnicio/Product_informations">
                                        <FaGithub title='Acesse o GitHub' />
                                    </a>
                                </div>
                            </h3>
                            <p>
                                Este projeto é uma página com 3 colunas, informando sobre o assunto. No meu projeto, escrevi sobre modelos de 3 carros.
                            </p>
                            <div className="Tech">
                                <FaHtml5 className='html'/>
                                <IoLogoCss3 className='css'/>
                            </div>
                        </div>
                    </div>

                    <div className="SocialTree">
                        <div className="DivImage">
                            <img src={MobileSocialTree} alt="Mobile" />
                            <div className="DivIconsDesktop">
                                <a href="https://social-tree-beta.vercel.app/">
                                    <GiMagnifyingGlass title='Acesse o site' />
                                </a>
                                <a href="https://github.com/HelcioAnicio/Social_tree">
                                    <FaGithub title='Acesse o GitHub' />
                                </a>
                            </div>
                        </div>
                        <div className="DivInformation">
                            <h3>
                                SocialTree
                                <div className="DivIconsMobile">
                                    <a href="https://social-tree-beta.vercel.app/">
                                        <GiMagnifyingGlass title='Acesse o site' />
                                    </a>
                                    <a href="https://github.com/HelcioAnicio/Social_tree">
                                        <FaGithub title='Acesse o GitHub' />
                                    </a>
                                </div>
                            </h3>
                            <p>
                                O SocialTree é uma ferramenta que agrupa diversos links em apenas um. 
                                O serviço é muito utilizado em marketing e ajuda empresas e influenciadores que querem divulgar seus produtos e serviços online.
                            </p>
                            <div className="Tech">
                                <FaHtml5 className='html'/>
                                <IoLogoCss3 className='css'/>
                            </div>
                        </div>
                    </div>

                    <div className="Soon">
                        <div className="DivImage">
                            <AiOutlineLoading3Quarters className='Loading' />
                        </div>
                        <div className="DivInformation">
                            <h3>Em breve</h3>
                            {/* <p></p> */}
                            <div className="Tech">
                                <AiOutlineQuestionCircle  className='Question'/>
                                <AiOutlineQuestionCircle  className='Question'/>
                                <AiOutlineQuestionCircle  className='Question'/>
                            </div>
                        </div>
                    </div>
                

                </div>
            </section>

        </>
    )
}

export default Portfolio;
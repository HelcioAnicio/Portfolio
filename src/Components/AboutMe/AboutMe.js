import './AboutMe.modules.scss'


function AboutMe () {
    return (
        <>
            <section id='AboutMe' className='ContainerAbout'>
                <div className='DivText'>
                    <h2 className='About'> Sobre mim</h2>
                    <p className='Content'>
                        Olá! Meu nome é Helcio, apaixonado por criar experiências digitais incríveis. 
                        Acredito que, para criar interfaces de usuário incríveis, é necessário estar <span>sempre à frente do jogo</span>. 
                        É por isso que <span>me dedico a criar interfaces intuitivas e fáceis de usar</span>, que possam ser facilmente <span>adaptadas às necessidades específicas de cada cliente</span>.
                        <br /><br />
                        Se você estiver procurando por um desenvolvedor front-end altamente qualificado e motivado, <span>não hesite em entrar em contato comigo!</span> Estou animado para discutir como posso ajudar a sua empresa a ter sucesso no mundo digital.
                    </p>
                </div>
            </section>
           
        </>
    )
}

export default AboutMe;
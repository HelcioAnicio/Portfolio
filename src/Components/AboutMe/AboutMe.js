import './AboutMe.modules.scss'
// import '../Home/Home.modules.scss';

import Photo  from '../../assets/profile.png';



function AboutMe () {
    return (
        <>

            <section className='sectionContainer'>
                <h2>SOBRE MIM</h2>
                <div className='divFigure'>
                    <figure className='figure'>
                        <img src={Photo} alt="profile"/> 
                    </figure>
                </div>
                <div className="divText">
                    <h4>Olá! Meu nome é Helcio,</h4>
                    <p>apaixonado por criar experiências digitais incríveis. Acredito que, para criar interfaces de usuário, é necessário estar sempre à frente do jogo. É por isso que me dedico a criar interfaces intuitivas e fáceis de usar, que possam ser facilmente adaptadas às necessidades específicas de cada cliente.
                        Se você estiver procurando por um desenvolvedor para o seu negócio altamente qualificado e motivado, não hesite em entrar em contato comigo! Estou animado para discutir como ajudar a sua empresa a ter sucesso no mundo digital.
                    </p>
                </div>
            </section>


            <section id='Home' className="">
            </section>
        </>
    )
}

export default AboutMe;
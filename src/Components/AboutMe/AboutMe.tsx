import "./AboutMe.modules.scss";
// import '../Home/Home.modules.scss';

import Photo from "../../assets/profile.png";

function AboutMe() {
  const startYear = 2021;
  const timeWorking = new Date().getFullYear();
  const calcYears = timeWorking - startYear;

  return (
    <>
      <section
        className='sectionContainer'
        id='aboutMe'>
        <h2>SOBRE MIM</h2>
        <div className='divFigure'>
          <figure className='figure'>
            <img
              src={Photo}
              alt='profile'
            />
          </figure>
        </div>
        <div className='divText'>
          <h4>OLÁ! MEU NOME É HELCIO,</h4>
          <p>
            estou no mercado de desenvolvimento a mais de {calcYears} anos,
            super motivado em criar experiências digitais incríveis. Me dedico a
            criar interfaces intuitivas e fáceis de usar, que possam ser
            facilmente adaptadas às necessidades específicas de cada cliente.
            <br />
            <br />
            Se você estiver procurando por um desenvolvedor para o seu negócio
            altamente qualificado e motivado, não hesite em entrar em contato
            comigo, por qualquer uma das minhas redes socias ou preencha o
            formulário que entro em contato.
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutMe;

import "./Header.modules.scss";

function Header() {
  return (
    <>
      <header
        className='container'
        id='header'>
        <div className='divPurpleCode'></div>
        <div className='line'></div>
        <div className='divName'>
          <a href='https://google.com'>dev.helcio</a>
        </div>
        <div className='divText'>
          <h1>SEJA BEM VINDO!</h1>
          <div>
            <p>
              &lt;ao meu
              <br />
              portifólio&gt;
            </p>
            <h2>BEM VINDO!</h2>
          </div>
        </div>
        <nav>
          <a href='#aboutMe'>Sobre mim</a>
          <a href='#Tech'>Tecnologias</a>
          <a href='#Portfolio'>Portfolio</a>
          <a href='#Footer'>Fale comigo</a>
        </nav>
        <div className='divTechNetwork'></div>
      </header>
    </>
  );
}
export default Header;

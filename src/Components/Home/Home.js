import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Home.modules.scss';
import Photo  from '../../assets/profile.png';

function Home () {
    return (
        <>
            <section id='Home' className="ContainerText">
                <div className='BoxContent'>
                    <div className='Picture'>
                        <img src={Photo} alt="profile"/> 
                    </div>
                    <h1>Helcio Anicio</h1>
                    <p>Desenvolvedor Front-end</p>
                    <div className='DivIcons'>
                        <a href="https://wa.me/31991973835">
                        <FaWhatsapp/>
                        </a>
                        <a href="https://www.linkedin.com/in/helcio-anicio/">
                        <FaLinkedin/>
                        </a>
                        <a href="https://www.instagram.com/helcioanicio/">
                        <FaInstagram/>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;
import './Header.modules.scss';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Header () {
    return (
        <>
            <section className='ContainerHeader'>
                <div className='HeaderIcons'>
                    <FaWhatsapp/>
                    <FaLinkedin/>
                    <FaInstagram/>

                </div>
                <div className='MenuHamburger'>
                    <GiHamburgerMenu/>
                </div>
            </section>
        </>
    )

}

export default Header;
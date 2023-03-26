import './Header.modules.scss';
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiClose } from "react-icons/tfi";
import { useState, useEffect} from 'react';

function Header () {
	const [isOpen, setIsOpen] = useState(false)
	
	useEffect(() => {
		isOpen ? document.body.style.overflowY = 'hidden' :  document.body.style.overflowY = 'scroll'
	}, [isOpen])

    return (
        <>
            <nav id='ContainerHeader'>
                <div className='DivMenu'>
                    <button onClick={() => setIsOpen(true)}>
                        <GiHamburgerMenu className='Menu'/>
                    </button>
                </div>
                <ul id='DivPages'>
                    <li>
                        <a href="#Home">Home</a>    
                    </li>
                    <li>
                        <a href="#AboutMe">Sobre mim</a>
                    </li>
                    <li>
                        <a href="#Tech">Tecnologias</a>
                    </li>
                    <li>
                        <a href="#Portfolio">Portifolio</a>
                    </li>
                    <li>
                        <a href="#Footer">Fale comigo</a>
                    </li> 
                </ul>
            </nav>

            {isOpen && <MenuMobile setIsOpen={setIsOpen} />}
        
        </>
    )
}
export default Header;


function MenuMobile({setIsOpen}) {
    return (
    <nav className='MobileMenu'>
        <ul className='Menu'>
            <div>
                <button className='ButtonClose' onClick={() => setIsOpen(false)}>
                    <TfiClose/>
                </button>
            </div>
            <li onClick={() => setIsOpen(false)}>
                <a href="#Home">Home</a>
            </li>
            <li onClick={() => setIsOpen(false)}>
                <a href="#AboutMe">Sobre mim</a>
            </li>
            <li onClick={() => setIsOpen(false)}>
                <a href="#Tech">Tecnologias</a>
            </li>
            <li onClick={() => setIsOpen(false)}>
                <a href="#Portfolio">Portifólio</a>
            </li>
            <li onClick={() => setIsOpen(false)}>
                <a href="#Footer">Fale comigo</a>
            </li> 
        </ul>
    </nav> 
    )
}
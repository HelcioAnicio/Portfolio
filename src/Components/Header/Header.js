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
                    <li><a href="https://google.com">Home</a></li>
                    <li><a href="https://google.com">About Me</a></li>
                    <li><a href="#Tech">Technology</a></li>
                    <li><a href="https://google.com">Portfolio</a></li>
                    <li><a href="https://google.com">Talk to me</a></li> 
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
            <li><a href="https://google.com">Home</a></li>
            <li><a href="https://google.com">About Me</a></li>
            <li><a href="#Tech">Technology</a></li>
            <li><a href="https://google.com">Portfolio</a></li>
            <li><a href="https://google.com">Talk to me</a></li> 
        </ul>
    </nav> 
    )
}
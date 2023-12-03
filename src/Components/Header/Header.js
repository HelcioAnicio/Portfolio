import './Header.modules.scss';
// import { GiHamburgerMenu } from "react-icons/gi";
// import { TfiClose } from "react-icons/tfi";
// import { useState, useEffect} from 'react';
// import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;500&display=swap');
// import 'https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;500&display=swap'

function Header () {
	// const [isOpen, setIsOpen] = useState(false)
	
	// useEffect(() => {
	// 	isOpen ? document.body.style.overflowY = 'hidden' :  document.body.style.overflowY = 'scroll'
	// }, [isOpen])

    return (
        <>
            <header className='container' id='header'>
                <div className="divPurpleCode"></div>
                <div className="line"></div>
                <div className='divName'>
                    <a href="https://google.com">dev.helcio</a>
                </div>
                <div className='divText'>
                    <h1>SEJA BEM VINDO!</h1>
                    <div>
                        <p>&lt;ao meu<br />portifólio&gt;</p>
                        <h2>BEM VINDO!</h2>
                    </div>
                </div>
                <nav>
                    <a href="#aboutMe">Sobre mim</a>
                    <a href="#Tech">Tecnologias</a>
                    <a href="#Portfolio">Portfolio</a>
                    <a href="#Footer">Fale comigo</a>
                </nav>
                <div className='divTechNetwork'></div>
            </header>
        </>
    )
}
export default Header;


// function MenuMobile({setIsOpen}) {
//     return (
//         <nav className='MobileMenu'>
//             <ul className='Menu'>
//                 <div>
//                     <button className='ButtonClose' onClick={() => setIsOpen(false)}>
//                         <TfiClose/>
//                     </button>
//                 </div>
//                 <li onClick={() => setIsOpen(false)}>
//                     <a href="#Home">Home</a>
//                 </li>
//                 <li onClick={() => setIsOpen(false)}>
//                     <a href="#AboutMe">Sobre mim</a>
//                 </li>
//                 <li onClick={() => setIsOpen(false)}>
//                     <a href="#Tech">Tecnologias</a>
//                 </li>
//                 <li onClick={() => setIsOpen(false)}>
//                     <a href="#Portfolio">Portifólio</a>
//                 </li>
//                 <li onClick={() => setIsOpen(false)}>
//                     <a href="#Footer">Fale comigo</a>
//                 </li> 
//             </ul>
//         </nav> 
//     )
// }
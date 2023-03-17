import './Header.modules.scss';
import { GiHamburgerMenu } from "react-icons/gi";

const Menu = document.getElementsByClassName('Menu')

function ToggleMenu() {
    const Nav = document.getElementById('ContainerHeader')
    Nav.classList.toggle('active');
}

Menu.addEventListener('click',ToggleMenu)


function Header () {
    return (
        <>
            <nav id='ContainerHeader'>
                <div className='DivMenu'>
                    <GiHamburgerMenu className='Menu'/>
                </div>
                <ul id='DivPages'>
                    <li><a href="https://google.com">Home</a></li>
                    <li><a href="https://google.com">About Me</a></li>
                    <li><a href="https://google.com">Technology</a></li>
                    <li><a href="https://google.com">Portfolio</a></li>
                    <li><a href="https://google.com">Talk to me</a></li> 
                </ul>
            </nav>

            {/* <nav className='MobileMenu'>
                <ul className='Menu'>
                    <div>
                        <GiHamburgerMenu/>
                    </div>
                    <li><a href="https://google.com">Home</a></li>
                    <li><a href="https://google.com">About Me</a></li>
                    <li><a href="https://google.com">Technology</a></li>
                    <li><a href="https://google.com">Portfolio</a></li>
                    <li><a href="https://google.com">Talk to me</a></li> 

                </ul>
            </nav> */}

        </>
    )

}

export default Header;
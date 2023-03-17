import './Header.modules.scss';
import { GiHamburgerMenu } from "react-icons/gi";

function Header () {
    return (
        <>
            <nav className='ContainerHeader'>
                <div className='DivPages'>
                    <h3>Home</h3>
                    <h3>About me</h3>
                    <h3>Technology</h3>
                    <h3>Portfolio</h3>
                    <h3>Talk to me</h3>
                </div>
                <div className='MenuHamburger OpenMenu'>
                    <GiHamburgerMenu/>
                </div>
            </nav>
        </>
    )

}

export default Header;
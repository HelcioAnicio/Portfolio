import './Menu.modules.scss'
import { GiHamburgerMenu } from "react-icons/gi";


function Menu () {
    return (
        <>
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
        </>
    )
}

export default Menu;
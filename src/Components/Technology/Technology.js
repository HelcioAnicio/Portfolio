import './Technology.modules.scss';
import { FaReact, FaHtml5, FaSass } from 'react-icons/fa';
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoFirebase, IoLogoNodejs } from 'react-icons/io5'
import { SiTailwindcss } from 'react-icons/si'
import { BsGit } from 'react-icons/bs'
// import { IoLogoCss3 } from 'react-icons/io5'


function Technology () {
    return (
        <>
            <section id='Tech' className='SectionTech'>
                <h2>Tecnologias</h2>
                <div className='DivContainer'>

                    <div className="React">
                        <div>
                            <FaReact/>
                        </div>
                        <p>React.Js</p>
                    </div>
                    
                    <div className="Javascript">
                        <div>
                            <TbBrandJavascript/>
                        </div>
                        <p>JavaScript</p>
                    </div>
                    
                    <div className="Tailwind">
                        <div>
                            <SiTailwindcss/>
                        </div>
                        <p>Tailwind.Css</p>
                    </div>

                    <div className="Firebase">
                        <div>
                            <IoLogoFirebase/>
                        </div>
                        <p>Firebase</p>
                    </div>
                    
                    <div className="Node">
                        <div>
                            <IoLogoNodejs/>
                        </div>
                        <p>Node.Js</p>
                    </div>
                    

                    <div className="Scss">
                        <div>
                            <FaSass/>
                        </div>
                        <p>Sass</p>
                    </div>
                    
                    <div className="Html">
                        <div>
                            <FaHtml5/>
                        </div>
                        <p>Html5</p>
                    </div>
                    
                    <div className="Git">
                        <div>
                            <BsGit/>
                        </div>
                        <p>Git</p>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Technology;
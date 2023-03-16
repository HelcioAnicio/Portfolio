import './Technology.modules.scss';
import { FaReact } from 'react-icons/fa';
import { TbBrandJavascript } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";


function Technology () {
    return (
        <>
            <section className='SectionTech'>
                <div className='DivContainer'>
                    <div className="React">
                        <div>
                            <FaReact/>
                        </div>
                        <div>
                            <p>React.Js</p>
                        </div>
                    </div>
                    <div className="Javascript">
                        <div>
                            <TbBrandJavascript/>
                        </div>
                        <div>
                            <p>JavaScript</p>
                        </div>
                    </div>
                    <div className="Scss">
                        <div>
                            <FaSass/>
                        </div>
                        <div>
                            <p>Scss</p>
                        </div>
                    </div>
                    <div className="Html">
                        <div>
                            <FaHtml5/>
                        </div>
                        <div>
                            <p>Html5</p>
                        </div>
                    </div>
                    <div className="Css3">
                        <div>

                        </div>
                        <div>
                            <p>Css3</p>
                        </div>
                    </div>
                    <div className="Firebase">
                        <div>

                        </div>
                        <div>
                            <p>Firebase</p>
                        </div>
                    </div>

                </div>
            </section>
    </>
    )
}
export default Technology;
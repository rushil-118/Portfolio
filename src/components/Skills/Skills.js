import './Skills.css';
import Marquee from 'react-fast-marquee';

function Skills(){
    return(
        <div className="skills">
            <div>
                <h1>Skills</h1>
            </div>
            <Marquee pauseOnHover="true">
            
            <div className="skills-container">
                <div className="marquee">
                    <ul className="marquee-content">
                        <div className="marquee-item">
                            <img src="https://dev-portfolio-template.netlify.app/static/media/html.6a342d61.svg" alt="html-logo"></img>
                            <h3>HTML</h3>
                        </div>
                        <div className="marquee-item">
                            <img src="https://dev-portfolio-template.netlify.app/static/media/javascript.e9360603.svg" alt="javascript-logo"></img>
                            <h3>JAVASCRIPT</h3>
                        </div>
                        <div className="marquee-item">
                            <img src="https://dev-portfolio-template.netlify.app/static/media/css.43b6f4bd.svg" alt="css-logo"></img>
                            <h3>CSS</h3>
                        </div>
                        <div className="marquee-item">
                            <img src="https://dev-portfolio-template.netlify.app/static/media/react.2b6a0717.svg" alt="react-logo"></img>
                            <h3>REACT</h3>
                        </div>
                        {/* <div className="marquee-item">
                            <img src="" alt=""></img>
                            <h3></h3>
                        </div>
                        <div className="marquee-item">
                            <img src="" alt=""></img>
                            <h3></h3>
                        </div>
                        <div className="marquee-item">
                            <img src="" alt=""></img>
                            <h3></h3>
                        </div> */}
                    </ul>
                    <ul aria-hidden="true" className="marquee-content">
                        <div className="marquee-item">
                            <img src="https://dev-portfolio-template.netlify.app/static/media/html.6a342d61.svg" alt="html-logo"></img>
                            <h3>HTML</h3>
                        </div>
                        <div className="marquee-item">
                            <img src="https://dev-portfolio-template.netlify.app/static/media/javascript.e9360603.svg" alt="javascript-logo"></img>
                            <h3>HTML</h3>
                        </div>
                        <div className="marquee-item">
                            <img src="https://dev-portfolio-template.netlify.app/static/media/css.43b6f4bd.svg" alt="css-logo"></img>
                            <h3>HTML</h3>
                        </div>
                        <div className="marquee-item">
                            <img src="https://dev-portfolio-template.netlify.app/static/media/react.2b6a0717.svg" alt="react-logo"></img>
                            <h3>HTML</h3>
                        </div>
                        {/* <div className="marquee-item">
                            <img src="" alt=""></img>
                            <h3>HTML</h3>
                        </div>
                        <div className="marquee-item">
                            <img src="" alt=""></img>
                            <h3>HTML</h3>
                        </div>
                        <div className="marquee-item">
                            <img src="" alt=""></img>
                            <h3>HTML</h3>
                        </div> */}
                    </ul>
                </div>
            </div>
            </Marquee>
        </div>
    )
}
export default Skills;
import './About.css';
function About(){
    return(
        <div className="about">
            <div className='line'>
                <div className='circle'></div>
                <div className='circle'></div>
                <div id='line'></div>
            </div>
            <div className='about-body'>
                <div className='about-description'>
                    <h2>Who I am</h2>
                    <p>
                        My name's Rushil. I'm a Student at Scaler School of Technology, living in Bengaluru.
                        <br />
                        <br />
                        <br />
                        I've just started Web Development and I enjoy doing it coz it allows me
                        to build according to my imagination and it is fun to build new things. 

                    </p>
                </div>
                <div className='about-img'>
                    <img src='https://dev-portfolio-template.netlify.app/static/media/orangeTheme-girl.d0ad58be.svg'></img>
                </div>
            </div>
        </div>
    )
}
export default About;
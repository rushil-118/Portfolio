import './Education.css';

function Education(){
    return(
        <div className="education" id='Education'>
            <div className='education-description'>
                <h1>Education</h1>
                <div className='education-card'>
                    <div className='card-img'>
                        <img src='https://dev-portfolio-template.netlify.app/static/media/eduImgWhite.ae822784.svg'></img>
                    </div>
                    <div className='education-details'>
                        <h6>2016-2023</h6>
                        <h4>Higher Secondary Education</h4>
                        <h5>Narayana E-Techno School</h5>
                    </div>
                </div>
                <div className='education-card'>
                    <div className='card-img'>
                        <img src='https://dev-portfolio-template.netlify.app/static/media/eduImgWhite.ae822784.svg'></img>
                    </div>
                    <div className='education-details'>
                        <h6>2023-Present</h6>
                        <h4>Bachelor of Science</h4>
                        <h5>Scaler School of Technology</h5>
                    </div>
                </div>
            </div>
            <div className='education-img'>
                <img src='https://dev-portfolio-template.netlify.app/static/media/eduOrange.c61dcfc3.svg'></img>
            </div>
        </div>
    )
}
export default Education;
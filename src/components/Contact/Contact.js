import "./Contact.css";

function Contact(){
    return(
        <div className="contacts">
            <h1>Contacts</h1>
            <div className="contact-body">
                <div className="contact-form">
                    <form>
                        <div className="input">
                            <label>Name</label>
                            <input className="name" type="text" placeholder="Rushil Choudhary"></input>
                        </div>
                        <div className="input">
                            <label>Email</label>
                            <input type="email" placeholder="Rushil Choudhary"></input>
                        </div>
                        <div className="input">
                            <label>Message</label>
                            <textarea placeholder="Type your message..."></textarea>
                        </div>
                        <div className="submit-button">
                            <button>
                                Send
                                <div class="submit-icon">
                                    <svg viewBox="0 0 1024 1024"  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2-8.5 2.1-13.8 10.7-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-0.9 3.7-0.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 0.7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-0.8 4.2-2.6 5-5 1.4-4.2-0.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"></path></svg>
                                    
                                </div>
                            </button>
                            
                        </div>
                    </form>
                </div>
                <div className="contact-details">
                    <div>choudharyrushil118@gmail.com</div>
                    <div>+918660174808</div>
                    <div>Scaler School of Technology</div>
                </div>
            </div>
            <img src="https://dev-portfolio-template.netlify.app/static/media/contactsOrange.75754594.svg"></img>
        </div>
    )
}
export default Contact;
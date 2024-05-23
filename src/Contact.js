import "./Contact.css";

function Contact(){
    return(
        <div className="contacts">
            <h1>Contacts</h1>
            <div className="contact-body">
                <div className="contact-form">
                    <form>
                        <div>
                            <label>Name</label>
                            <input type="text" placeholder="Rushil Choudhary"></input>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder="Rushil Choudhary"></input>
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea placeholder="Type your message..."></textarea>
                        </div>
                        <div>
                            <button>Send</button>
                        </div>
                    </form>
                </div>
                <div className="contact-details">
                    <div>choudharyrushil118@gmail.com</div>
                    <div>+918660174808</div>
                    <div>Scaler School of Technology</div>
                </div>
            </div>
        </div>
    )
}
export default Contact;
import React, {useState} from "react";
import '/shreya/OneDrive/Desktop/Perminant/assignments-p/assignment-2/assignment-2/src/App.css';

function ContactForm(){
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[message, setMessage] = useState('')

    const handleReset= () => {
        setName('');
        setEmail('');
        setMessage('');
    }

    return(
        <div className="form-container">
            <h2> Info/Contact Form</h2>
            <form className="contact-form">
                <div className="form-group">
                    <label>Name:</label><br />
                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                <label>Email:</label><br />
                    <input 
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                <label>Message:</label><br />
                    <input 
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <br />
                <button type="button" onClick={handleReset}>
                    Clear
                </button>
            </form>

            <div className="preview-box">
                <h3>Privew:</h3>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Message:</strong> {message}</p>
            </div>
        </div>
    );
}

export default ContactForm;
import InputForm from './InputForm'// this allows the client to enter his/her details for short message 

function ContactForm() {//we have created a contact function
    return (
        <InputForm
            title="Contact our sales team"
            actionText="Send Message"
            handleSubmit={()=>{alert("Thank you for contacting us")}}
            >
                <div className="inputWrapper">
                    <label htmlFor="name">Your name</label>
                    <input 
                        id="name"
                        type="text"
                        name="name" />
                </div>
                <div className="inputWrapper">
                    <label htmlFor="email">Your email</label>
                    <input 
                        id="email"
                        type="email"
                        name="email" />
                </div>
                <div className="inputWrapper">
                    <label htmlFor="message">Enter message</label>
                    <textarea id="message" rows="5"></textarea>
                </div>
        </InputForm>
    );
}

export default ContactForm;
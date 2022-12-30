import InputForm from './InputForm';

function SignUpForm() {
    return (
        <InputForm
            title="Please sign up to receive updates on our products"
            actionText="Sign Up"
            handleSubmit={()=>{alert("Thank you for signing up")}}
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
        </InputForm>
    );
}

export default SignUpForm;
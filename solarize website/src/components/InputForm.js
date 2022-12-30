import './InputForm.css'

//handles common styling in forms
//requires the inputs and labels to be wrapped in a div with class inputWrapper
function InputForm(props) {
    return (
        <div className="inputForm">
            <h1>{props.title}</h1>
            <form
                onSubmit={props.handleSubmit}
            >
                
                {props.children}
                <button type="submit">{props.actionText}</button>              
                
            </form>
        </div>
    );
}

export default InputForm;
import { Link } from 'react-router-dom';

import './LinkButton.css'

// style a link as a button
function LinkButton(props) {
    return (
        <Link
            className="linkButton" 
            to={props.linkTo}
            >{props.linkTitle}</Link>
    );
}

export default LinkButton;
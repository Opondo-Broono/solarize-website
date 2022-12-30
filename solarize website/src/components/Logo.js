import { Link } from "react-router-dom";

import './Logo.css';

function Logo(props) {
    return (
        <div className="logo"
            style={props.style}>
            <Link                
                to="/home"
                className="fontSizeNavBar"
            >Greenergy</Link>
        </div>
    );
}

export default Logo;
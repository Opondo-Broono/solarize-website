import { Link } from 'react-router-dom';

import './Feature.css'

function Feature(props) {
    const feature = props.feature;

    return (
        <section className="feature">
            <img 
                src={feature.icon}
                alt={feature.title}/>
            <h2>{feature.title}</h2>
            <p>{feature.shortDescription}</p>
            <Link 
                to={{
                    pathname: `/feature/${feature.id}`
                }}
                >Learn more &gt;</Link>
        </section>
    );
}

export default Feature;

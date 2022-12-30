import LinkButton from './LinkButton';

import './MainContent.css'

function MainContent(props) {
    return (
        <main>
            <div className="col-text">
                <h1>{props.headlineText}</h1>
                <p>{props.descText}</p>
                <LinkButton
                    linkTo={props.linkTo}
                    linkTitle={props.linkTitle}
                 />
            </div>
        </main>
    );
}

export default MainContent;
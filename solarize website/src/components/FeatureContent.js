import Feature from './Feature'
import './FeatureContent.css'

function FeatureContent(props) {

    const allFeatures = props.featureData.map(feature => {
        return (
            <Feature
                key={feature.id}
                feature={feature}
                /> 
            )
        }
    );
    return (
        <div id="featureContent">
            <p id="title">Features <span>&darr;</span></p>
            <div className="allFeatures">
                {allFeatures}            
            </div>
        </div>
    );
}

export default FeatureContent;

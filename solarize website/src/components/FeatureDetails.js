import { useParams } from 'react-router-dom';
import './FeatureDetails.css'
import LinkButton from './LinkButton';
import Error from './Error';

function FeatureDetails(props) {

    const DetailsComponent = feature => {
        return (
            <div className="featureDetails">
                <div 
                    id="featureImageBackground"
                    style={{backgroundImage: "url(/"+feature.image+")"}}
                >
                </div>
                
                <div id="featureDetailsCol2">
                    <h1>{feature.title}</h1>
                    <p>{feature.longDescription}</p>
                    <LinkButton linkTo={"/contact-us"} linkTitle={"Contact Us"} />
                </div>
            </div>
        );        
    } 

    // render a feature based on the id url parameter
    // render Error component if no matching id is found in the FeatureData array
    function GetFeature() {
       const {id} = useParams();
       let foundFeature = props.featureData.find(feature => feature.id == id);
       
       return foundFeature !== undefined? DetailsComponent(foundFeature) : <Error />;
    }

    return (
        <div>
            {GetFeature()}
        </div>
    );
}

export default FeatureDetails;

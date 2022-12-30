import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import MainContent from './components/MainContent';
import FeatureContent from './components/FeatureContent';
import NavigationBar from './components/NavigationBar';
import FeatureDetails from './components/FeatureDetails';
import Error from './components/Error';

import FeatureData from './FeatureData';

import './App.css';
import LandingPage from './components/LandingPage';
import SignUpForm from './components/SignUpForm';
import ContactForm from './components/ContactForm';
import About from './components/About';

function App() {

  const homePageContent = (
    <>
      {/* hero section */}
      <MainContent
        headlineText="Power your home with clean energy"
        descText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
        sed diam nonumy eirmod tempor invidunt ut labore et dolore 
        magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
        et justo duo dolores et ea rebum."
        linkTo="/contact-us"
        linkTitle="Contact Us" />

        {/* features overview */}
        <FeatureContent featureData={FeatureData} />
    </>
  );

  return (
    <div className="App">
      <Router>
        {/* don't show the NavigationBar for the LandingPage */}
        <Switch>
          
          <Route exact path="/landing">
            <LandingPage />
          </Route>

          <Route>
            {/* show NavigationBar for all other routes */}
            <NavigationBar />
            <Switch>
              
              <Route exact path="/">

                {homePageContent}

              </Route>
              <Route exact path="/home">

                {homePageContent}
                
              </Route>
              <Route exact path="/feature/:id">
                <FeatureDetails featureData={FeatureData}/>
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/contact-us">
                <ContactForm />
              </Route>
              <Route exact path="/sign-up">
                <SignUpForm />
              </Route>
              <Route path="*">
                <Error />
              </Route>

            </Switch>

            </Route>

          </Switch>

      </Router>
    </div>
  );
}

export default App;

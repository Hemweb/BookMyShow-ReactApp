import './App.css';
import Header from './components/Header/Header';
import SliderImg from './components/SliderImg';
import CardSlider from './components/CardSlider';
import Premieres from './components/Premieres';
import Footer from './components/Footer';
// import AllMovies from './components/AllMovies';
import AllMoviesFetch from './components/AllMoviesFetch';
// import SingleMov from './components/SingleMov';
import SingleMovFetch from './components/SingleMovFetch';
import Registration from './components/registration';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header/>
          <Switch>

            <Route exact path="/">
              <SliderImg/>
              <CardSlider/>
              <Premieres/>
            </Route>

            <Route exact path="/movies">
              <AllMoviesFetch/>
            </Route>
            
            <Route exact path="/movies/:movid">
              <SingleMovFetch/>
            </Route>

            <Route exact path="/register">
              <Registration/>
            </Route>
            
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

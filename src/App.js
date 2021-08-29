import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Facts from './components/Facts';
import Hangman from './components/Hangman';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* Route to Homepage */}
        <Route exact path="/">
          <Hero appType=""
            headLine="Blahajax"
            description="Download the bella onoje’s food app now on"
            mainActionText="Games"
            extraActionText="Facts" />
        </Route>
        {/* Route to about page */}
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/facts">
          <Facts />
        </Route>
        <Route exact path="/game">
          <Hangman />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

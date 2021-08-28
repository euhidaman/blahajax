import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Hero appType=""
        headLine="Blahajax"
        description="Download the bella onoje’s food app now on"
        mainActionText="Games"
        extraActionText="Facts & Jokes" />
    </>
  );
}

export default App;

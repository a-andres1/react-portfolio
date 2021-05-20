// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import Intro from './components/Intro';
import Statement from './components/PersonalStatement';
import Quote from './components/Quote';
import background from './assets/images/background.jpg'

function App() {
  return (
    <>
      <div
        className="landing-wrapper"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <Header />
      <Intro />
      <Statement />
      <Project />
      <Quote />
      <Footer />
    </>
  );
}

export default App;

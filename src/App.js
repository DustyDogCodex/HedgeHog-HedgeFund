import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Showcase from './components/Showcase';
import NavbarComponent from './components/NavbarComponent';
import Newsletter from './components/Newsletter';
import Grid from './components/Grid';
import LearnMore from './components/LearnMore';
import FAQAccordion from './components/FAQAccordion';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Showcase />
      <Newsletter />
      <Grid />
      <LearnMore />
      <FAQAccordion />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Showcase from './components/Showcase';
import NavbarComponent from './components/NavbarComponent';
import Newsletter from './components/Newsletter';
import Grid from './components/Grid';
import LearnMore from './components/LearnMore';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Showcase />
      <Newsletter />
      <Grid />
      <LearnMore />
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Showcase from './components/Showcase';
import NavbarComponent from './components/NavbarComponent';
import Newsletter from './components/Newsletter';
import Grid from './components/Grid';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Showcase />
      <Newsletter />
      <Grid />
    </div>
  );
}

export default App;

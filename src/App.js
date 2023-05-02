import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Showcase from './components/Showcase';
import NavbarComponent from './components/NavbarComponent';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Showcase />
      <Newsletter />
    </div>
  );
}

export default App;

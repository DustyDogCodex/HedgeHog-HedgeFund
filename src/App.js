import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Showcase from './components/Showcase';
import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Showcase />
    </div>
  );
}

export default App;

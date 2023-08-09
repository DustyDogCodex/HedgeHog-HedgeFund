import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import NavbarComponent from './components/NavbarComponent'
import Newsletter from './components/Newsletter'
import TraderCards from './components/TraderCards'
import LearnMore from './components/LearnMore'
import FAQAccordion from './components/FAQAccordion'
import News from './components/News'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <div className="App">
            <NavbarComponent />
            <Home />
            <Newsletter />
            <TraderCards />
            <LearnMore />
            <FAQAccordion />
            <News />
            <Contact />
            <Footer />
        </div>
    )
}

export default App

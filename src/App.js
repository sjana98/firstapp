import './App.css';
import Navbar from './components/1_Navbar/Navbar';
import Home from './components/2_Home/Home';
import About from './components/3_About/About';
import Services from './components/4_Services/Services';
import Blog from './components/5_Blog/Blog';
import Contact from './components/6_Contact Us/Contact';
import Footer from './components/7_Footer/Footer';

function App() {
  return (
    <div className='App'>

      {/* {All Components} */}
      <Navbar />
      <Home />
      <About />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';

import Skills from './Components/Skills/Skills';
import Work from './Components/Work/Work';



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home />
      <About />

      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

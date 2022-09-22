
import About from './Components/About/About';
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
    </div>
  );
}

export default App;

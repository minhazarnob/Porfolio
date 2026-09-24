
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import TechSkills from './components/sections/TechSkills';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Contacts from './components/sections/Contacts';
import Footer from './components/sections/Footer';


function App() {

  return (

    <div className="min-h-screen bg-black">
      <header>
          <Navbar/>
      </header>
      
      <main>
        <HeroSection/>
        <AboutSection/>
        <TechSkills/>
        <Projects/>
        <Services/>
        <Contacts/>
      </main>

      <footer>
        <Footer/>
      </footer>

    </div>
  );
};

export default App;

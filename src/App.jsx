import { BrowserRouter } from "react-router-dom";

import { About, Skills, Contact, Experience, Hero, Navbar, Tech, Projects, Designs, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Skills />
        <Tech />
        <Experience />
        {/* <Projects /> */}
        <div className='relative z-0'>
        <Projects />
          {/* <Designs /> */}

          {/* <Contact /> */}
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
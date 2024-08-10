import React from 'react';
import Home from './pages/home/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import BackToTopBtn from './components/BackToTopBtn';
import About from './pages/about/About';
import Gallery from './pages/gallery/Gallery';
import Directors from './pages/directors/Directors';
import Contact from './pages/contact/Contact';

function App() {
 
  const location = useLocation()

  React.useEffect( () => {
     window.scroll({ top: 0, behavior: 'auto', left: 0 })
  }, [location.pathname] )

  return (
    <React.Fragment>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/about" element={ <About /> } />
      {/*
        Reserved for the future
        <Route path="/gallery" element={ <Gallery /> } />
        */}
      <Route path="/members" element={ <Directors /> } />
      <Route path="/contact" element={ <Contact /> } />
    </Routes>
    <BackToTopBtn />
  </React.Fragment>
  );
}

export default App;

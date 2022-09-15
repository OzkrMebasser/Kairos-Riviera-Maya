import React from 'react';
import About from './components/About';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
// import ContactUs from './components/ContactUs';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      
      <Cards />
      
      {/* <ContactUs /> */}
      <Footer />
    </div>
  );
}

export default App;

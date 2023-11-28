import './Styles/App.scss';
import Header from './Components/Header/Header'
// import Home from './Components/Home/Home';
import AboutMe from './Components/AboutMe/AboutMe';
import Portfolio from './Components/Portfolio/Portfolio';
import Technology from './Components/Technology/Technology';
import Footer from './Components/Footer/Footer';
// import { useState } from 'react';

function App() {
  return (
    <>
        <Header/>
        <div className="ContainerDesktop">
          <AboutMe/> 
        </div>  
        <Technology/>
        <Portfolio/>
        <Footer/>
    </>
  );
}

export default App;

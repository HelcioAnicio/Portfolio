import './Styles/App.scss';
// import './Components/Header/Header'
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import Portfolio from './Components/Portfolio/Portfolio';
import Technology from './Components/Technology/Technology';
import Footer from './Components/Footer/Footer';
// import { useState } from 'react';

function App() {
  return (
    <>
      <Menu/>
      <Home/>
      <Technology/>
      <Footer/>


      <Portfolio/>
    </>
  );
}

export default App;

import "./Styles/App.scss";
import Header from "./Components/Header/Header";
import AboutMe from "./Components/AboutMe/AboutMe";
import Portfolio from "./Components/Portfolio/Portfolio";
import Technology from "./Components/Technology/Technology";
import Footer from "./Components/Footer/Footer";

function App() {
  console.log("App renderizado");
  return (
    <>
      <Header />
      <div className='ContainerDesktop'>
        <AboutMe />
      </div>
      <Technology />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
import About from "./Components/About/About";
import Auction from "./Components/Auction/Auction";
import Creators from "./Components/Creators/Creators";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Roadmap from "./Components/Roadmap/Roadmap";
import Writers from "./Components/Writers/writers";

function App() {
  return (
    <div className="App c-wrapper d-col">
      <div className="container">
        <Header />
        <Hero />
      </div>
      <About />
      <div className="container">
        <Auction />
        <Roadmap />
        <Writers />
        <Creators />
      </div>
      <Footer />
    </div>
  );
}

export default App;

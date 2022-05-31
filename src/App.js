import "./App.css";
import Experiencia from "./componentes/Experiencia";
import NavBar from "./componentes/NavBar";
import SobreMi from "./componentes/SobreMi";
import Main from "./componentes/Main";
import Contacto from "./componentes/Contacto";
import Cv from "./componentes/Cv";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Script from "./componentes/Script";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar></NavBar>
          <Header></Header>
          <Routes>
            <Route exact path="/" element={<Main />}></Route>
            <Route exact path="/sobreMi" element={<SobreMi />}></Route>
            <Route exact path="/experiencia" element={<Experiencia />}></Route>
            <Route exact path="/contacto" element={<Contacto />}></Route>
            <Route exact path="/cv" element={<Cv />}></Route>
          </Routes>
          <Script></Script>
          <Footer></Footer>
        </Router>
      </header>
    </div>
  );
}

//  App;

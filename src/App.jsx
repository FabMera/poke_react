import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Personajes from "./Components/Personajes";
import Pokemones from "./Components/Pokemones";



function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pokemones" element={<Pokemones />} />
          <Route path="/Pokemones/:nombre" element={<Personajes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

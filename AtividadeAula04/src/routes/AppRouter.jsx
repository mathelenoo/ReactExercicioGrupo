import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Buscar from "../pages/Buscar";
import Carros from "../pages/Carros";
import Cores from "../pages/Cores";
import Formulario from "../pages/Formulario";


function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="/carros" element={<Carros />} />
        <Route path="/cores" element={<Cores />} />
        <Route path="/formulario" element={<Formulario />} />
    </Routes>

  )
}

export default AppRouter
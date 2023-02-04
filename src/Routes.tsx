import Header from "components/Header";
import CadastrarCarro from "pages/CadastrarCarro";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/home" element={<Home />}/>
        <Route path="/cadastrar_carro" element={<CadastrarCarro />}/>
      </Routes>
    </BrowserRouter>
  );
}
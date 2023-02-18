import ButtonLogout from "components/ButtonLogout";
import Header from "components/Header";
import { AuthProvider } from "contexts/auth/AuthProvider";
import CadastrarCarro from "pages/CadastrarCarro";
import Home from "pages/Home";
import Login from "pages/Login";
import RegistrarEntrada from "pages/RegistrarEntrada";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Rotas() {
  

  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/signin" element={<Login />}/>  
          <Route path="/" element={<Home />}/>               
          <Route path="/cadastrar_carro" element={<CadastrarCarro />}/>
          <Route path="/registrar_entrada" element={<RegistrarEntrada />}/>
        </Routes>
        <ButtonLogout />
      </BrowserRouter>
    </AuthProvider>
  );
}
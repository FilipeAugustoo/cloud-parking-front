import ButtonLogout from "components/ButtonLogout";
import Header from "components/Header";
import { AuthProvider } from "contexts/auth/AuthProvider";
import { RequireAuth } from "contexts/auth/RequireAuth";
import CadastrarCarro from "pages/CadastrarCarro";
import Home from "pages/Home";
import ListaDeCarros from "pages/ListaDeCarros";
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
          <Route path="/" element={<RequireAuth><Home /></RequireAuth >}/>               
          <Route path="/cadastrar_carro" element={<RequireAuth ><CadastrarCarro /></RequireAuth>}/>
          <Route path="/registrar_entrada" element={<RequireAuth ><RegistrarEntrada /></RequireAuth>}/>
          <Route path="/lista_carros" element={<RequireAuth ><ListaDeCarros /></RequireAuth>}/>
        </Routes>
        <ButtonLogout />
      </BrowserRouter>
    </AuthProvider>
  );
}
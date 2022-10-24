import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import * as C from "./style";

const Home = () => {
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.H3>Usuário logado:</C.H3>
      <Button Text="Voltar" onClick={() => navigate("/")} />
      <Button Text="Ver filmes" onClick={() => navigate("/characters")} />
    </C.Container>
  );
};

export default Home;

import React, { useState } from "react";
import * as C from "./style";
import Input from "../../components/Input";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const Signin = () => {
  const { signin } = useAuth(),
    navigate = useNavigate(),
    [email, setEmail] = useState(""),
    [senha, setSenha] = useState(""),
    [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <>
      <C.Container>
        <C.Content>
          <C.Label>Login</C.Label>
          <Input
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <Input
            type="password"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
          <C.LabelError>{error}</C.LabelError>
          <Button Text="Entrar" onClick={handleLogin} />
          <C.LabelSignup>
            Não tem uma conta?
            <C.Strong>
              <Link to="/signup"> Criar conta</Link>
            </C.Strong>
          </C.LabelSignup>
        </C.Content>
      </C.Container>
    </>
  );
};

export default Signin;

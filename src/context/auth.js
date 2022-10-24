import { createContext, useEffect, useState } from "react";
import { useData } from "../hooks/useAuth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const userStorage = localStorage.getItem("user_bd");

    if (userToken && userStorage) {
      const hasUser = JSON.parse(userStorage)?.filter(
        (user) => user.email === JSON.parse(userToken).email
      );

      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

  const signin = (email, password) => {
    const userStorage = JSON.parse(localStorage.getItem("user_bd")),
      hasUser = userStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ email, token }));
        setUser({ email, password });
        return;
      } else return "E-mail ou senha incorretos";
    } else return "Usuário não cadastrado";
  };

  const signup = (email, password) => {
    const userStorage = JSON.parse(localStorage.getItem("user_bd"));

    const hasUser = userStorage?.filter((user) => user.email === email);

    if (hasUser?.length) return "Já tem uma conta com esse E-mail";

    let newUser;

    if (userStorage) newUser = [...userStorage, { email, password }];
    else newUser = [{ email, password }];

    localStorage.setItem("user_bd", JSON.stringify(newUser));

    return;
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  const useData = (email) => {
    const userStorage = JSON.parse(localStorage.getItem("user_bd"));

    const hasUser = userStorage?.filter((user) => user.email === email);
    console.log(hasUser[0].email);
    return hasUser[0].email;
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

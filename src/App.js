import React, { useEffect } from "react";
import { AuthProvider } from "./context/auth";
import RoutesApp from "./routes/RoutesApp";
import { GlobalStyled } from "./styles/styleGlobal";
import Characters from "./pages/Characters";

const App = () => {
  return (
    <>
      <AuthProvider>
        <RoutesApp />
        <GlobalStyled />
      </AuthProvider>
    </>
  );
};

export default App;

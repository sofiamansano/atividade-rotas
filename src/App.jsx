import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import SalaRotacao from "./pages/SalaRotacao/SalaRotacao";
import Contatos from "./pages/Contatos/Contatos";

function App() {
  return (
    <BrowserRouter>

      {/* Cabeçalho */}
      <Header />

      {/* Rotas */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/sala-rotacao"
          element={<SalaRotacao />}
        />

        <Route
          path="/contatos"
          element={<Contatos />}
        />
      </Routes>

      {/* Rodapé */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;
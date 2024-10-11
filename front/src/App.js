import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TelaJogo from './components/TelaJogo';  // Importa a TelaJogo
import TelaReview from './components/TelaReview';  // Importa a TelaReview

function App() {
  return (
    <Router>
      {/* Navegação */}
      <nav>
        <Link to="/jogo">Tela Jogo</Link> | 
        <Link to="/review">Tela Review</Link>
      </nav>
      {/* Rotas */}
      <Routes>
        <Route path="/jogo" element={<TelaJogo />} />  {/* Rota para TelaJogo */}
        <Route path="/review" element={<TelaReview />} />  {/* Rota para TelaReview */}
      </Routes>
    </Router>
  );
}

export default App;




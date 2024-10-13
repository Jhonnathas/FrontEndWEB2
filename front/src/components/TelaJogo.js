import React from 'react';
import { useNavigate } from 'react-router-dom';  //depois
import './TelaJogo.css'; 
import TelaJogoImg from '../static/TelaJogo.jpg';
import JogoLUta from '../static/JogoLuta.webp';


const reviews = [
  { user: 'Jhonnathas', rating: 5, comment: 'Ótimo jogo, gráficos incríveis!' },
  { user: 'Maria', rating: 6, comment: 'Experiência imersiva, adorei!' },
  { user: 'Lucas', rating: 3, comment: 'Bom, mas poderia ser mais desafiador.' },
];

const TelaJogo = () => {
  const navigate = useNavigate();  // Hook para navegar entre rotas  depois

  const handleReviewClick = (review) => {
    // Redireciona para a TelaReview passando os dados do review
    navigate('/review', { state: { review } });
  }; //depois

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="menu-icons">
          <span className="icon"></span>
          <span className="icon"></span>
          <span className="icon"></span>
        </div>
        <div className="profile-icons">
          <span className="profile-icon"></span>
        </div>
      </header>

      {/* Main content */}
      <main>
        {/* Principal game display */}
        <section className="main-game">
          <div className="game-image">
          <img src={TelaJogoImg} alt="AirCombat" />
          </div>
          <div className="game-info">
            <h2>AirCombat</h2>
            <div className="ratings">
              <span>★★★★★☆</span>
            </div>
            <p>Steam, Xbox, Playstation</p>
            <p>Simulação, Ação</p>
          </div>
        </section>


        <section className="recommended">
          <div className="recommended-item">
            <h4>Informações</h4>
            <p>Jogo de Ação e Aventura. Simulador de batalha de aviões</p>
            <div className="ratings">★★★★★☆</div>
          </div>
          </section>
        
           {/* Avaliações de Usuários */}
        <section className="user-reviews">
          <h3>Avaliações de Usuários</h3>
          <div className="reviews-container">
            {reviews.map((review, index) => (
              <div key={index} className="review-card" onClick={() => handleReviewClick(review)}>
                <h4>{review.user}</h4>
                <div className="ratings">
                  {'★'.repeat(review.rating)}{'☆'.repeat(6 - review.rating)}
                </div>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default TelaJogo;

//depois de section classname="recommended" estava o codigo que está no bloco de notas
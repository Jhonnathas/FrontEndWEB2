import React from 'react';
import './TelaJogo.css'; // Aqui estamos importando o CSS para estilização
import TelaJogoImg from '../static/TelaJogo.jpg';
import JogoLUta from '../static/JogoLuta.webp';


const reviews = [
  { user: 'JHonnathas', rating: 4, comment: 'Ótimo jogo, gráficos incríveis!' },
  { user: 'Maria', rating: 5, comment: 'Experiência imersiva, adorei!' },
  { user: 'Lucas', rating: 3, comment: 'Bom, mas poderia ser mais desafiador.' },
];

const TelaJogo = () => {
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
          
          <section className="Jogos">
          <div className="game-recomendado">
          <img src={JogoLUta} alt="Fight Evolution" />
          </div>
          <div>
            <h4>Fight Evolution</h4>
            <h4>★★★★☆☆</h4>
          </div>
        </section>

        <section className="user-reviews">
          <h3>Avaliações de Usuários</h3>
          <div className="reviews-container">
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <h4>{review.user}</h4>
                <div className="ratings">
                  {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
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


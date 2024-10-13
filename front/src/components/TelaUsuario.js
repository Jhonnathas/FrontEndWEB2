import React from 'react';
import './TelaUsuario.css';
import Avatar from '../static/avatar.jpg';  // Imagem padrão de avatar

// Dados fictícios do usuário e suas reviews
const userData = {
  user: 'Jhonnathas',
  avatar: Avatar,  // Aqui você pode trocar pela URL de um avatar real
  reviews: [
    { game: 'AirCombat', rating: 4, comment: 'Ótimo jogo, gráficos incríveis!', date: '12/03/2024' },
    { game: 'Fight Evolution', rating: 5, comment: 'Luta incrível, recomendo muito!', date: '15/03/2024' },
  ],
};

const TelaUsuario = () => {
  return (
    <div className="container">
      {/* Informações do usuário */}
      <section className="user-info">
        <img src={userData.avatar} alt="User Avatar" className="avatar" />
        <h2>{userData.user}</h2>
      </section>

      {/* Histórico de reviews */}
      <section className="user-reviews">
        <h3>Histórico de Avaliações</h3>
        <div className="reviews-container">
          {userData.reviews.map((review, index) => (
            <div key={index} className="review-card">
              <h4>{review.game}</h4>
              <div className="ratings">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </div>
              <p>{review.comment}</p>
              <p className="review-date">{review.date}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TelaUsuario;

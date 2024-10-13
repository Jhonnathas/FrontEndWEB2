import React from 'react';
import { useLocation } from 'react-router-dom'; //depois
import './TelaReview.css';
import Avatar from '../static/avatar.jpg'; // Imagem padrão de avatar

// Dados fictícios
/*const mainReview = {
  user: 'Jhonnathas',
  title: 'Ótimo jogo!',
  rating: 5,
  comment: 'O jogo é ótimo e muito divertido, com gráficos incríveis! Vale muito a pena jogar.',
  date: '12/03/2024',
};

const userComments = [
  {
    user: 'Maria',
    comment: 'Concordo, o jogo tem gráficos incríveis!',
    date: '13/03/2024',
  },
  {
    user: 'Lucas',
    comment: 'Achei o jogo bom, mas faltou um pouco de desafio.',
    date: '14/03/2024',
  },
  {
    user: 'Pedro',
    comment: 'Eu também adorei, um dos melhores simuladores de avião!',
    date: '15/03/2024',
  },
];*/

const TelaReview = () => {
  const location = useLocation();  // Pega os dados passados via navegação   depois
  const { review } = location.state || {};  // Desestrutura os dados do review   depoi

  if (!review) {
    return <p>Nenhuma review foi selecionada.</p>; // Caso não tenha review   depois
  } //depois
  
  return (
    <div className="container">
      {/* Review principal  o codigo antigo está no bloco de notas*/}
      <section className="main-review">
        <div className="user-info">
          <img src={Avatar} alt="User Avatar" className="avatar" />
          <div className="user-details">
            <h4>{review.user}</h4>
            <p className="review-date">{new Date().toLocaleDateString()}</p>
          </div>
        </div>
        <div className="review-content">
          <h5>Review do jogo</h5>
          <div className="ratings">
            {'★'.repeat(review.rating)}{'☆'.repeat(6 - review.rating)}
          </div>
          <p>{review.comment}</p>
        </div>
      </section> 

      {/* Comentários dos outros usuários, inicialmente tirado }
      <section className="user-comments">
        <h3>Comentários</h3>
        <div className="comments-container">
          {userComments.map((comment, index) => (
            <div key={index} className="comment-card">
              <div className="comment-user-info">
                <h4>{comment.user}</h4>
                <p className="comment-date">{comment.date}</p>
              </div>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default TelaReview;

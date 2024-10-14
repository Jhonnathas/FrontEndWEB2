import React from 'react';
import { useLocation } from 'react-router-dom'; 
import './TelaReview.css';
import Avatar from '../static/avatar.jpg'; // Imagem padrão de avatar

const TelaReview = () => {
  const location = useLocation();  // Pega os dados passados via navegação   depois
  const { review } = location.state || {};  // Desestrutura os dados do review  

  if (!review) {
    return <p>Nenhuma review foi selecionada.</p>; // Caso não tenha review 
  } 
  
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
    </div>
  );
};

export default TelaReview;
import React from 'react';
import miImagen from "../img/yoXd.jpg"; // Importa la 


function BasicCard({ title, description }) {
  return (
    <div id="basic-card" className="card">
      <img src={miImagen} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default BasicCard;
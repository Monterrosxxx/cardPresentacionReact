import React from 'react';
import javaScriptImage from "../img/javaScript.jpg"; // Importa la imagen

function ButtonCard({ title, description, buttonLabel, buttonLink }) {
  return (
    <div id="button-card" className="card">
      <img src={javaScriptImage} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={buttonLink} className="btn btn-primary">{buttonLabel}</a>
      </div>
    </div>
  );
}

export default ButtonCard;
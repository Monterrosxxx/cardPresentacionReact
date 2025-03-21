import React from 'react';

function ButtonCard({ imageUrl, title, description, buttonLabel, buttonLink }) {
  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={buttonLink} className="btn btn-primary">{buttonLabel}</a>
      </div>
    </div>
  );
}

export default ButtonCard;
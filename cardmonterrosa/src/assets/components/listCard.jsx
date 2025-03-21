import React from 'react';

function ListCard({ title, items }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <ul className="list-group list-group-flush">
          {items.map((item, index) => (
            <li className="list-group-item" key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListCard;
import React from 'react';

interface CardProps {
  name: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ name, price }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{price}</p>
      <button>Buy</button>
    </div>
  );
};

export default Card;

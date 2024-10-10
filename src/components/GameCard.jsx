import React from 'react';

const GameCard = ({ game }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center text-white">
      <img src={game.image} alt={game.name} className="w-20 h-20 rounded-full mb-4" />
      <h3 className="text-lg font-semibold">{game.name}</h3>
      <p className="text-sm text-gray-400">{game.publisher}</p>
      <p className="text-sm text-yellow-400">Rating: {game.rating}</p>
    </div>
  );
};

export default GameCard;

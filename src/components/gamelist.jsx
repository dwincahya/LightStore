import React, { useState } from 'react';
import games from '../data/gamesData'; 

const GameItem = ({ game }) => {
  return (
    <div className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg group">
      <div className="overflow-hidden">
        <img
          src={game.image}
          alt={game.name}
          className="w-full h-32 md:h-72 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:opacity-60"
        />
      </div>

      <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-700 transition-all duration-300 ease-in-out"></div>

      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-1 md:p-2 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
        <h3 className="text-xs md:text-sm font-bold">{game.name}</h3>
        <p className="text-xs">{game.publisher}</p>
      </div>
    </div>
  );
};

const GameList = () => {
  const [visibleCount, setVisibleCount] = useState(10);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 10, games.length));
  };

  return (
    <div className="container mx-auto px-6 md:px-10 py-6 md:py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4">
        {games.slice(0, visibleCount).map((game, index) => (
          <GameItem key={index} game={game} />
        ))}
      </div>

      {visibleCount < games.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleShowMore}
            className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Tampilkan Lainnya
          </button>
        </div>
      )}
    </div>
  );
};

export default GameList;

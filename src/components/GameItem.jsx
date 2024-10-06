import React, { useState } from 'react';

const GameItem = ({ game }) => {
  const [isPressed, setIsPressed] = useState(false); 

  return (
    <div 
      className={`relative cursor-pointer overflow-hidden rounded-lg shadow-lg group ${isPressed ? 'scale-95' : ''}`} 
      onMouseDown={() => setIsPressed(true)} 
      onMouseUp={() => setIsPressed(false)} 
      onTouchStart={() => setIsPressed(true)} 
      onTouchEnd={() => setIsPressed(false)}
    >
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

export default GameItem;

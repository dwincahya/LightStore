import React from 'react';

import img1 from '../assets/img/miya.jpg';
import img2 from '../assets/img/raiden.jpg';
import img3 from '../assets/img/firefly2.jpg';
import img4 from '../assets/img/jinshi.jpg';

const games = [
  { name: 'Mobile Legends', publisher: 'Moonton', image: img1 },
  { name: 'Genshin Impact', publisher: 'miHoYo', image: img2 },
  { name: 'Free Fire', publisher: 'Garena', image: img3 },
  { name: 'Honor of Kings', publisher: 'Tencent', image: img4 },
  { name: 'Mobile Legends', publisher: 'Moonton', image: img2 },
];

const GameList = () => {
  return (
    <div className="container mx-auto px-6 md:px-10 py-6 md:py-10"> {/* Reduced padding for a cleaner look */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4"> {/* Reduced gap for a tighter grid */}
        {games.map((game, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg group"
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
        ))}
      </div>
    </div>
  );
};

export default GameList;

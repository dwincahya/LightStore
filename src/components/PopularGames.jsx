import React, { useState } from 'react';
import games from '../data/gamesData'; // Pastikan path ini benar
import 'tailwindcss/tailwind.css'; // Pastikan Tailwind CSS diimpor
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const PopularGames = () => {
  const navigate = useNavigate();
  const [activeGame, setActiveGame] = useState(null); // State untuk menyimpan game yang sedang aktif

  // Filter games yang memiliki kategori 'Populer'
  const popularGames = games.filter(game => game.categories.includes('Populer'));

  const handleClick = (gameId) => {
    navigate(`/game/${gameId}`); // Mengarahkan ke detail game
  };

  return (
    <div className="py-6 px-4 md:px-20 bg-gray-900"> {/* Menambah latar belakang */}
      <h2 className="text-lg sm:text-xl md:text-2xl text-white font-bold text-left mb-1">🔥 SEDANG POPULER!</h2>
      <p className="text-xs sm:text-sm md:text-base text-white font-semibold mb-3">Berikut adalah beberapa produk yang paling populer saat ini.</p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4"> {/* Menggunakan grid */}
        {popularGames.map(game => (
          <div 
            key={game.id} 
            className={`flex items-center cursor-pointer overflow-hidden rounded-lg shadow-lg group bg-gray-800 p-3 
              ${activeGame === game.id ? 'border-4 border-blue-700' : 'border-4 border-transparent'}
              transition-all duration-300`} 
            onClick={() => handleClick(game.id)} 
            onMouseEnter={() => setActiveGame(game.id)} 
            onMouseLeave={() => setActiveGame(null)} 
          >
            <div className="flex-shrink-0">
              <img
                src={game.image}
                alt={game.name}
                className="w-16 h-16 object-cover rounded-lg" // Gambar persegi dengan sudut yang tidak lancip
              />
            </div>
            <div className="ml-3"> {/* Mengurangi margin kiri untuk ruang yang lebih baik */}
              <h3 className="text-xs sm:text-sm md:text-lg font-semibold text-white mb-1">{game.name}</h3>
              <p className="text-xs font-semibold text-gray-400">{game.publisher}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularGames;

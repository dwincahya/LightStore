import React, { useState } from 'react';
import games from '../data/gamesData';  // Data game dari file lokal
import GameItem from './GameItem';      // Setiap item game

const GameList = ({ selectedFilter }) => {
  const [visibleCount, setVisibleCount] = useState(10);  // Menentukan jumlah game yang ditampilkan

  // Filter game berdasarkan kategori yang dipilih
  const filteredGames = selectedFilter 
    ? games.filter(game => game.categories.includes(selectedFilter)) 
    : games;

  // Fungsi untuk menambah jumlah game yang ditampilkan
  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 10, filteredGames.length));
  };

  return (
    <div className="container mx-auto px-6 md:px-10 py-6 md:py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4">
        {filteredGames.slice(0, visibleCount).map((game, index) => (
          <GameItem key={index} game={game} />
        ))}
      </div>

      {visibleCount < filteredGames.length && (
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

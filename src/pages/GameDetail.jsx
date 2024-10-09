// src/pages/GameDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import games from '../data/gamesData';

const GameDetail = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const game = games.find((g) => g.id === parseInt(id)); // Cari game berdasarkan ID

  if (!game) {
    return <div>Game tidak ditemukan!</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img src={game.image} alt={game.name} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-2">{game.name}</h1>
          <h2 className="text-xl text-gray-600 mb-4">{game.publisher}</h2>
          <p className="text-gray-800 mb-4">
            {/* Tambahkan deskripsi game di sini jika ada */}
            Game ini adalah tentang petualangan dan aksi yang menantang!
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
              Beli Sekarang
            </button>
            <button className="bg-gray-300 py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300">
              Favorit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;

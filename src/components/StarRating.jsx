// src/components/StarRating.jsx
import React from 'react';

const StarRating = ({ rating }) => {
  const totalStars = 5; // Total bintang yang akan ditampilkan

  // Fungsi untuk menghasilkan array bintang
  const stars = Array.from({ length: totalStars }, (_, index) => {
    const isFilled = index < Math.floor(rating); // Menggunakan Math.floor untuk rating bulat
    const isHalfFilled = index < Math.ceil(rating) && index >= Math.floor(rating); // Untuk menangani rating desimal

    return (
      <span key={index}>
        {isFilled ? (
          <span className="text-yellow-500">&#9733;</span> // Bintang terisi
        ) : isHalfFilled ? (
          <span className="text-yellow-500">&#9734;</span> // Bintang setengah
        ) : (
          <span className="text-gray-400">&#9734;</span> // Bintang kosong
        )}
      </span>
    );
  });

  return <div>{stars}</div>;
};

export default StarRating;

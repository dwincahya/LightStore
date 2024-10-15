import React from "react";
import reviews from "../data/review";

const Review = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-12 text-white">
      <div className="text-center mb-12">
        <h2 className="text-blue-400 text-lg">Ulasan</h2>
        <h1 className="text-3xl font-bold">
          Terima kasih kepada semua pelanggan yang memberikan ulasan dan
          penilaian kepada kami.
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-md shadow-lg space-y-3"
          >
            <h3 className="text-xl font-semibold">{review.game}</h3>
            <p className="italic text-gray-400">"{review.review}"</p>
            <p className="text-sm text-gray-400">{review.phone}</p>
            {review.purchase && (
              <p className="text-sm text-gray-400">{review.purchase}</p>
            )}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                {Array.from({ length: review.rating }).map((_, idx) => (
                  <svg
                    key={idx}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="yellow"
                    viewBox="0 0 24 24"
                    stroke="yellow"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.29 7.043h7.416c.969 0 1.371 1.24.588 1.81l-6.005 4.36 2.29 7.043c.3.921-.755 1.688-1.539 1.118L12 18.347l-6.005 4.36c-.784.57-1.839-.197-1.539-1.118l2.29-7.043-6.005-4.36c-.784-.57-.381-1.81.588-1.81h7.416l2.29-7.043z"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-400">{review.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;

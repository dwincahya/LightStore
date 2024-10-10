import React from 'react';

const PulsaEwalletItem = ({ item }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-gray-600">Type: {item.type}</p> 
      </div>
    </div>
  );
};

export default PulsaEwalletItem;

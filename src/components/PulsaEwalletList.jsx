import React from 'react';
import dataPulsaEwallet from '../data/pulsaEwalletsData';
import PulsaEwalletItem from './PulsaEwalletItem';

const PulsaEwalletList = ({ selectedFilter }) => {
  const filteredData = selectedFilter && selectedFilter !== 'Semua Item'
    ? dataPulsaEwallet.filter(item => {
        if (selectedFilter === 'E-Wallet') return item.type === 'E-Wallet';
        
        if (selectedFilter === 'Pulsa Reguler') return item.type === 'Pulsa' && item.name.includes('Reguler');

        return false; 
      })
    : dataPulsaEwallet; 

  return (
    <div className="container mx-auto px-6 md:px-10 py-6 md:py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4">
        {filteredData.length > 0 ? (
          filteredData.map(item => (
            <PulsaEwalletItem key={item.id} item={item} />
          ))
        ) : (
          <div className="col-span-full text-center">Tidak ada item yang ditampilkan.</div>
        )}
      </div>
    </div>
  );
};

export default PulsaEwalletList;

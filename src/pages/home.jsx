// pages/Home.js
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Carousel from '../components/Carousel';
import TabNav from '../components/tabnav';
import GameList from '../components/gamelist';
import VoucherList from '../components/VoucherList';
import PulsaEwalletList from '../components/PulsaEwalletList'; 

function Home() {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [activeTab, setActiveTab] = useState('TOP UP'); 

  const renderContent = () => {
    switch (activeTab) {
      case 'VOUCHER':
        return <VoucherList />;
      case 'PULSA & ISI E-WALLET':
        return <PulsaEwalletList />;
      default:
        return <GameList selectedFilter={selectedFilter} />;
    }
  };

  return (
    <div>
      <Navbar />
      <Carousel />
      <TabNav onTabChange={setActiveTab} onFilterChange={setSelectedFilter} />
      {renderContent()} 
    </div>
  );
}

export default Home;

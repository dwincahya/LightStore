import React, { useState } from 'react';
import Carousel from '../components/Banner';
import TabNav from '../components/TabNav';
import GameList from './GameList';
import VoucherList from '../components/VoucherList';
import PulsaEwalletList from '../components/PulsaEwalletList';
import CSButton from '../components/CSButton';

function Home() {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [activeTab, setActiveTab] = useState('TOP UP');

  const renderContent = () => {
    switch (activeTab) {
      case 'VOUCHER':
        return <VoucherList selectedFilter={selectedFilter} />;
      case 'PULSA & ISI E-WALLET':
        return <PulsaEwalletList selectedFilter={selectedFilter} />; 
      default:
        return <GameList selectedFilter={selectedFilter} />;
    }
  };

  return (
    <div>
      <Carousel />
      <TabNav onTabChange={setActiveTab} onFilterChange={setSelectedFilter} />
      {renderContent()} 
      <CSButton />
    </div>
  );
}

export default Home;

// pages/Home.js
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Carousel from '../components/Carousel';
import TabNav from '../components/tabnav';
import GameList from '../components/gamelist';

function Home() {
    const [selectedFilter, setSelectedFilter] = useState(null);
  
    return (
      <div>
        <Navbar />
        <Carousel />
        <TabNav onFilterChange={setSelectedFilter} />
        <GameList selectedFilter={selectedFilter} />
      </div>
    );
  }
  
  export default Home;
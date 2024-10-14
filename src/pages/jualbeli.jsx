import React, { useEffect } from 'react';
import Banner from '../components/Banner';

function JualBeli() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div className="container mx-auto p-6">
      <Banner />
    </div>
  );
}

export default JualBeli;

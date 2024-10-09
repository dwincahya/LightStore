import Home from './pages/home';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import JualBeli from './pages/jualbeli';
import CekTransaksi from './pages/transaksi';
import GameList from './pages/GameList';
import GameDetail from './pages/GameDetail'; 
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cek-transaksi" element={<CekTransaksi />} />
        <Route path="/jual-beli" element={<JualBeli />} />
        <Route path="/daftar-game" element={<GameList />} />
        <Route path="/game/:id" element={<GameDetail />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

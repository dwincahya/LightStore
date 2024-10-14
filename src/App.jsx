import Home from './pages/Home';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import JualBeli from './pages/JualBeli';
import CekTransaksi from './pages/Transaksi';
import GameList from './pages/GameList';
import GameDetail from './pages/GameDetail'; 
import Footer from './components/Footer';
import CSButton from './components/CSButton';

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
      <CSButton />
      <Footer />
    </Router>
  );
}

export default App;

import React from 'react'; 
import { NavLink } from 'react-router-dom'; 
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa'; 
import logo from '../assets/img/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-72">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4">
        <div className="items-center md:items-start flex flex-col mb-6 md:mb-0 md:w-1/4 md:mr-4">
          <img src={logo} alt="Logo Light Store" className="h-12 mb-6" />
          <p className="font-medium text-xs md:text-sm mb-8 text-center md:text-left">
            Light Store - Top Up Hemat Main Puas. Tempat Top Up dan Jual Beli Akun Game.
          </p>

          <div className="flex space-x-4 mb-6 items-start">
            <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaWhatsapp className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaTiktok className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="flex flex-col mb-6 md:mb-0 md:w-1/4 md:mr-4 md:ml-28">
          <h4 className="font-semibold text-sm md:text-base mb-2">Navigasi</h4>
          <ul className="space-y-1">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-blue-400"}
              >
                List Game
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/cek-transaksi" 
                className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-blue-400"}
              >
                Cek Transaksi
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/jual-beli" 
                className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-blue-400"}
              >
                Jual Beli
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-blue-400"}
              >
                Hubungi Kami
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/reviews" 
                className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-blue-400"}
              >
                Ulasan
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex flex-col mb-6 md:mb-0 md:w-1/4 md:mr-4">
          <h4 className="font-semibold text-sm md:text-base mb-2">About</h4>
          <ul className="space-y-1">
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-blue-400"}
              >
                Tentang Kami
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/terms" 
                className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-blue-400"}
              >
                Syarat & Ketentuan
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/privacy" 
                className={({ isActive }) => isActive ? "text-blue-400" : "hover:text-blue-400"}
              >
                Kebijakan Privasi
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex flex-col mb-6 md:mb-0 md:w-1/4">
          <h4 className="font-semibold text-sm md:text-base mb-2">Dukungan</h4>
          <ul className="space-y-1">
            <li>
              <a 
                href="https://wa.me/123456789" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-xs">
        © {new Date().getFullYear()} Light Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

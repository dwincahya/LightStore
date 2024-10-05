import React from 'react'; 
import { NavLink } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-72">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4">
        {/* Logo dan Deskripsi */}
        <div className="flex flex-col items-start mb-4 md:mb-0 md:w-1/3">
          <img src="https://flowbite.com/docs/images/logo.svg" alt="Logo Light Store" className="h-12 mb-4" />
          <p className="text-xs md:text-sm mb-4">
            Light Store - Menyediakan berbagai produk dengan harga terjangkau.
          </p>

          {/* Ikon Media Sosial */}
          <div className="flex space-x-4 mb-6">
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

        {/* Navigasi */}
        <div className="mb-4 md:mb-0 md:w-1/3">
          <h4 className="font-semibold text-sm md:text-base mb-2">Navigasi</h4>
          <ul className="space-y-1">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-blue-500"}
              >
                List Game
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/cek-transaksi" 
                className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-blue-500"}
              >
                Cek Transaksi
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/jual-beli" 
                className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-blue-500"}
              >
                Jual Beli
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-blue-500"}
              >
                Hubungi Kami
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/reviews" 
                className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-blue-500"}
              >
                Ulasan
              </NavLink>
            </li>
          </ul>
        </div>

        {/* About */}
        <div className="mb-4 md:mb-0 md:w-1/3">
          <h4 className="font-semibold text-sm md:text-base mb-2">About</h4>
          <ul className="space-y-1">
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-blue-500"}
              >
                Tentang Kami
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/terms" 
                className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-blue-500"}
              >
                Syarat & Ketentuan
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/privacy" 
                className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-blue-500"}
              >
                Kebijakan Privasi
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-xs">
        © {new Date().getFullYear()} Light Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import logo from '../assets/img/logo.png'

const FormContact = () => {
    const [formData, setFormData] = useState({
      individual: "",
      type: "",
      name: "",
      whatsapp: "",
      description: "",
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log("Form Data Submitted: ", formData);
    };
  
    return (
      <div className="bg-gray-900 min-h-screen flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-md shadow-md w-full max-w-lg"
        >
          {/* Logo Section */}
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Logo" className="h-16" /> {/* Logo image */}
          </div>
  
          <h1 className="text-white text-2xl mb-6 text-center">
            Formulir Laporan / Permintaan
          </h1>
          <p className="text-gray-400 mb-4 text-center">
            Silahkan isi formulir di bawah ini untuk melaporkan masalah yang Anda alami. Tim kami akan segera menindaklanjuti laporan Anda.
          </p>
  
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="individual">
              Individu
            </label>
            <select
              id="individual"
              name="individual"
              value={formData.individual}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700 text-gray-300"
            >
              <option value="">Pilih Tipe</option>
              <option value="Individu">Individu</option>
              <option value="Perusahaan">Perusahaan</option>
            </select>
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="name">
              Nama Anda
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700 text-gray-300"
              placeholder="Nama Anda"
            />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="whatsapp">
              Nomor WhatsApp
            </label>
            <div className="flex">
              <span className="bg-gray-700 p-2 rounded-l-md text-gray-300">+62</span>
              <input
                id="whatsapp"
                name="whatsapp"
                type="text"
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full p-2 rounded-r-md bg-gray-700 text-gray-300"
                placeholder="Nomor WhatsApp"
              />
            </div>
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="description">
              Deskripsi
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700 text-gray-300"
              placeholder="Tulis Pesan Anda..."
              rows="4"
            />
          </div>
  
          <div className="mb-4">
            <div className="flex items-center">
              <input type="checkbox" id="recaptcha" name="recaptcha" className="mr-2" />
              <label htmlFor="recaptcha" className="text-gray-300">
                I'm not a robot
              </label>
            </div>
          </div>
  
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    );
  };
  
  export default FormContact;
import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom'; 
import logo from '../assets/img/logo.png';
import gamesData from '../data/gamesData'; 

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation(); 
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    setIsDropdownOpen(false);
    setSearchQuery('');
    setSearchResults([]); 
  }, [location]);
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      console.log('Mencari:', searchQuery);
    }
  };

  const fetchSearchResults = (query) => {
    if (query) {
      const filteredResults = gamesData.filter(game =>
        game.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]); 
    }
  };

  const goToGameDetail = (gameId) => {
    navigate(`/game/${gameId}`);
    setSearchQuery(''); 
    setSearchResults([]); 
  };

  return (
    <>
      <nav className="bg-gray-900 fixed top-0 left-0 right-0 z-50 bg-opacity-75 shadow-md backdrop-blur-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8 w-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Light Store</span>
          </NavLink>

          <div className="flex md:order-2">
            <button
              type="button"
              aria-controls="navbar-search"
              aria-expanded={isDropdownOpen}
              onClick={toggleDropdown}
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>

            <button
              onClick={toggleDropdown}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded={isDropdownOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          <div className={`${isDropdownOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-search">
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    fetchSearchResults(e.target.value); 
                  }}
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Cari Game"
                />
              </form>
              {searchResults.length > 0 && (
                <ul className="text-white absolute w-full bg-gray-950 shadow-lg rounded-lg mt-2 z-10">
                  {searchResults.map((game) => (
                    <li
                      key={game.id}
                      onClick={() => goToGameDetail(game.id)}
                      className=" hover:bg-gray-700 p-2 flex items-center"
                    >
                      <img src={game.image} alt={game.name} className="w-12 h-12 rounded me-3" />
                      <div>
                        <p className="font-semibold">{game.name}</p>
                        <p className="text-sm text-gray-500">{game.publisher}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent bg-gray-800 md:dark:bg-transparent border-gray-700 md:mr-32">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => isActive 
                    ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 " 
                    : "block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-white md:dark:hover:bg-transparent border-gray-700"
                  }
                  aria-current="page"
                >
                  List Game
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/cek-transaksi"
                  className={({ isActive }) => isActive 
                    ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" 
                    : "block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-white md:dark:hover:bg-transparent border-gray-700"
                  }
                >
                  Cek Transaksi
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/jual-beli"
                  className={({ isActive }) => isActive 
                    ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 " 
                    : "block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-white md:dark:hover:bg-transparent border-gray-700"
                  }
                >
                  Jual Beli
                </NavLink>
              </li>
            </ul>

            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    fetchSearchResults(e.target.value); 
                  }}
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Cari Game"
                />
              </form>
              {searchResults.length > 0 && (
                <ul className="text-white absolute w-full bg-gray-950 shadow-lg rounded-lg mt-2 z-10">
                  {searchResults.map((game) => (
                    <li
                      key={game.id}
                      onClick={() => goToGameDetail(game.id)}
                      className="cursor-pointer hover:bg-gray-700 p-2 flex items-center"
                    >
                      <img src={game.image} alt={game.name} className="w-12 h-12 rounded me-3" />
                      <div>
                        <p className="font-semibold">{game.name}</p>
                        <p className="text-xs text-gray-300">{game.publisher}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="border-b-2 border-blue-700"></div>
      </nav>

      <div className="mt-16"></div>
    </>
  );
}

export default Navbar;

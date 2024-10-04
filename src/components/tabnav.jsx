import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

function TabNav({ onTabChange, onFilterChange }) {
    const [activeTab, setActiveTab] = useState('TOP UP');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(null);

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        setSelectedFilter(null);
        onFilterChange(null);
        onTabChange(tabName); 
    };

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
        onFilterChange(filter);
        setIsFilterOpen(false);
    };

    return (
        <nav className="px-5 md:px-20 pt-12 bg-transparent">
            <div className="container mx-auto flex flex-row items-center justify-between space-x-1 md:space-x-6">
                <div className="flex space-x-1 md:space-x-2">
                    {['TOP UP', 'VOUCHER', 'PULSA & ISI E-WALLET'].map((tab) => (
                        <button
                            key={tab}
                            className={`${
                                activeTab === tab ? 'text-white bg-blue-700' : 'text-blue-500'
                            } font-semibold hover:text-white px-1 py-0.5 md:px-2 md:py-1 rounded transition-colors duration-300 text-xs md:text-base`}
                            onClick={() => handleTabClick(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="relative flex items-center">
                    <button
                        onClick={toggleFilter}
                        className="flex items-center bg-white text-blue-700 font-semibold px-1 py-0.5 md:px-2 md:py-1 rounded hover:bg-blue-100 transition-all duration-300 text-xs md:text-base"
                    >
                        <FaFilter className="mr-1" />
                        <span className="hidden md:inline">Filter</span>
                    </button>

                    {isFilterOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                            <ul className="text-gray-900">
                                <li
                                    onClick={() => handleFilterClick('Semua Game')}
                                    className={`px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out ${
                                        selectedFilter === null
                                            ? 'bg-gray-900 text-blue-500'
                                            : 'hover:bg-gray-200'
                                    }`}
                                >
                                    Semua Game
                                </li>
                                {['Battle Royale', 'MOBA', 'RPG', 'Populer'].map((filter) => (
                                    <li
                                        key={filter}
                                        onClick={() => handleFilterClick(filter)}
                                        className={`px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out ${
                                            selectedFilter === filter
                                                ? 'bg-gray-900 text-blue-500'
                                                : 'hover:bg-gray-200'
                                        }`}
                                    >
                                        {filter}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default TabNav;

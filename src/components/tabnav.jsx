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
        onFilterChange(
            filter === 'Semua Game' || filter === 'Semua Voucher' || filter === 'Semua Pulsa & ISI E-WALLET'
                ? null
                : filter
        );
        setIsFilterOpen(false);
    };

    const getFiltersForActiveTab = () => {
        switch (activeTab) {
            case 'TOP UP':
                return ['Semua Game', 'Battle Royale', 'MOBA', 'RPG', 'Populer'];
            case 'VOUCHER':
                return ['Semua Voucher', 'Voucher Game', 'Voucher E-Wallet'];
            case 'PULSA & ISI E-WALLET':
                return ['Semua Item', 'Pulsa Reguler', 'E-Wallet'];
            default:
                return [];
        }
    };

    const filters = getFiltersForActiveTab();

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
                        className="flex items-center bg-blue-800 text-white font-semibold px-1 py-0.5 md:px-2 md:py-1 rounded border border-gray-800 hover:bg-blue-900 transition-all duration-300 text-xs md:text-base"
                    >
                        <FaFilter className="mr-1" />
                        <span className="hidden md:inline">Filter</span>
                    </button>

                    {/* Dropdown with smooth transition */}
                    <div
                        className={`absolute right-0 mt-2 w-40 bg-blue-800 border border-gray-800 rounded-lg shadow-lg z-10 transition-all duration-300 ease-in-out transform ${
                            isFilterOpen
                                ? 'opacity-100 translate-y-0' // Fully visible
                                : 'opacity-0 -translate-y-2 pointer-events-none' // Hidden state
                        }`}
                    >
                        <ul className="text-white">
                            {filters.map((filter) => (
                                <li
                                    key={filter}
                                    onClick={() => handleFilterClick(filter)}
                                    className={`px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out ${
                                        selectedFilter === filter
                                            ? 'bg-blue-600'
                                            : 'hover:bg-blue-900'
                                    } rounded-lg`}
                                >
                                    {filter}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default TabNav;

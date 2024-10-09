import img1 from '../assets/img/kagura.jpg'; 
import img2 from '../assets/img/raiden.jpg'; 
import img3 from '../assets/img/ff.jpg';
import img4 from '../assets/img/hok.jpg'; 
import img5 from '../assets/img/wuwa.png'; 
import img6 from '../assets/img/pubgm.jpg'; 
import img7 from '../assets/img/soldier11.jpg';
import img8 from '../assets/img/wildrift.jpg'; 
import img9 from '../assets/img/tof.jpg'; 
import img10 from '../assets/img/robin.jpg'; 

const games = [
  {
    id: 1,
    name: 'Mobile Legends',
    publisher: 'Moonton',
    image: img1,
    categories: ['MOBA', 'Populer'],
    rating: 4.5,
    items: [
      { value: '11diamond', label: '11 Diamond', price: 'Rp 100.000' },
      { value: '209diamond', label: '209 Diamond', price: 'Rp 300.000' },
      { value: '256diamond', label: '256 Diamond', price: 'Rp 400.000' },
      { value: 'starlight', label: 'Starlight', price: 'Rp 500.000' },
    ],
  },
  {
    id: 2,
    name: 'Genshin Impact',
    publisher: 'miHoYo',
    image: img2,
    categories: ['RPG', 'Populer'],
    rating: 4.8,
    items: [
      { value: '60primogems', label: '60 Primogems', price: 'Rp 150.000' },
      { value: '300crystals', label: '300 Crystals', price: 'Rp 450.000' },
      { value: 'welkin', label: 'Welkin Moon', price: 'Rp 600.000' },
    ],
  },
  {
    id: 3,
    name: 'Free Fire',
    publisher: 'Garena',
    image: img3,
    categories: ['Battle Royale', 'Populer'],
    rating: 4.3,
    items: [
      { value: '60gold', label: '60 Gold', price: 'Rp 50.000' },
      { value: '300gold', label: '300 Gold', price: 'Rp 200.000' },
      { value: 'starlight', label: 'Starlight', price: 'Rp 400.000' },
    ],
  },
  {
    id: 4,
    name: 'Honor of Kings',
    publisher: 'Tencent',
    image: img4,
    categories: ['MOBA'],
    rating: 4.7,
    items: [
      { value: '5skins', label: '5 Skins', price: 'Rp 300.000' },
      { value: '10skins', label: '10 Skins', price: 'Rp 600.000' },
      { value: '15skins', label: '15 Skins', price: 'Rp 900.000' },
    ],
  },
  {
    id: 5,
    name: 'Wuthering Wave',
    publisher: 'Kuro Game',
    image: img5,
    categories: ['RPG'],
    rating: 4.6,
    items: [
      { value: '200crystals', label: '200 Crystals', price: 'Rp 250.000' },
      { value: '500crystals', label: '500 Crystals', price: 'Rp 450.000' },
    ],
  },
  {
    id: 6,
    name: 'PUBG Mobile',
    publisher: 'PUBG Corporation',
    image: img6,
    categories: ['Battle Royale', 'Populer'],
    rating: 4.4,
    items: [
      { value: '100uc', label: '100 UC', price: 'Rp 120.000' },
      { value: '500uc', label: '500 UC', price: 'Rp 500.000' },
      { value: '1000uc', label: '1000 UC', price: 'Rp 900.000' },
    ],
  },
  {
    id: 7,
    name: 'Zenless Zone Zero',
    publisher: 'miHoYo',
    image: img7,
    categories: ['RPG'],
    rating: 4.5,
    items: [
      { value: '30gems', label: '30 Gems', price: 'Rp 75.000' },
      { value: '100gems', label: '100 Gems', price: 'Rp 200.000' },
    ],
  },
  {
    id: 8,
    name: 'League of Legends: Wild Rift',
    publisher: 'Riot Games',
    image: img8,
    categories: ['MOBA'],
    rating: 4.6,
    items: [
      { value: '20skins', label: '20 Skins', price: 'Rp 400.000' },
      { value: '50skins', label: '50 Skins', price: 'Rp 800.000' },
    ],
  },
  {
    id: 9,
    name: 'Tower of Fantasy',
    publisher: 'Level Infinite',
    image: img9,
    categories: ['RPG'],
    rating: 4.3,
    items: [
      { value: '10gems', label: '10 Gems', price: 'Rp 50.000' },
      { value: '30gems', label: '30 Gems', price: 'Rp 150.000' },
      { value: '100gems', label: '100 Gems', price: 'Rp 500.000' },
    ],
  },
  {
    id: 10,
    name: 'Honkai Star Rail',
    publisher: 'miHoYo',
    image: img10,
    categories: ['RPG'],
    rating: 4.3,
    items: [
      { value: '10gems', label: '10 Gems', price: 'Rp 50.000' },
      { value: '30gems', label: '30 Gems', price: 'Rp 150.000' },
      { value: '100gems', label: '100 Gems', price: 'Rp 500.000' },
    ],
  },
];

export default games;

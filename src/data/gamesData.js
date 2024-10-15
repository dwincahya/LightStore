import img1 from '../assets/img/kagura.jpg';
import img2 from '../assets/img/raiden.jpg';
import img3 from '../assets/img/ff.jpg';
import img4 from '../assets/img/hok.jpg';
import img5 from '../assets/img/bloodstrike.jpg';
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
      { value: '5diamond', label: '5 Diamonds (5 + 0 bonus)', category: 'Currency', price: 2000 },
      { value: '12diamond', label: '12 Diamonds (11 + 1 bonus)', category: 'Currency', price: 4000 },
      { value: '19diamond', label: '19 Diamonds (17 + 2 bonus)', category: 'Currency', price: 6000 },
      { value: '19diamond', label: '19 Diamonds (19 + 1 bonus)', category: 'Currency', price: 7000 },
      { value: '28diamond', label: '28 Diamonds (28 + 2 bonus)', category: 'Currency', price: 10000 },
      { value: '36diamond', label: '36 Diamonds (36 + 2 bonus)', category: 'Currency', price: 12000 },
      { value: '43diamond', label: '43 Diamonds (43 + 3 bonus)', category: 'Currency', price: 15000 },
      { value: '55diamond', label: '55 Diamonds (55 + 5 bonus)', category: 'Currency', price: 20000 },
      { value: '70diamond', label: '70 Diamonds (70 + 7 bonus)', category: 'Currency', price: 25000 },
      { value: '86diamond', label: '86 Diamonds (86 + 8 bonus)', category: 'Currency', price: 30000 },
      { value: '99diamond', label: '99 Diamonds (99 + 9 bonus)', category: 'Currency', price: 35000 },
      { value: '123diamond', label: '123 Diamonds (123 + 12 bonus)', category: 'Currency', price: 45000 },
      { value: '154diamond', label: '154 Diamonds (154 + 15 bonus)', category: 'Currency', price: 55000 },
      { value: '185diamond', label: '185 Diamonds (185 + 19 bonus)', category: 'Currency', price: 65000 },
      { value: '217diamond', label: '217 Diamonds (217 + 21 bonus)', category: 'Currency', price: 75000 },
      { value: '256diamond', label: '256 Diamonds (256 + 25 bonus)', category: 'Currency', price: 90000 },
      { value: '299diamond', label: '299 Diamonds (299 + 29 bonus)', category: 'Currency', price: 110000 },
      { value: '343diamond', label: '343 Diamonds (343 + 34 bonus)', category: 'Currency', price: 125000 },
      { value: '429diamond', label: '429 Diamonds (429 + 42 bonus)', category: 'Currency', price: 150000 },
      { value: '514diamond', label: '514 Diamonds (514 + 51 bonus)', category: 'Currency', price: 180000 },
      { value: '601diamond', label: '601 Diamonds (601 + 60 bonus)', category: 'Currency', price: 210000 },
      { value: '706diamond', label: '706 Diamonds (706 + 71 bonus)', category: 'Currency', price: 250000 },
      { value: '825diamond', label: '825 Diamonds (825 + 82 bonus)', category: 'Currency', price: 300000 },
      { value: '930diamond', label: '930 Diamonds (930 + 93 bonus)', category: 'Currency', price: 350000 },
      { value: '1050diamond', label: '1050 Diamonds (1050 + 105 bonus)', category: 'Currency', price: 400000 },
      { value: '1207diamond', label: '1207 Diamonds (1207 + 121 bonus)', category: 'Currency', price: 450000 },
      { value: '1412diamond', label: '1412 Diamonds (1412 + 142 bonus)', category: 'Currency', price: 550000 },
      { value: '1601diamond', label: '1601 Diamonds (1601 + 160 bonus)', category: 'Currency', price: 650000 },
      { value: '1882diamond', label: '1882 Diamonds (1882 + 188 bonus)', category: 'Currency', price: 750000 },
      { value: '2195diamond', label: '2195 Diamonds (2195 + 219 bonus)', category: 'Currency', price: 850000 },
      { value: '2531diamond', label: '2531 Diamonds (2531 + 253 bonus)', category: 'Currency', price: 950000 },
      { value: '2930diamond', label: '2930 Diamonds (2930 + 293 bonus)', category: 'Currency', price: 1050000 },
      { value: '3171diamond', label: '3171 Diamonds (3171 + 317 bonus)', category: 'Currency', price: 1100000 },
      { value: '3663diamond', label: '3663 Diamonds (3663 + 366 bonus)', category: 'Currency', price: 1200000 },
      { value: 'starlight', label: 'Starlight', category: 'Subscription', price: 500000 },
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
      { value: 'welkin1x', label: 'Blessing of the Welkin Moon', category: 'Subscription', price: 59679 },
      { value: 'welkin2x', label: '2x Blessing of the Welkin Moon', category: 'Subscription', price: 119358 },
      { value: 'welkin3x', label: '3x Blessing of the Welkin Moon', category: 'Subscription', price: 179036 },
      { value: 'welkin4x', label: '4x Blessing of the Welkin Moon', category: 'Subscription', price: 238715 },
      { value: 'welkin5x', label: '5x Blessing of the Welkin Moon', category: 'Subscription', price: 298393 },
      { value: 'crystals60', label: '60 Genesis Crystals', category: 'Currency', price: 11705 },
      { value: 'crystals300', label: '300+30 Genesis Crystals', category: 'Currency', price: 59679 },
      { value: 'crystals980', label: '980+110 Genesis Crystals', category: 'Currency', price: 179639 },
      { value: 'crystals1980', label: '1980+260 Genesis Crystals', category: 'Currency', price: 389569 },
      { value: 'crystals3280', label: '3280+600 Genesis Crystals', category: 'Currency', price: 599489 },
      { value: 'crystals6480', label: '6480+1600 Genesis Crystals', category: 'Currency', price: 1199269 },
      { value: 'crystalsAll', label: 'All Pack Genesis Crystals', category: 'Currency', price: 2439318 },
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
      { value: 'mingguan', label: 'Mingguan Membership', category: 'Subscription', price: 28000 },
      { value: 'bulanan', label: 'Bulanan Membership', category: 'Subscription', price: 62000 },
      { value: 'levelup', label: 'Level Up Pass', category: 'Subscription', price: 132000 },
      { value: 'bpcard', label: 'BP Card', category: 'Currency', price: 32301 },
      { value: '5diamond', label: '5 Diamonds', category: 'Currency', price: 2000 },
      { value: '10diamond', label: '10 Diamonds', category: 'Currency', price: 5000 },
      { value: '50diamond', label: '50 Diamonds', category: 'Currency', price: 14400 },
      { value: '55diamond', label: '55 Diamonds', category: 'Currency', price: 7261 },
      { value: '70diamond', label: '70 Diamonds', category: 'Currency', price: 8466 },
      { value: '80diamond', label: '80 Diamonds', category: 'Currency', price: 13423 },
      { value: '100diamond', label: '100 Diamonds', category: 'Currency', price: 18327 },
      { value: '120diamond', label: '120 Diamonds', category: 'Currency', price: 15138 },
      { value: '139diamond', label: '139 Diamonds', category: 'Currency', price: 23930 },
      { value: '140diamond', label: '140 Diamonds', category: 'Currency', price: 3432 },
      { value: '145diamond', label: '145 Diamonds', category: 'Currency', price: 27323 },
      { value: '150diamond', label: '150 Diamonds', category: 'Currency', price: 26985 },
      { value: '190diamond', label: '190 Diamonds', category: 'Currency', price: 31231 },
      { value: '200diamond', label: '200 Diamonds', category: 'Currency', price: 32928 },
      { value: '250diamond', label: '250 Diamonds', category: 'Currency', price: 43453 },
      { value: '355diamond', label: '355 Diamonds', category: 'Currency', price: 45389 },
      { value: '420diamond', label: '420 Diamonds', category: 'Currency', price: 50000 },
      { value: '500diamond', label: '500 Diamonds', category: 'Currency', price: 64000 },
      { value: '510diamond', label: '510 Diamonds', category: 'Currency', price: 62453 },
      { value: '565diamond', label: '565 Diamonds', category: 'Currency', price: 70693 },
      { value: '720diamond', label: '720 Diamonds', category: 'Currency', price: 83212 },
      { value: '800diamond', label: '800 Diamonds', category: 'Currency', price: 91212 },
      { value: '860diamond', label: '860 Diamonds', category: 'Currency', price: 101332 },
      { value: '930diamond', label: '930 Diamonds', category: 'Currency', price: 125000 },
      { value: '1000diamond', label: '1000 Diamonds', category: 'Currency', price: 135323 },
      { value: '1050diamond', label: '1050 Diamonds', category: 'Currency', price: 141329 },
      { value: '1090diamond', label: '1090 Diamonds', category: 'Currency', price: 152122 },
      { value: '1450diamond', label: '1450 Diamonds', category: 'Currency', price: 213212 },
      { value: '2200diamond', label: '2200 Diamonds', category: 'Currency', price: 373214 },
      { value: '3640diamond', label: '3640 Diamonds', category: 'Currency', price: 491232 },
      { value: '7290diamond', label: '7290 Diamonds', category: 'Currency', price: 983928 },
      { value: '36500diamond', label: '36500 Diamonds', category: 'Currency', price: 4420829 }
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
      { value: '8token', label: '8 Token', category: 'Currency', price: 1330 },
      { value: '16token', label: '16 + 1 Token', category: 'Currency', price: 2130 },
      { value: '23token', label: '23 + 2 Token', category: 'Currency', price: 3720 },
      { value: '80token', label: '80 + 8 Token', category: 'Currency', price: 10990 },
      { value: 'weekly_card', label: 'WEEKLY CARD', category: 'Subscription', price: 10990 },
      { value: '240token', label: '240 + 17 Token', category: 'Currency', price: 38740 },
      { value: 'weekly_card_plus', label: 'WEEKLY CARD PLUS', category: 'Subscription', price: 38740 },
      { value: '400token', label: '400 + 32 Token', category: 'Currency', price: 64580 },
      { value: '560token', label: '560 + 45 Token', category: 'Currency', price: 86110 },
      { value: '800token', label: '800 + 95 Token', category: 'Currency', price: 111900 },
      { value: '1200token', label: '1200 + 153 Token', category: 'Currency', price: 179170 },
      { value: '2400token', label: '2400 + 324 Token', category: 'Currency', price: 387420 },
      { value: '4000token', label: '4000 + 580 Token', category: 'Currency', price: 602650 },
      { value: '8000token', label: '8000 + 1160 Token', category: 'Currency', price: 1113390 },
    ],
  },
  {
    id: 5,
    name: 'Blood Strike',
    publisher: 'NetEase Games',
    image: img5,
    categories: ['Battle Royale'],
    rating: 4.5,
    items: [
        { value: '100golds', label: '100 Golds', category: 'Currency', price: 11500 },
        { value: '300golds', label: '300 Golds', category: 'Currency', price: 35260 },
        { value: '500golds', label: '500 Golds', category: 'Currency', price: 59410 },
        { value: '1000golds', label: '1000 Golds', category: 'Currency', price: 119532 },
        { value: '2000golds', label: '2000 Golds', category: 'Currency', price: 236400 },
        { value: '5000golds', label: '5000 Golds', category: 'Currency', price: 583200 },
        { value: 'levelup_pass', label: 'Level Up Pass', category: 'Subscription', price: 25127 },
        { value: 'strikepass_elite', label: 'Strike Pass Elite', category: 'Subscription', price: 42551 },
        { value: 'strikepass_premium', label: 'Strike Pass premium', category: 'Subscription', price: 107252 },
    ],
  },
  {
    id: 6,
    name: 'PUBG Mobile',
    publisher: 'Tencent',
    image: img6,
    categories: ['Battle Royale', 'Populer'],
    rating: 4.4,
    items: [
      { value: '60uc', label: '60 UC', category: 'Currency', price: 13356 },
      { value: '325uc', label: '325 UC', category: 'Currency', price: 67269 },
      { value: '660uc', label: '660 UC', category: 'Currency', price: 134765 },
      { value: 'paket_upgrade_rp', label: 'Paket Upgrade RP Global', category: 'Subscription', price: 157981 },
      { value: '1800uc', label: '1800 UC', category: 'Currency', price: 337294 },
      { value: 'paket_upgrade_elite_rp', label: 'Paket Upgrade Elite RP Global', category: 'Subscription', price: 407325 },
      { value: '3850uc', label: '3850 UC', category: 'Currency', price: 674845 },
      { value: '8100uc', label: '8100 UC', category: 'Currency', price: 1349428 },
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
      { value: 'inter_knot_membership', label: 'Inter-Knot Membership', category: 'Subscription', price: 62898 },
      { value: '2x_inter_knot_membership', label: '2x Inter-Knot Membership', category: 'Subscription', price: 125786 },
      { value: '3x_inter_knot_membership', label: '3x Inter-Knot Membership', category: 'Subscription', price: 188674 },
      { value: '4x_inter_knot_membership', label: '4x Inter-Knot Membership', category: 'Subscription', price: 251562 },
      { value: '5x_inter_knot_membership', label: '5x Inter-Knot Membership', category: 'Subscription', price: 314450 },
      { value: '60_monochromes', label: '60 Monochromes', category: 'Currency', price: 11886 },
      { value: '330_monochromes', label: '330 (300+30) Monochromes', category: 'Currency', price: 62898 },
      { value: '1090_monochromes', label: '1090 (980+110) Monochromes', category: 'Currency', price: 189280 },
      { value: '2240_monochromes', label: '2240 (1980+260) Monochromes', category: 'Currency', price: 409410 },
      { value: '3880_monochromes', label: '3880 (3280+600) Monochromes', category: 'Currency', price: 631631 },
      { value: '8080_monochromes', label: '8080 (6480+1600) Monochromes', category: 'Currency', price: 1209300 },
      
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
      { value: '425core', label: '425 Cores', category: 'Currency', price: 52958 },
      { value: '1000core', label: '1000 Cores', category: 'Currency', price: 118200 },
      { value: '1850core', label: '1850 Cores', category: 'Currency', price: 212750 },
      { value: '3275core', label: '3275 Cores', category: 'Currency', price: 373490 },
      { value: '4800core', label: '4800 Cores', category: 'Currency', price: 534240 },
      { value: '10000core', label: '10000 Cores', category: 'Currency', price: 1067522 },
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
      { value: '60tanium', label: '60 Tanium', category: 'Currency', price: 11474 },
      { value: 'rookiesupplies', label: 'Rookie Supplies', category: 'Currency', price: 11474 },
      { value: '180tanium12crystal', label: '180 Tanium + Dark Crystal 12', category: 'Currency', price: 35130 },
      { value: '300tanium20crystal', label: '300 Tanium + Dark Crystal 20', category: 'Currency', price: 58776 },
      { value: 'adventurepack', label: 'Adventure Pack', category: 'Subscription', price: 58776 },
      { value: 'monthlypass', label: 'Monthly Pass', category: 'Subscription', price: 58776 },
      { value: 'basicpass', label: 'Basic Pass', category: 'Subscription', price: 117974 },
      { value: 'upgradepass', label: 'Upgrade Pass', category: 'Subscription', price: 129871 },
      { value: '980tanium110crystal', label: '980 Tanium + Dark Crystal 110', category: 'Currency', price: 177310 },
      { value: 'collectorspass', label: 'Collectors Edition Pass', category: 'Subscription', price: 236509 },
      { value: '1980tanium270crystal', label: '1980 Tanium + Dark Crystal 270', category: 'Currency', price: 354906 },
      { value: '3280tanium530crystal', label: '3280 Tanium + Dark Crystal 530', category: 'Currency', price: 631632 },
      { value: '6480tanium1300crystal', label: '6480 Tanium + Dark Crystal 1300', category: 'Currency', price: 1184227 },
      { value: '9980tanium1977crystal', label: '9980 Tanium + Dark Crystal 1977', category: 'Currency', price: 1776479 },
      { value: '12980tanium3520crystal', label: '12980 Tanium + Dark Crystal 3520', category: 'Currency', price: 2329074 },
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
      { value: 'express_supply_pass', label: 'Express Supply Pass', category: 'Subscription', price: 60155 },
      { value: '2x_express_supply_pass', label: '2x Express Supply Pass', category: 'Subscription', price: 120309 },
      { value: '3x_express_supply_pass', label: '3x Express Supply Pass', category: 'Subscription', price: 180464 },
      { value: '4x_express_supply_pass', label: '4x Express Supply Pass', category: 'Subscription', price: 240618 },
      { value: '5x_express_supply_pass', label: '5x Express Supply Pass', category: 'Subscription', price: 300773 },
      { value: '60_oneiric_shard', label: '60 Oneiric Shard', category: 'Currency', price: 12040 },
      { value: '330_oneiric_shard', label: '330 (300+30) Oneiric Shard', category: 'Currency', price: 60155 },
      { value: '1090_oneiric_shard', label: '1090 (980+110) Oneiric Shard', category: 'Currency', price: 181078 },
      { value: '1420_oneiric_shard', label: '1420 (1280+140) Oneiric Shard', category: 'Currency', price: 241233 },
      { value: '2240_oneiric_shard', label: '2240 (1980+260) Oneiric Shard', category: 'Currency', price: 392654 },
      { value: '3880_oneiric_shard', label: '3880 (3280+600) Oneiric Shard', category: 'Currency', price: 604231 },
      { value: '8080_oneiric_shard', label: '8080 (6480+1600) Oneiric Shard', category: 'Currency', price: 1208769 },
    ],
  },
];

export default games;

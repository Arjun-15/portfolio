import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { FavourateCoins } from './components/CryptoList/FavouriteCoins';
import { CoinDetail } from './components/CoinDetail/CoinDetail';
import { CryptoNavbar } from './components/Navbar/Navbar';
import { CryptoList } from './components/CryptoList/CryptoList';
import './crypto.css';

export const CryptoHome:React.FC = () => {
  return (
    <>
      <CryptoNavbar />
      <Routes>
        <Route path="/" element={<CryptoList />} />
        <Route path="/favourite" element={<FavourateCoins />} />
        <Route path="/detail/:coinId" element={<CoinDetail />} />
      </Routes>
    </>
  );
};

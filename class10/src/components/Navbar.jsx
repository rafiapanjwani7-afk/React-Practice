import React from 'react';
import Nav2 from './Nav2';
import { useContext } from 'react';
import { PostDataContext } from '../context/ThemeContext';
import { data } from 'react-router-dom';
const Navbar = ({ theme }) => {
    const Data = useContext(PostDataContext)//theme context
  return (
    <nav className="flex justify-between px-4 bg-cyan-800 text-amber-50 p-3">
      <h2 className="text-3xl">{Data[0]}</h2>

      <div>
        <Nav2 theme={theme} />
      </div>
    </nav>
  );
};

export default Navbar;

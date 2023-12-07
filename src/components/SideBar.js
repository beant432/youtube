import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const menuOpen = useSelector((store) => store.nav.isMenuOpen);
  if (!menuOpen) return null;
    return (
      <div className="col-span-1 px-10 shadow-lg cursor-pointer pb-4 h-full">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/demo">Demo</Link></li>
          <li>Short</li>
          <li>Music</li>
          <li>Live</li>
        </ul>
        <ul>
          <h5 className="mt-3 font-bold pb-2">Subscriptions</h5>
          <li>Movies</li>
          <li>Music</li>
          <li>Live</li>
        </ul>
        <ul>
          <h5 className="mt-3 font-bold pb-2">Watch later</h5>
          <li>Movies</li>
          <li>Music</li>
          <li>Live</li>
        </ul>
      </div>
    );
};

export default SideBar;

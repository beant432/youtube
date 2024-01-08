import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeMenu, openMenu } from "../utils/navSlice";
import useWindowResize from "../customhooks/useWindowResize";

const SideBar = () => {
  const menuOpen = useSelector((store) => store.nav.isMenuOpen);
  const dispatch = useDispatch();
  const [width] = useWindowResize();

  useEffect(() => {
    if (width < 768) {
      dispatch(closeMenu());
    } else {
      dispatch(openMenu());
    }
  }, [width]);

  if (!menuOpen) return null;
  return (
    <div className="col-span-1 px-10 shadow-lg cursor-pointer pb-4 h-full absolute bg-white overflow-y-hidden self-start sm:fixed left-0">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Demo</li>
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

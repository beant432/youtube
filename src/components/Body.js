import React from "react";

import { Outlet } from "react-router-dom";

import SideBar from "./SideBar";
import Head from "./Head";

const Body = () => {
  return (<>
    <Head />
    <div className="grid grid-flow-col py-5">
      <SideBar />
      <Outlet />
    </div>
    </>
  );
};

export default Body;

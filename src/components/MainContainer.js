import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonsList from "./ButtonsList";
const MainContainer = () => {
  return (
    <div className="col-span-11 py-5 ml-0 md:ml-[20%] lg:ml-[12%]">
      <ButtonsList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;

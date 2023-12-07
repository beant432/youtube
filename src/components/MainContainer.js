import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonsList from './ButtonsList';
const MainContainer = () => {
  return (
    <div className="col-span-11">
      <ButtonsList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;

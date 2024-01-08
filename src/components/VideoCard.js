/* eslint-disable react/prop-types */
import React from "react";

const VideoCard = ({ infoData }) => {
  const { snippet, statistics } = infoData || [];
  const { thumbnails, channelTitle, title } = snippet || [];
  return (
    <div className="border border-gray-100 shadow-xl text-left overflow-scroll rounded-lg">
      <img
        src={thumbnails?.medium.url}
        alt="thumbnail"
        className="pb-2 w-[100%]"
      />
      <ul className="pb-4 px-3 h-[10rem]">
        <li className="font-bold py-2">{title}</li>
        <li className="py-2">{channelTitle}</li>
        <li>{statistics?.likeCount}</li>
      </ul>
    </div>
  );
};

export const VideoCardWithAd = ({ infoData }) => {
  return (
    <div className="border border-red-500 w-80 h-[22rem] m-4 mb-3">
      <VideoCard infoData={infoData} />
    </div>
  );
};
export default VideoCard;

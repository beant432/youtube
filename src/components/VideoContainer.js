import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { YOUTUBE_VIDEOS_URL } from "../utils/constants";
import VideoCard, { VideoCardWithAd } from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_URL);
    const json = await data.json();
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
    {videos[0] && <VideoCardWithAd infoData={videos[0]}/>}
      {videos.map((video) => {
        return (
          <div className=" w-80 h-[22rem] m-4 mb-3 "  key={video.id}>
          <Link to={"watch?v=" + video.id}>
            <VideoCard infoData={video} />
            
          </Link>
          </div>
        );
      })}
    </div>
  );
};

export default VideoContainer;

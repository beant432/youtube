import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/navSlice";
import { useSearchParams } from "react-router-dom";
import { ID, YOUTUBE_GET_VIDEO_URL } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
// import VideoCard from "./VideoCard";

const Watch = () => {
  const [videoData, setVideoData] = useState([]);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  useEffect(() => {
    dispatch(closeMenu());
    window.scrollTo(0, 0);
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    const Urls = YOUTUBE_GET_VIDEO_URL.replace(ID, videoId);
    const data = await fetch(Urls);
    const json = await data.json();
    setVideoData(json.items[0]);
  };
  {
    videoData.length === 0 && <h1>Loading</h1>;
  }
  return (
    <div className="m-3 sm:m-10">
      {/* <div className="m-4 mb-3  w-8/12">
      <VideoCard infoData={videoData} />
      </div> */}
      <div className="flex flex-col sm:flex-row">
        <iframe
          width="1100"
          height="600"
          src={"https://www.youtube.com/embed/" + videoId}
          title="Innocent Or Guilty? | Taarak Mehta Ka Ooltah Chashmah | Full Episode | Ep 3936 | 23 Nov 2023"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-[100%] h-[100%] mb-5 sm:w-[900px] md:w-[100%] sm:h-[600px] lg:w-[1100px] sm:mb-0"
        ></iframe>
        <LiveChat />
      </div>
      <div className="text-left mt-5 p-2 h-[150px] sm:h-auto overflow-scroll">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default Watch;

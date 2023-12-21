import React, { useCallback, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { PAGE, YOUTUBE_VIDEOS_URL } from "../utils/constants";
import VideoCard, { VideoCardWithAd } from "./VideoCard";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/navSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openMenu());
    const getVideos = async () => {
      setIsLoading(true);
      const data = await fetch(YOUTUBE_VIDEOS_URL.replace(PAGE, page));
      const json = await data.json();
      setVideos(json.items);
      setPage(json.nextPageToken);
      setIsLoading(false);
    };
    getVideos();
  }, []);

  const getVideos = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);
    const data = await fetch(YOUTUBE_VIDEOS_URL.replace(PAGE, page));
    const json = await data.json();
    setVideos((prevItems) => [...prevItems, ...json.items]);
    setPage(json.nextPageToken);
    setIsLoading(false);
  }, [page, isLoading]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        getVideos();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [getVideos]);

  return (
    <div className="flex flex-wrap">
      {isLoading && <p>Loading...</p>}
      {videos && videos[0] && <VideoCardWithAd infoData={videos[0]} />}
      {videos?.map((video) => {
        return (
          <div className=" w-80 h-[22rem] m-4 mb-3 " key={video.id}>
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

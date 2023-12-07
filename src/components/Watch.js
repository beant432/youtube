import React,{ useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/navSlice";
import { useSearchParams } from "react-router-dom";
import {  ID, YOUTUBE_GET_VIDEO_URL } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
// import VideoCard from "./VideoCard";

const Watch = () => {
  const [videoData,setVideoData]=useState([]);
  const dispatch= useDispatch();
  const [searchParams]=useSearchParams();
  console.log(searchParams.get("v"));
  const videoId=searchParams.get("v");
  useEffect(()=>{
    dispatch(closeMenu());
    fetchVideo();
  },[])

  const fetchVideo=async()=>{
    const Urls=YOUTUBE_GET_VIDEO_URL.replace(ID, videoId);
    const data=await fetch(Urls);
    const json=await data.json();
    setVideoData(json.items[0]);
  }
  { videoData.length === 0 && <h1>Loading</h1> }
  return <div className="m-10">
       {/* <div className="m-4 mb-3  w-8/12">
      <VideoCard infoData={videoData} />
      </div> */}
      <div className="flex">
      <iframe width="1100" height="600" src={'https://www.youtube.com/embed/'+videoId}  title="Innocent Or Guilty? | Taarak Mehta Ka Ooltah Chashmah | Full Episode | Ep 3936 | 23 Nov 2023"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       allowFullScreen></iframe>
        <LiveChat />
       </div>
       <div className="text-left mt-5">
        <CommentsContainer />
       </div>
  </div>;
};

export default Watch;

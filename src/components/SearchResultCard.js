import React, { useEffect, useState } from 'react'
import { ID, YOUTUBE_GET_VIDEOS_LIST } from '../utils/constants';
import SearchVideoCard from './SearchVideoCard';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openMenu } from '../utils/navSlice';
import ButtonsList from './ButtonsList';

const SearchResultCard = (props) => {
 const {data}= props ||[];
  const videoId=data?.map(e=>e.id.videoId);
  const [videoData,setVideoData]=useState([]);
const dispatch=useDispatch();

  useEffect(()=>{
    fetchVideo();
    dispatch(openMenu());
  },[data])

  const fetchVideo=async()=>{
    const Urls=YOUTUBE_GET_VIDEOS_LIST.replace(ID, videoId.join(','));
    const data=await fetch(Urls);
    const json=await data.json();
    setVideoData(json.items);
  }
  console.log(videoData);
  return (
   <div className="m-4 mb-3  justify-center">
   <ButtonsList />
      {videoData.length>0 && videoData.map((video)=><Link to={"/watch?v=" + video.id} key={video.id}><SearchVideoCard infoData={video}/></Link>)}
      </div>
  )
}

export default SearchResultCard
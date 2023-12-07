/* eslint-disable react/prop-types */
import moment from "moment";
import React from "react";

const SearchVideoCard = ({ infoData }) => {
  const { snippet, statistics } = infoData || [];
  const { thumbnails, channelTitle, title, publishedAt,description  } = snippet || [];
  return (
    <div className="border border-gray-100 shadow-xl text-left overflow-scroll rounded-lg flex m-4">
      <img src={thumbnails?.medium.url} alt="thumbnail" className="rounded-md"/>
      <ul className="pb-4 px-3">
        <li className="font-bold py-2 text-lg">{title}</li>
       
        <li>{statistics?.viewCount} views</li>
        <li>{moment(publishedAt, "MMDDYY").fromNow()}</li>
        <li className="py-2">{channelTitle}</li>
        <li className="overflow-hidden text-ellipsis whitespace-nowrap w-[300px]">{description}</li>
      </ul>
    </div>
  );
};

// export const SearchVideoCardWithAd=({infoData})=>{
//  return <div className="border border-red-500 w-80 h-[22rem] m-4 mb-3"><SearchVideoCard infoData={infoData} /></div>
// }
export default SearchVideoCard;

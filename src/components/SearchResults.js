import React, { useEffect, useState } from 'react'
import SearchResultCard from './SearchResultCard'
import { SEARCH_VAL, YOUTUBE_GET_SEARCH_VIDEO_URL } from '../utils/constants';
import { useSearchParams } from 'react-router-dom';

const SearchResults = () => {
    const [suggestionResulsList, setSuggestionResultsList]=useState([])
const [searchParams]=useSearchParams();
console.log(searchParams);
    useEffect(()=>{
        fetchClickedSuggestion(searchParams);
    },[])
    
    
      const fetchClickedSuggestion=async(val)=>{
        console.log(val);
        const data=await fetch(YOUTUBE_GET_SEARCH_VIDEO_URL.replace(SEARCH_VAL, val));
        const json=await data.json();
        setSuggestionResultsList(json.items);
      }
      console.log(suggestionResulsList);
  return (
    <div className='col-span-11'><SearchResultCard data={suggestionResulsList}/></div>
  )
}

export default SearchResults;
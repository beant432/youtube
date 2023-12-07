const GOOGLE_API_KEY = "AIzaSyBjSxTYcf-xC9ACYIm4rHIJd_eug7pj75o";
export const ID='ID';
export const SEARCH_VAL='SEARCH_VAL';
export const CORS_URL='https://corsproxy.io/?';
export const YOUTUBE_VIDEOS_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=20&key=${GOOGLE_API_KEY}`;
export const YOUTUBE_GET_VIDEO_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${ID}&key=${GOOGLE_API_KEY}`;
export const YOUTUBE_SEARCH_API=`${CORS_URL}http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;
export const YOUTUBE_GET_SEARCH_VIDEO_URL = `${CORS_URL}https://youtube.googleapis.com/youtube/v3/search?q=${SEARCH_VAL}&maxResults=20&key=${GOOGLE_API_KEY}`;
export const YOUTUBE_GET_VIDEOS_LIST=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${ID}&key=${GOOGLE_API_KEY}`
export const LIVE_CHAT_COUNT=25;
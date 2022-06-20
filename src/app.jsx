import { StrictMode,useState,useEffect,useCallback} from 'react';
import "./app.css";
import SearchHeader from "./components/searchHeader/searchHeader.jsx";
import VideoMain from './components/video_Main/video_main';
import ApiUtil from "./util/apiUtil.js"
import axios from 'axios'

function App() {
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    timeout: 1000,
    params : {'key' : API_KEY}
  });
  const api = new ApiUtil(request);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(()=>{
    onInit();
  },[]);

  const onSearch = useCallback( (keyword) => {
    api
    .getSearchResults(keyword)
    .then((items) => {
      setVideos(items);
      setSelectedVideo(null);
    })
    .catch((error) => console.log("error", error));
  },[]);

  const onInit = useCallback(() => {
    api
        .getPopularVideoList() //
        .then((result) => {
          setVideos(result);
          setSelectedVideo(null);
        });
       
  },[])
  window.scrollTo(0,0);
  return (
    <StrictMode>
      <SearchHeader onSearch={onSearch} onInit={onInit}/>
      <VideoMain videos = {videos} selectedVideo = {selectedVideo} onSelect = {setSelectedVideo}/>
    </StrictMode>
  );
}

export default App;

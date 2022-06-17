import { StrictMode,useState,useEffect} from 'react';
import "./app.css";
import SearchHeader from "./components/searchHeader/searchHeader.jsx";
import VideoMain from './components/video_Main/video_main';
import ApiUtil from "./util/apiUtil.js"

function App() {
  const api = new ApiUtil();
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(()=>{
    onInit();
  },[]);

  const onSearch = (keyword) => {
    api
    .getSearchResults(keyword)
    .then((items) => {
      setVideos(items);
      setSelectedVideo(null);
    })
    .catch((error) => console.log("error", error));
  }

  const onInit = () => {
    api
        .getPopularVideoList() //
        .then((result) => {
          setVideos(result.items);
          setSelectedVideo(null);
        });
       
  }
  window.scrollTo(0,0);
  return (
    <StrictMode>
      <SearchHeader onSearch={onSearch} onInit={onInit}/>
      <VideoMain videos = {videos} selectedVideo = {selectedVideo} onSelect = {setSelectedVideo}/>
    </StrictMode>
  );
}

export default App;

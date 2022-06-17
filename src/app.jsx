import { StrictMode,useState} from 'react';
import "./app.css";
import SearchHeader from "./components/searchHeader/searchHeader.jsx";
import VideoMain from './components/video_Main/video_main';
import ApiUtil from './util/apiUtil';

function App() {
  const apiUtil = new ApiUtil();
  const [keyword, setKeyword] = useState('');

  return (
    <StrictMode>
      <SearchHeader setKeyword={setKeyword}/>
      <VideoMain  api = {apiUtil} keyword = {keyword}/>
    </StrictMode>
  );
}

export default App;

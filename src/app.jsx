import { StrictMode,useState} from 'react';
import "./app.css";
import SearchHeader from "./components/searchHeader/searchHeader.jsx";
import VideoMain from './components/video_Main/video_main';


function App() {

  const [keyword, setKeyword] = useState('');

  return (
    <StrictMode>
      <SearchHeader setKeyword={setKeyword}/>
      <VideoMain keyword = {keyword}/>
    </StrictMode>
  );
}

export default App;

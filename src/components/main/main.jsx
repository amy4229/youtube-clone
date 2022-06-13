import React,{useState } from "react";
import SearchHeader from "../searchHeader/searchHeader.jsx";
import VideoList from "../video_list/video_list.jsx";




const Main = () => {

   
   const [keyword, setKeyword] = useState('');
  
    return (
    <>
      <SearchHeader setKeyword={setKeyword}/>
      <VideoList keyword = {keyword}/>
    </>
  );
};

export default Main;

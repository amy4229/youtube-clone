import React, { useEffect, useState } from "react";
import VideoItem from "../video_item/video_item.jsx";
//import styles from "./video_list.module.css";

const VideoList = ({ api, keyword, onSelect}) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log(keyword, typeof keyword);
    if (!keyword || keyword.length === 0) {
      api
        .getPopularVideoList() //
        .then((result) => setVideos(result.items));
    } else {
      api
        .getSearchResults(keyword)
        .then((items) => {
          setVideos(items);
        })
        .catch((error) => console.log("error", error));
    }
  }, [keyword]);

  return (
    <>
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} onSelect={onSelect}/>
      ))}
    </>
  );
};

export default VideoList;

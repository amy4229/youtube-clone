import React from "react";
import VideoItem from "../video_item/video_item.jsx";
//import styles from "./video_list.module.css";


const VideoList = ({ videos, onSelect }) => {

  return (
    <>
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} onSelect={onSelect} />
      ))}
    </>
  );
};

export default VideoList;

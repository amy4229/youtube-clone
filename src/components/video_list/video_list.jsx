import React, { useEffect, useState } from "react";
import VideoItem from "../video_item/video_item.jsx";
import styles from "./video_list.module.css";
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const VideoList = (props) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const keyword = props.keyword;
    if (!keyword || keyword.length === 0) {
        console.log("fetch no keyword")
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=KR&key=${API_KEY}&maxResults=25&Authorization`, requestOptions)
        .then(response => response.json())
        .then(result => setVideos(result.items))
        .catch(error => console.log('error', error));
    } else {
        console.log("fetch with keyword")
      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=${API_KEY}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setVideos(result.items);
        })
        .catch((error) => console.log("error", error));
    }
  }, [props.keyword]);

  return (
    <div className={styles.videoList}>
      {videos.map((video) => (
        <VideoItem
          key={typeof (video.id) == "string" ? video.id : video.id.videoId}
          video={video}
        />
      ))}
    </div>
  );
};

export default VideoList;

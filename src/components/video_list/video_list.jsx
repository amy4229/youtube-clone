import React, { useEffect, useState } from 'react';
import VideoItem from '../video_item/video_item.jsx';
import styles from "./video_list.module.css";
import sampleData from "./sampleData.json";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const VideoList = () => {

    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
       /* fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=KR&key=${API_KEY}&Authorization&maxItems=20`, requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.items))
            .catch(error => console.log('error', error));*/
        
          setVideos(sampleData.items);

    },[]);
    
    return(
        <div className={styles.videoList}>
            {videos.map(video=><VideoItem video={video} key={video.id}/>)}
        </div>
    );
};

export default VideoList;
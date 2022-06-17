import React from "react";
import styles from "./video_play.module.css"
import {makeFomattedDateStr} from "../../util/stringUtil";

const VideoPlay = ({ selectedVideo }) => {
  const id = selectedVideo.id;
  const {title, channelTitle, description,publishedAt} = selectedVideo.snippet;
  console.log(id,title, channelTitle, description,publishedAt );
  const fomattedPublishedAt =  makeFomattedDateStr(publishedAt);
  return (
  <>
    <iframe className = {styles.video}
      id="player"
      type="text/html"
      src={`https://www.youtube.com/embed/${id}?autoplay=1&origin=http://example.com`}
      frameborder="0"
    />
    <span className={styles.title}>{title}</span>
    <span className={styles.channel}>{channelTitle}</span>
    <span className={styles.publishedAt}>{fomattedPublishedAt}</span>
    <pre className={styles.description}>{description}</pre>
  </>
  )
};

export default VideoPlay;

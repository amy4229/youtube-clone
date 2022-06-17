import React, { memo } from "react";
import styles from "./video_play.module.css";
import { makeFomattedDateStr } from "../../util/stringUtil";

const VideoPlay = memo(({ selectedVideo }) => {
  const id = selectedVideo.id;
  const { title, channelTitle, description, publishedAt } =
    selectedVideo.snippet;
  const fomattedPublishedAt = makeFomattedDateStr(publishedAt);
  return (
    <>
      <iframe
        className={styles.video}
        title="video player"
        id="player"
        type="text/html"
        src={`https://www.youtube.com/embed/${id}?autoplay=1&origin=http://example.com`}
      />
      <span className={styles.title}>{title}</span>
      <span className={styles.channel}>{channelTitle}</span>
      <span className={styles.publishedAt}>{fomattedPublishedAt}</span>
      <pre className={styles.description}>{description}</pre>
    </>
  );
});

export default VideoPlay;

import React from "react";
import VideoList from "../video_list/video_list";
import styles from "../video_Main/video_main.module.css";
import VideoPlay from "../video_play/video_play";

const VideoMain = ({ videos, selectedVideo, onSearch, onSelect }) => {
  let isSelected = selectedVideo ? styles.selected : "";
  return (
    <main className={styles.videoMain}>
      {selectedVideo && (
        <section className={styles.videoPlay}>
          <VideoPlay selectedVideo={selectedVideo}></VideoPlay>
        </section>
      )}
      <section className={styles.videoList + " " + isSelected}>
        <VideoList videos={videos} onSelect={onSelect} />
      </section>
    </main>
  );
};

export default VideoMain;

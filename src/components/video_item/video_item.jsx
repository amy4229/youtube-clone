import React from 'react';
import styles from '../video_item/video_item.module.css'

const VideoItem = (props) => {
    const publishAt = props.video.snippet.publishedAt.replaceAll(/[Z,T]/gi," ");
    return( 
        <article className={styles.videoItem} id={props.video.id}>
            <img className={styles.thumbnail} src={props.video.snippet.thumbnails.medium.url} alt='thumnail_image'></img>
            <div className={styles.title}>{props.video.snippet.title}</div>
            <div className={styles.publishAt}>{publishAt}</div>
            <div className={styles.channelTitle}>{props.video.snippet.channelTitle}</div>
        </article>
    );            
};

export default VideoItem;
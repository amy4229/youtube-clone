import React from 'react';
import styles from '../video_item/video_item.module.css';
import {unescapeString} from '../../util/stringUtil.js' 

const VideoItem = (props) => {
    const {publishedAt,thumbnails, title,channelTitle} = props.video.snippet;
    const publishAt = publishedAt.replaceAll(/[Z,T]/gi," ");
    return( 
        <article className={styles.videoItem}>
            <img className={styles.thumbnail} src={thumbnails.medium.url} alt='thumnail_image'></img>
            <div className={styles.title}>{unescapeString(title)}</div>
            <div className={styles.publishAt}>{publishAt}</div>
            <div className={styles.channelTitle}>{channelTitle}</div>
        </article>
    );            
};

export default VideoItem;
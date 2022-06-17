import React, { memo } from 'react';
import { makeFomattedDateStr, unescapeString } from '../../util/stringUtil';
import styles from '../video_item/video_item.module.css';

const VideoItem = memo((props) => {
    const selectedVideo = props.video;
    const {publishedAt,thumbnails, title,channelTitle} = props.video.snippet;
    const publishAt = makeFomattedDateStr(publishedAt);

    const onSelectVideo = () =>{
        props.onSelect(selectedVideo);
    }

    return( 
        <article className={styles.videoItem} onClick={onSelectVideo}>
            <img className={styles.thumbnail} src={thumbnails.medium.url} alt='thumnail_image'></img>
            <div className={styles.title}>{unescapeString(title)}</div>
            <div className={styles.publishAt}>{publishAt}</div>
            <div className={styles.channelTitle}>{channelTitle}</div>
        </article>
    );            
});

export default VideoItem;
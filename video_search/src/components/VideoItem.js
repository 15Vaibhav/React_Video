import React from 'react'
import './VideoItem.css'


const VideoItem=({video,onVideoSelect})=> {
  return (
    <div onClick={()=>onVideoSelect(video)} className="video-item item">
    <img  className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
    <div className="content">
    <div className="header">
    <h5>{video.snippet.title}</h5>
    </div>
    </div>
    </div>
  );
}

export default VideoItem

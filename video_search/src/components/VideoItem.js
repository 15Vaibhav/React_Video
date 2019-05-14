import React from 'react'
import './VideoItem.css'


const VideoItem=({video})=> {
  return (
    <div className="video-item item">
    <img  className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
    <div className="content">
    <div className="header">
    <h2 style={{color:'gray'}}>{video.snippet.title}</h2>
    </div>
    </div>
    </div>
  );
}

export default VideoItem

import React , {Component, useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import YoutubeVideo from 'react-youtube';
import "./Youtube.css";
import { youtubeKey } from "../privateStuff";

function Youtube()
{
    //const [currentVideo, setCurrentVideo] = useState(null);
    var currentVideo = null;
    class YoutubeVideoInfo 
    {
        constructor(videoId,videoTitle,channelTitle,Description){
            this.videoId = videoId;
            this.videoTitle = videoTitle;
            this.channelTitle = channelTitle;
            this.Description = Description;
        }
    }

    class VideoNode 
        {
            constructor(prev,video,next)
            {
                this.prev = prev;
                this.video = video;
                this.next = next;
            }
        }
    
    var search = require('youtube-search');
    
    function getYoutubeVideos(keywords)
    {
    var opts = {
        maxResults: 1,
        key: youtubeKey, // FIGURE OUT HOW TO DELETE THIS 
      };
      for(var i = 0; i < keywords.length; i++)
      {
        search(keywords[i], opts, function(err, results) {
            if(err) return console.log(err);
            results = results[0];
            var video = new YoutubeVideoInfo(results.id,results.title,results.channelTitle,results.description);
            arrayList.push(video);
          });
      }
    }

    // Sample Words for goodle API
    var sampleWords = ["pizza", "anime", "dance", "tiktok"];
    
    //  Sample Video input to work with the Youtube Video Output 
    var video1 = new YoutubeVideoInfo("QSPaL4aVjRo", "video1", "channel", "description");
    var video2 = new YoutubeVideoInfo("1qlrRmRTbVY", "video2", "channel", "description");
    var video3 = new YoutubeVideoInfo("7H6doOmS-eM", "video3", "channel", "description");
    var video4 = new YoutubeVideoInfo("8s3bdVxuFBs", "video4", "channel", "description");
   
    // Creating arrayList 
    var arrayList = [];

    // Adding sample videos to the list 
    arrayList.push(video1);
    arrayList.push(video2);
    arrayList.push(video3); 
    arrayList.push(video4);
    currentVideo = 0;
    // setCurrentVideo(head);
    function goNext ()
        {
            currentVideo++;
            currentVideo = currentVideo % arrayList.length;
            console.log(arrayList[currentVideo]);
            var lookingAtVideo = arrayList[currentVideo];
            var videoDiv = document.getElementById("video");
            videoDiv.src = "https://www.youtube.com/embed/" + lookingAtVideo.videoId;
            console.log(videoDiv);
        }
    function goPrev()
        {
            currentVideo--;
            if (currentVideo < 0)
            currentVideo = arrayList.length-1;
            var lookingAtVideo = arrayList[currentVideo];
            var videoDiv = document.getElementById("video");
            videoDiv.src = "https://www.youtube.com/embed/" + lookingAtVideo.videoId;
            console.log(lookingAtVideo.videoId);
            console.log(videoDiv);  
        }

    return (
        <div>
           <iframe id = "video" width="560" height="315" src="https://www.youtube.com/embed/8s3bdVxuFBs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Button id ="prev"  onClick={goPrev} className="changeVideo"> Prev Video </Button>
            <Button id ="next" onClick= {goNext} className="changeVideo"> Next Video </Button>
        </div>
    );
}
export default Youtube;
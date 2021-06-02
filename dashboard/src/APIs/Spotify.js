import React , {Component, useEffect, useState} from "react";
import './bootstrap.css';
import "./Spotify.css";
import "./dash.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import search from "youtube-search";
import { firebaseAPI, authDomain, databaseURL, projectId, storageBucket, messagingSenderId,
  appId, measurementId, spotifyID, spotifySecret}  from "../privateStuff";
function Spotify(props){
  
  
   /*var data = [];
   var songData = [];
   var songDataIDs = [];
    var firebase = require('firebase');

      const firebaseConfig = {
      apiKey: firebaseAPI, // Firebase API
      authDomain: authDomain,
      databaseURL: databaseURL,
      projectId: projectId,
      storageBucket: storageBucket,
      messagingSenderId: messagingSenderId,
      appId: appId,
      measurementId: measurementId, 
  };

  var db = firebase.firestore();
  db.collection('users')
  .onSnapshot((querySnapshot) => {
    querySnapshot.docChanges().forEach(change => {
      if (change.type === 'added') {
      
        data.push(change.doc.data().question1);
  data.push(change.doc.data().question2);
  data.push(change.doc.data().question3);
  data.push(change.doc.data().question4);
  data.push(change.doc.data().question5);
  data.push(change.doc.data().question6);
  data.push(change.doc.data().question7);
  data.push(change.doc.data().question8);
  data.push(change.doc.data().question9);
  console.log(data);
      }
      if (change.type === 'modified') {
        
        searchSongs(change.doc.data().question1);
        searchSongs(change.doc.data().question2);
        searchSongs(change.doc.data().question3);
        searchSongs(change.doc.data().question4);
        searchSongs(change.doc.data().question5);
        searchSongs(change.doc.data().question6);
        searchSongs(change.doc.data().question7);
        searchSongs(change.doc.data().question8);
        searchSongs(change.doc.data().question9);


        data.push(change.doc.data().question1);
  data.push(change.doc.data().question2);
  data.push(change.doc.data().question3);
  data.push(change.doc.data().question4);
  data.push(change.doc.data().question5);
  data.push(change.doc.data().question6);
  data.push(change.doc.data().question7);
  data.push(change.doc.data().question8);
  data.push(change.doc.data().question9);
  console.log(data, "NEW DATA");
      }
      if (change.type === 'removed') {
         
        
        data.push(change.doc.data().question1);
  data.push(change.doc.data().question2);
  data.push(change.doc.data().question3);
  data.push(change.doc.data().question4);
  data.push(change.doc.data().question5);
  data.push(change.doc.data().question6);
  data.push(change.doc.data().question7);
  data.push(change.doc.data().question8);
  data.push(change.doc.data().question9);
      }
    });
  });*/
  
    var Spotify = require('node-spotify-api');
    var spotify = new Spotify({
        id: spotifyID, // FIGURE OUT HOW TO HIDE THIS
        secret: spotifySecret, // FIGURE OUT HOW TO HIDE THIS
      });

   


    var songData = [];
    var songDataIDs = [];
      spotify.search({ type: 'track', query:'beyonce' }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            }
        var tempData = data.tracks.items;
        songData = tempData;
        for ( var i = 0; i <songData.length;i++)
            {
                songDataIDs.push(songData[i].id);
            }
        console.log(songDataIDs);
        });
    
  
    
    var toggleDisplay;
    if(props.QuizDone)
      {
        toggleDisplay= "block";
      }
    else {
      toggleDisplay = "none";
    }

  
    function searchSongs(input)
      {
        if(input === null || input === undefined)
          input = "hits";
        console.log(input);
        spotify.search({ type: 'playlist', query: input }, function(err, data) {
          if (err) {
              console.log('Error occurred: ' + err);
              }
          console.log(data.playlists.items);
         
          for (var i  =0; i <(Math.floor(Math.random() * Math.floor(5))) + 1; i++)
          {
            var randomNum = (Math.floor(Math.random() * Math.floor(data.playlists.items.length)));
            var randomTrack = data.playlists.items[randomNum].href;
                  spotify
                    .request(randomTrack)
                    .then(function(data) {
                      var randomNum2 = (Math.floor(Math.random() * Math.floor(data.tracks.items.length)));
                      var song = data.tracks.items[randomNum2].track.id;
                      console.log(data.tracks.items[randomNum2].track.name);
                      songDataIDs.push(song);
                    })
                  .catch(function(err) {
                    console.error('Error occurred: ' + err); 
                  });
          }
          
          });
      }
      
        var currentSong1 = 0;
        var currentSong2 = 1;
        var currentSong3 = 2;
        console.log(songDataIDs, "ids");
        var songDataIDs = ["3nVDOYBJpdCkRR6r1DbZum", "7htRKAHrQ3EzMYy24wUdA6", "3zCbbePDsZQJ0iHkqGXSjG", "49ySwzAyvxcNXOkOP6ZB1L", "0wJIFdZTLwl4ZQ6RNLOxQN", "7tpLBCGQi9oFrfVuaY9gjk"];
        function nextSong()
            {
                currentSong1++;
                currentSong1 = currentSong1 % songDataIDs.length;
                var songDiv1 = document.getElementById("songDiv1");
                songDiv1.src = "https://open.spotify.com/embed/track/" + songDataIDs[currentSong1];

                currentSong2++;
                currentSong2 = currentSong2 % songDataIDs.length;
                var songDiv = document.getElementById("songDiv2");
                songDiv.src = "https://open.spotify.com/embed/track/" + songDataIDs[currentSong2];

                currentSong3++;
                currentSong3 = currentSong3 % songDataIDs.length;
                var songDiv = document.getElementById("songDiv3");
                songDiv.src = "https://open.spotify.com/embed/track/" + songDataIDs[currentSong3];
            }
        function prevSong()
            {
                currentSong1--;
                if(currentSong1 < 0)
                    currentSong1 = songDataIDs.length-1;
                var songDiv1 = document.getElementById("songDiv");
                songDiv1.src = "https://open.spotify.com/embed/track/" + songDataIDs[currentSong1];

                currentSong2--;
                if(currentSong2 < 0)
                    currentSong2 = songDataIDs.length-1;
                var songDiv2 = document.getElementById("songDiv");
                songDiv2.src = "https://open.spotify.com/embed/track/" + songDataIDs[currentSong2];

                currentSong3--;
                if(currentSong3 < 0)
                    currentSong3 = songDataIDs.length-1;
                var songDiv3 = document.getElementById("songDiv");
                songDiv3.src = "https://open.spotify.com/embed/track/" + songDataIDs[currentSong3];
            }
           
    return (
        <div id="Spotify" style={{display:toggleDisplay}}>

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>



      <div class="container mt-3">
        <div class="d-flex justify-content-center row">
            <div class="col-md-5 col-lg-5">
              <div class="question bg-purp p-3 border-bottom text-white">
                    <h1 class="text-center">Results</h1>
                </div>
            </div>
      </div></div>
<br/>
      <div class="container mt-3">
        <div class="d-flex row float-center">
          <div class="col-lg-4 col-md-4">
            <div class="question bg-purp p-3 border-bottom text-white"><div src="https://open.spotify.com/embed/track/49ySwzAyvxcNXOkOP6ZB1L"  id = "track1">
            <iframe className="track" id="songDiv1" src="" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div></div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div class="question bg-purp p-3 border-bottom text-white"><div id="track2" src="https://open.spotify.com/embed/track/7CAwQlGYc6oIoeaux7FyGE">
            <iframe className="track" id="songDiv2" src="" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div></div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div class="question bg-purp p-3 border-bottom text-white"><div src="https://open.spotify.com/embed/track/52UhbyxKVBspOpjX0CvkS5"  id="track3">
            <iframe className="track" id="songDiv3" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div></div>
          </div>
        </div>
        <br/>
        
        <button type="button" class="btn btn-outline-light p-3 m-3" onClick={nextSong}>Next</button>
        <button type="button" class="btn btn-outline-light p-3 m-3" onClick={prevSong}>Prev</button>
        
        </div>
        </div>
    );
}
export default Spotify;

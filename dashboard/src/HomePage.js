import React from 'react';
import './App.css';
import Youtube from "./APIs/Youtube";
import Spotify from "./APIs/Spotify";
import TVSuggestions from "./APIs/TVSugesstions";
import MainQuestionPage from "./APIs/questionsReactSpotify/MainQuestionPage";
import Login from "./Login.js";
import { firebaseAPI, authDomain, databaseURL, projectId, storageBucket, messagingSenderId,
  appId, measurementId}  from "./privateStuff";
import { ReactComponent as Logo } from "./Logo.svg"
import { ReactComponent as Clouds } from "./Clouds.svg"


function App() {
  var firebase = require('firebase');
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }
  var db = firebase.firestore();

  var UserDoc = db.collection("users").doc("VicSample");
    return (
      <div className="App">
        <MainQuestionPage UserDoc={UserDoc}/>
      </div>
    );
}

export default App;

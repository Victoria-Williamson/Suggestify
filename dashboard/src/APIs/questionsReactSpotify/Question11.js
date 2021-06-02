import React from 'react';
import "./bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./question.css";

function Question11(props) {
    var setWithMerge = props.UserDoc.set({
        question11: "Drake",
    }, {merge: true});
  return (
    <div>
      
    </div>
  );
}

export default Question11;

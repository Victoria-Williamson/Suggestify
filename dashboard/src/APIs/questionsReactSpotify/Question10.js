import React from 'react';
import "./bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./question.css";

function Question10(props) {
    var setWithMerge = props.UserDoc.set({
        question10: "Nicki Minaj",
    }, {merge: true});
  return (
    <div>
      
    </div>
  );
}

export default Question10;

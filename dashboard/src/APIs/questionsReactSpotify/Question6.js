import React from 'react';
import "./bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./question.css";

function Question6(props) {
    function clickFunction(e){
        if(e.target.name === "piano")
        var setWithMerge = props.UserDoc.set({
            question6: "piano",
        }, {merge: true});
        else if(e.target.name === "guitar")
        {
            var setWithMerge = props.UserDoc.set({
                question6: "guitar",
            }, {merge: true});
        }
        else if(e.target.name === "drums")
        {
            var setWithMerge = props.UserDoc.set({
                question6: "drums",
            }, {merge: true});
        }
        else if(e.target.name === "vocal")
        {
            var setWithMerge = props.UserDoc.set({
                question6: "acoustic",
            }, {merge: true});
        }
        else if(e.target.name === "soundboard")
        {
            var setWithMerge = props.UserDoc.set({
                question6: "acoustic",
            }, {merge: true});
        }
    }
  return (
    <div>
      <div class="container mt-5">
        <div class="d-flex justify-content-center row">
        <div class="col-md-10 col-lg-10 qheight">
                <div class="border">
                    <div class="question bg-purp p-3 border-bottom">
                        <div class="d-flex flex-row justify-content-between align-items-center mcq text-white">
                            <h4>Q 6</h4>
                        </div>
                    </div>
                    <div class="question bg-purp p-3 border-bottom">
                        <div class="d-flex flex-row align-items-center text-white question-title">
                            <h3 class="text-question">Question 6</h3>
                            <h5 class="mt-1 ml-2">Please select an instrument of preference.</h5>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="piano" value="opt1" onClick={e => clickFunction(e)}>Piano/keyboard</button>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="guitar" value="opt2" onClick={e => clickFunction(e)}>Guitar</button>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="drums" value="opt3" onClick={e => clickFunction(e)}> <span>Drums</span></button>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="vocal" value="opt4" onClick={e => clickFunction(e)}> <span>Vocal Chords</span></button>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="soundboard" value="opt4" onClick={e => clickFunction(e)}> <span>Soundboard</span></button>
                        </div>
                        <br></br>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Question6;

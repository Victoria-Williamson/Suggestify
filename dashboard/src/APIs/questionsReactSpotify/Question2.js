import React from 'react';
import "./bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./question.css";

function Question2(props) {
   function clickFunction(e){
        if(e.target.name === "relax")
        var setWithMerge = props.UserDoc.set({
            question2: "relax",
        }, {merge: true});
        else if(e.target.name === "hype")
        {
            var setWithMerge = props.UserDoc.set({
                question2: "rock",
            }, {merge: true});
        }
        else if(e.target.name === "party")
        {
            var setWithMerge = props.UserDoc.set({
                question2: "party",
            }, {merge: true});
        }
        else if(e.target.name === "study")
        {
            var setWithMerge = props.UserDoc.set({
                question2: "study",
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
                            <h4>Q 2</h4>
                        </div>
                    </div>
                    <div class="question bg-purp p-3 border-bottom">
                        <div class="d-flex flex-row align-items-center text-white question-title">
                            <h3 class="text-question">Question 2</h3>
                            <h5 class="mt-1 ml-2">What reasons do you usually have to listen to music?</h5>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="relax" value="opt1" onClick={e => clickFunction(e)}>To relax</button>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="hype" value="opt2" onClick={e => clickFunction(e)}>To get H Y P E D</button>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="party" value="opt3" onClick={e => clickFunction(e)}> <span>To jam out</span></button>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="focus" value="opt4" onClick={e => clickFunction(e)}> <span>To get focused</span></button>
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

export default Question2;

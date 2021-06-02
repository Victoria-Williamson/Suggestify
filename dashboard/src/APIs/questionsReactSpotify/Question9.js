import React from 'react';
import "./bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./question.css";

function Question9(props) {
    function clickFunction(e){
        if(e.target.name === "opt1")
        var setWithMerge = props.UserDoc.set({
            question9: "heavy metal",
        }, {merge: true});
        else if(e.target.name === "opt2")
        {
            var setWithMerge = props.UserDoc.set({
                question9: "relaxing",
            }, {merge: true});
        }
        else if(e.target.name === "opt3")
        {
            var setWithMerge = props.UserDoc.set({
                question9: "2000s top hits",
            }, {merge: true});
        }
        else if(e.target.name === "opt4")
        {
            var setWithMerge = props.UserDoc.set({
                question9: "karaoke",
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
                            <h4>Q 9</h4>
                        </div>
                    </div>
                    <div class="question bg-purp p-3 border-bottom">
                        <div class="d-flex flex-row align-items-center text-white question-title">
                            <h3 class="text-question">Question 9</h3>
                            <h5 class="mt-1 ml-2">What kind of music intensity do you prefer?</h5>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="opt1" value="opt1" onClick={e => clickFunction(e)}>Hardcore head-shaking bops</button>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="opt2" value="opt2" onClick={e => clickFunction(e)}>Relaxed, subtle vibes</button>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="opt3" value="opt3" onClick={e => clickFunction(e)}> <span>Something that reminds me of the good old days</span></button>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="opt4" value="opt4" onClick={e => clickFunction(e)}> <span>Something that I can't help but sing along to</span></button>
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

export default Question9;

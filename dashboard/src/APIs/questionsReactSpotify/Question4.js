import React from 'react';
import "./bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./question.css";

function Question4(props) {
   function clickFunction(e){
        if(e.target.name === "melody")
        var setWithMerge = props.UserDoc.set({
            question4: "anthem",
        }, {merge: true});
        else if(e.target.name === "lyrics")
        {
            var setWithMerge = props.UserDoc.set({
                question4: "lyrics",
            }, {merge: true});
        }
        else if(e.target.name === "voice")
        {
            var setWithMerge = props.UserDoc.set({
                question4: "acoustic",
            }, {merge: true});
        }
        else if(e.target.name === "genre")
        {
            var setWithMerge = props.UserDoc.set({
                question4: "casual",
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
                            <h4>Q 4</h4>
                        </div>
                    </div>
                    <div class="question bg-purp p-3 border-bottom">
                        <div class="d-flex flex-row align-items-center text-white question-title">
                            <h3 class="text-question">Question 4</h3>
                            <h5 class="mt-1 ml-2">What is the most important consideration when it comes to choosing music?</h5>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="melody" value="opt1" onClick={e => clickFunction(e)}>The melody/tune</button>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="lyrics" value="opt2" onClick={e => clickFunction(e)}>The lyrics and their meaning</button>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="voice" value="opt3" onClick={e => clickFunction(e)}> <span>The singer's voice</span></button>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="genre" value="opt4" onClick={e => clickFunction(e)}> <span>The genre</span></button>
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

export default Question4;

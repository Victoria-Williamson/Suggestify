import React from 'react';
import "./bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./question.css";


function Question1(props) {
    function clickFunction(e){
        console.log(e.target.name)
        if(e.target.name === "pop")
        {
            console.log(props.UserDoc, "user");
        var setWithMerge = props.UserDoc.set({
            question1: "pop",
        }, {merge: true});
    }
        else if(e.target.name === "rock")
        {
            var setWithMerge = props.UserDoc.set({
                question1: "rock",
            }, {merge: true});
        }
        else if(e.target.name === "classical")
        {
            var setWithMerge = props.UserDoc.set({
                question1: "Classical",
            }, {merge: true});
        }
        else if(e.target.name === "rap")
        {
            var setWithMerge = props.UserDoc.set({
                question1: "rap",
            }, {merge: true});
        }
    }
  return (
    <div>
      <div class="container mt-5">
        <div class="d-flex justify-content-center row">
            <div class="col-md-10 col-lg-10">
                <div class="border">
                    <div class="question bg-purp p-3 border-bottom">
                        <div class="d-flex flex-row justify-content-between align-items-center mcq text-white">
                            <h4>Q 1</h4>
                        </div>
                    </div>
                    <div class="question bg-purp p-3 border-bottom">
                        <div class="d-flex flex-row align-items-center text-white question-title">
                            <h3 class="text-question">Q.</h3>
                            <h5 class="mt-1 ml-2">What is your favorite genre of music?</h5>
                        </div>
                        <br></br>
                        <div class="ans ml-2" >
                            <button type="button" className="btn btn-opt" name="pop" value="opt1" onClick={e => clickFunction(e)}>Pop</button>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="rock" value="opt2" nClick={e => clickFunction(e)}>Rock</button>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="classical" value="opt3" nClick={e => clickFunction(e)}> <span>Classical</span></button>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="rap" value="opt4" nClick={e => clickFunction(e)}> <span>Rap</span></button>
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

export default Question1;

import React from 'react';
import "./bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./question.css";

function Question7(props) {
    function clickFunction(e){
        if(e.target.name === "opt1")
        var setWithMerge = props.UserDoc.set({
            question7: "studying",
        }, {merge: true});
        else if(e.target.name === "opt2")
        {
            var setWithMerge = props.UserDoc.set({
                question7: "exercising",
            }, {merge: true});
        }
        else if(e.target.name === "opt3")
        {
            var setWithMerge = props.UserDoc.set({
                question7: "reading",
            }, {merge: true});
        }
        else if(e.target.name === "opt4")
        {
            var setWithMerge = props.UserDoc.set({
                question7: "chilling",
            }, {merge: true});
        }
        else if(e.target.name === "opt5")
        {
            var setWithMerge = props.UserDoc.set({
                question7: "partying",
            }, {merge: true});
        }
        else if(e.target.name === "opt6")
        {
            var setWithMerge = props.UserDoc.set({
                question7: "showering",
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
                            <h4>Q 7</h4>
                        </div>
                    </div>
                    <div class="question bg-purp p-3 border-bottom">
                        <div class="d-flex flex-row align-items-center text-white question-title">
                            <h3 class="text-question">Question 7</h3>
                            <h5 class="mt-1 ml-2">What activities are you usually doing when you listen to music?</h5>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="opt1" value="opt1" onClick={e => clickFunction(e)}>Studying</button>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="opt2" value="opt2" onClick={e => clickFunction(e)}>Exercising</button>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="opt3" value="opt3" onClick={e => clickFunction(e)}> <span>Reading</span></button>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="opt4" value="opt4" onClick={e => clickFunction(e)}> <span>Surfing the web</span></button>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="opt5" value="opt4" onClick={e => clickFunction(e)}> <span>Partying</span></button>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="opt6" value="opt4" onClick={e => clickFunction(e)}> <span>Showering</span></button>
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

export default Question7;

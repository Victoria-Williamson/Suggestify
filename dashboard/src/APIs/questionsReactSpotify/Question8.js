import React from 'react';
import "./bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./question.css";

function Question8(props) {
    function clickFunction(e){
        if(e.target.name === "opt1")
        var setWithMerge = props.UserDoc.set({
            question8: "new music",
        }, {merge: true});
        else if(e.target.name === "opt2")
        {
            var setWithMerge = props.UserDoc.set({
                question8: "2000s top hits",
            }, {merge: true});
        }
        else if(e.target.name === "opt3")
        {
            var setWithMerge = props.UserDoc.set({
                question8: "2010s top hits",
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
                            <h4>Q 8</h4>
                        </div>
                    </div>
                    <div class="question bg-purp p-3 border-bottom">
                        <div class="d-flex flex-row align-items-center text-white question-title">
                            <h3 class="text-question">Question 8</h3>
                            <h5 class="mt-1 ml-2">How likely are you to try something new?</h5>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="opt1" value="opt1" onClick={e => clickFunction(e)}>Very likely, I love trying new things</button>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="opt2" value="opt2" onClick={e => clickFunction(e)}>Not likely at all, I know what I like and stick with it.</button>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="opt3" value="opt3" onClick={e => clickFunction(e)}> <span>Somewhat likely</span></button>
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

export default Question8;

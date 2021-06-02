import React from 'react';
import "./bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./question.css";

function Question3(props) {
     function clickFunction(e){
        if(e.target.name === "edm")
        var setWithMerge = props.UserDoc.set({
            question3: "edm",
        }, {merge: true});
        else if(e.target.name === "top50")
        {
            var setWithMerge = props.UserDoc.set({
                question3: "top 50",
            }, {merge: true});
        }
        else if(e.target.name === "casual")
        {
            var setWithMerge = props.UserDoc.set({
                question3: "casual",
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
                            <h4>Q 3</h4>
                        </div>
                    </div>
                    <div class="question bg-purp p-3 border-bottom">
                        <div class="d-flex flex-row align-items-center text-white question-title">
                            <h3 class="text-question">Question 3</h3>
                            <h5 class="mt-1 ml-2">What best describes your music tastes?</h5>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="edm" value="opt1" onClick={e => clickFunction(e)}>Eclectic and varied</button>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="top50" value="opt2" onClick={e => clickFunction(e)}>Top 50s</button>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="casual" value="opt3" onClick={e => clickFunction(e)}> <span>I tend to stick to a few select genres</span></button>
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

export default Question3;

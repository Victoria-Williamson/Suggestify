import React from 'react';
import "./bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./question.css";

function Question5(props) {
    function clickFunction(e){
        if(e.target.name === "yes")
        var setWithMerge = props.UserDoc.set({
            question5: "karaoke",
        }, {merge: true});
        else if(e.target.name === "no")
        {
            var setWithMerge = props.UserDoc.set({
                question5: "beats",
            }, {merge: true});
        }
        else if(e.target.name === "sometimes")
        {
            var setWithMerge = props.UserDoc.set({
                question5: "anthems",
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
                            <h4>Q 5</h4>
                        </div>
                    </div>
                    <div class="question bg-purp p-3 border-bottom">
                        <div class="d-flex flex-row align-items-center text-white question-title">
                            <h3 class="text-question">Question 5</h3>
                            <h5 class="mt-1 ml-2">Do you usually sing along when listening to your music?</h5>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="yes" value="opt1" onClick={e => clickFunction(e)}>Yes</button>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="no" value="opt2" onClick={e => clickFunction(e)} >No</button>
                        </div>
                        <br></br>
                        <div class="ans ml-2">
                            <button type="button" class="btn btn-opt" name="sometimes" value="opt3" onClick={e => clickFunction(e)}> <span>Sometimes</span></button>
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

export default Question5;

import React , {Component, useEffect, useState} from "react";
import { Button, Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./question.css";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";
import Question5 from "./Question5";
import Question6 from "./Question6";
import Question7 from "./Question7";
import Question8 from "./Question8";
import Question9 from "./Question9";
import Question10 from "./Question10";
import Question11 from "./Question11";
import Spotify from "../Spotify";

function MainQuestionPage(props) {
  var UserDoc = props.UserDoc;
  const [index,setIndex] = useState(0);
  const [changeView,setChangeView] = useState(false);
  const [currentdata,setData] = useState({question1: "rap"});
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  function toggleView()
  {
    var questionsDiv = document.getElementById("question");
    if (changeView)
    {
      console.log(data);
      questionsDiv.style.display = "block";
      setChangeView(false);
    }
      
    else {
      console.log(data);
      questionsDiv.style.display = "none";
      setChangeView(true);
    }  
  }
  var data = {question1: "rap"};
  props.UserDoc.onSnapshot(function(doc) {
    data = doc.data();
    console.log("Current data: ", doc.data());
});

  return (
    <div>
      <div id="question">
      <Carousel activeIndex={index} onSelect={handleSelect} pause="false" indicators="false" interval="10000" >
        <Carousel.Item>
        <Question1 UserDoc={UserDoc}/>
        </Carousel.Item>
        <Carousel.Item>
        <Question2 UserDoc={UserDoc}/>
          </Carousel.Item>
          <Carousel.Item>
          <Question3 UserDoc={UserDoc}/>
          </Carousel.Item>
          <Carousel.Item>
          <Question4 UserDoc={UserDoc}/>
          </Carousel.Item>
          <Carousel.Item>
          <Question5 UserDoc={UserDoc}/>
          </Carousel.Item>
          <Carousel.Item>
          <Question6 UserDoc={UserDoc}/>
          </Carousel.Item>
          <Carousel.Item>
          <Question7 UserDoc={UserDoc}/>
          </Carousel.Item>
          <Carousel.Item>
          <Question8 UserDoc={UserDoc}/>
          </Carousel.Item>
          <Carousel.Item>
          <Question9 UserDoc={UserDoc}/>
          </Carousel.Item>
      </Carousel>
      </div>
      <Spotify UserDoc={UserDoc} QuizDone={changeView} data={data}/>
      <Button id="switch" onClick={toggleView}> switch to see selections </Button>
    </div>
  );
}

export default MainQuestionPage;

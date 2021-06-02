import React , {Component, useEffect, useState} from "react";
// import "./login.css";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as Logo } from "./Logo.svg"
import { ReactComponent as Clouds } from "./Clouds.svg"
import {BrowserRouter , Route, Switch,Link} from "react-router-dom"; // Allows different webpages to be made
import history from "./history";
function Login(){
    const [reload,setReload] = useState(false);
    function Redirect(){
        history.push('/MusicExplorer');
        window.location.reload();
    }
    document.body.style.overflow = 'hidden';
    return(
        <div id="loginDiv" >
		
		<div id="stars">
			<span id="star1" alt="Star1" />
			<span id="star2" alt="Star2" />
			<span id="star3" alt="Star3" />
			<span id="star4" alt="Star4" />
			<span id="star5" alt="Star5" />
		
		</div>
            <div id="movingClouds"/>
            <Logo class="logo" id="logo1" alt="Logo"/>
            <Clouds  id="cloud1" alt="clouds"/>
            <Clouds  id="cloud2" alt="clouds"/>
            <Logo class="logo" id="logo2" alt="Logo"/>
            <div id="movingIsland1"/>
	        <button class="login" onClick={Redirect}> Login</button>
		</div>
    )
}
export default Login;
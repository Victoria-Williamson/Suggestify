import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './HomePage';
import App from "./App"
import {BrowserRouter , Route, Switch,Link} from "react-router-dom"; // Allows different webpages to be made
import * as serviceWorker from './serviceWorker';
import Login from "./Login";
import history from "./history";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history = {history}>
            <Switch>
             <Route path="/" component={Login} exact/>
             <Route path="/MusicExplorer" component={HomePage}/>
             <Route path="/YoutubeExplorer" component={HomePage}/>
             <Route path="/ShowAndMovieExplorer" component ={HomePage}/>
            <Route component={Error}/>
           </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

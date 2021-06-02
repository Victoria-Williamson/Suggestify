import React , {Component, useEffect, useState} from "react";
import "./TVSuggestions.css";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function TVSuggestions()
{
    // Declerations of necessary react useStates and default values if needed
    const [results, setResults] = useState(null);
    const[names,setNames] = useState(["New+Girl","The+Good+Place","The+Boys","Community","Avengers","The+Office","Lucifer"]);
    const [infoResults,setInfoResults] = useState([]);
    const [list,setList] = useState([]);
   
    async function fetchFromFindMoviesAndShowsAPI(parm)
        {
            const response = await fetch("https://rapidapi.p.rapidapi.com/lookup?term=beyonce&country=us", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
                    "x-rapidapi-key": "1ec320a6acmshd1140e7f79a3cc5p17cd72jsn65ffcd865b42"
                }
            });
            const json = await response.json(); // Stores the returned values
            setResults(json);
            console.log(json) // View => Developer Tools to see the value 
        }
        async function fetchFromMovieOrShowInfo(name)
        {
                console.log("NAME", name);
                const response = await fetch( "http://www.omdbapi.com/?t=" + name + "&apikey=521a4077");
                const json = await response.json(); // Stores the returned values
                setInfoResults(json);
                var info = {
                    title: json.Title,
                    poster: json.Poster,
                    plot: json.Plot,
                    rated: json.Rated,
                    year: json.Year,
                    genre: json.Genre,
                    rating: json.imdbRating,
                }
              list.push(info);
              setList(list);
              console.log(list);
            // Retrives General Information to display to a user about the television show or movie 
            // Needed Info from TV SHOW ** .Type !== "movie"
                // .Plot => Show text
                // .Year => Show text
                // .Rated => Show Rating 
                // .Poster => Show TV Poster
                // .imdb Raiting => Show Votes
                // .imdbVotes => Show Number of Votes
                // . Genre => Show the Type of Show 
            // Needed Info from MOVIE *** .Type !== "TVshow"
                // .Plot => Show Text
                // .Poster => Show Img
                // .Rated => Show Raiting 
                // .Year => Show Year
                // .imdb Raiting => Show Votes
                // .imdbVotes => Show Number of Votes
                // . Genre => Show the Type of Movie
                
            
        }
    
    // Used to call the async functions so the fetch function can be called using the "useState" components without refreshing the entire page
    // Commenting out so we dont kill the credits :) 
   /* useEffect(() => {
        fetchFromFindMoviesAndShowsAPI(null);
    }, []);
    
 
   /*useEffect(() => {
       names.forEach(function(name){
           console.log(name);
        fetchFromMovieOrShowInfo(name);
       })
}, []);
*/

    var movie1Index = 0;
    var movie2Index = 1;
    var movie3Index = 3;
    // Not necessary, but can primarly use a single function afterwards to organized and set up the information returned in a propper CSS,HTML way that will
    // be show
    function goNext()
        {
            movie1Index++;
            movie1Index = movie1Index % list.length;
            movie2Index++;
            movie2Index = movie2Index % list.length;
            movie3Index++;
            movie3Index = movie3Index % list.length;

            var title = document.getElementById("movieTitle1");
            var poster = document.getElementById("moviePoster1");
            var year = document.getElementById("year1");
            var description = document.getElementById("descriptionTitle1");
            var ratingTitle = document.getElementById("RatingTitle1");
            var genreTitle = document.getElementById("genreTitle1");

            title.innerHTML = "TITLE " + list[movie1Index].title;
            poster.src = list[movie1Index].poster;
            year.innerHTML= "YEAR " + list[movie1Index].year;
            description.innerHTML = "DESCRIPTION\n" + list[movie1Index].plot;
            ratingTitle.innerHTML ="RATING " + list[movie1Index].rating;
            genreTitle.innerHTML = "GENRE" + list[movie1Index].genre;
            
            var title = document.getElementById("movieTitle2");
            var poster = document.getElementById("moviePoster2");
            var year = document.getElementById("year2");
            var description = document.getElementById("descriptionTitle2");
            var ratingTitle = document.getElementById("RatingTitle2");
            var genreTitle = document.getElementById("genreTitle2");

            title.innerHTML = "TITLE " + list[movie2Index].title;
            poster.src = list[movie2Index].poster;
            year.innerHTML= "YEAR " + list[movie2Index].year;
            description.innerHTML = "DESCRIPTION\n" + list[movie2Index].plot;
            ratingTitle.innerHTML ="RATING " + list[movie2Index].rating;
            genreTitle.innerHTML = "GENRE" + list[movie2Index].genre;

            var title = document.getElementById("movieTitle3");
            var poster = document.getElementById("moviePoster3");
            var year = document.getElementById("year3");
            var description = document.getElementById("descriptionTitle3");
            var ratingTitle = document.getElementById("RatingTitle3");
            var genreTitle = document.getElementById("genreTitle3");

            title.innerHTML = "TITLE " + list[movie3Index].title;
            poster.src = list[movie3Index].poster;
            year.innerHTML= "YEAR " + list[movie3Index].year;
            description.innerHTML = "DESCRIPTION\n" + list[movie3Index].plot;
            ratingTitle.innerHTML ="RATING " + list[movie3Index].rating;
            genreTitle.innerHTML = "GENRE" + list[movie3Index].genre;



        }
    function goPrev()
        {
            movie1Index--;
            if(movie1Index < 0)
                movie1Index = list.length-1;
            movie2Index--;
            if(movie2Index < 0)
                movie2Index = list.length-1;
            movie3Index--;
            if(movie3Index < 0)
                movie3Index = list.length-1;

            var title = document.getElementById("movieTitle1");
            var poster = document.getElementById("moviePoster1");
            var year = document.getElementById("year1");
            var description = document.getElementById("descriptionTitle1");
            var ratingTitle = document.getElementById("RatingTitle1");
            var genreTitle = document.getElementById("genreTitle1");

            title.innerHTML = "TITLE " + list[movie1Index].title;
            poster.src = list[movie1Index].poster;
            year.innerHTML= "YEAR " + list[movie1Index].year;
            description.innerHTML = "DESCRIPTION\n" + list[movie1Index].plot;
            ratingTitle.innerHTML ="RATING " + list[movie1Index].rating;
            genreTitle.innerHTML = "GENRE" + list[movie1Index].genre;
var title = document.getElementById("movieTitle2");
            var poster = document.getElementById("moviePoster2");
            var year = document.getElementById("year2");
            var description = document.getElementById("descriptionTitle2");
            var ratingTitle = document.getElementById("RatingTitle2");
            var genreTitle = document.getElementById("genreTitle2");

            title.innerHTML = "TITLE " + list[movie2Index].title;
            poster.src = list[movie2Index].poster;
            year.innerHTML= "YEAR " + list[movie2Index].year;
            description.innerHTML = "DECSRIPTION\n" + list[movie2Index].plot;
            ratingTitle.innerHTML ="RATING " + list[movie2Index].rating;
            genreTitle.innerHTML = "GENRE" + list[movie2Index].genre;

 var title = document.getElementById("movieTitle3");
            var poster = document.getElementById("moviePoster3");
            var year = document.getElementById("year3");
            var description = document.getElementById("descriptionTitle3");
            var ratingTitle = document.getElementById("RatingTitle3");
            var genreTitle = document.getElementById("genreTitle3");

            title.innerHTML = "TITLE " + list[movie3Index].title;
            poster.src = list[movie3Index].poster;
            year.innerHTML= "YEAR " + list[movie3Index].year;
            description.innerHTML = "DECSRIPTION\n" + list[movie3Index].plot;
            ratingTitle.innerHTML ="RATING " + list[movie3Index].rating;
            genreTitle.innerHTML = "GENRE" + list[movie3Index].genre;

        }
    function importInformation()
    {
        var infoDiv = document.getElementById("infoDiv"); // Retrives the API element
        
            // infoDiv.appendChild(HTMLELEMENT) // puts an HTML element inside of something of something. so like <div id="info Div"> <HTML ELEMENT/> <div/> has to be done w/ a previously created element in the return statement HTML
            // var item = document.createElement(type) // creates an element of a type. Types = "div", "img", etc. https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
                // item.setAttribute(attribute, value) // sets id or className for an object when it gets added. Really good for arbitary elements b/c this will correspond to the CSS 
                                                    // https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
                // Also, if you have the item and just want to set something to it style wise you can go to item.style.<type> = <value>. like for example ite.style.display = "none";
    }

    /* Always have to start of return and end the return with correcsponding div tags */
    /* Creates the infoDiv which is refrenced above. Also addressing #infoDiv allows you to add CSS to the div if you import the CSS file into this */
    return (
        <div>
                <Button onClick={goNext}>  Next Movie</Button>
                <Button onClick={goPrev}>  Prev Movie</Button>
                <div id="movieTitle1" className="movie1"> MOVIE TITLE </div>
                <div id="movieTitleDiv1"className="movie1"/>
                <img id="moviePoster1" className="movie1" src = "https://m.media-amazon.com/images/M/MV5BMTkxMjYyNzgwMl5BMl5BanBnXkFtZTgwMTE3MjYyMTE@._V1_SX300.jpg"/>
                <div id="movieInfoDiv1" className="movie1"/>
                <div id="year1" className="movie1">YEAR </div>
                <div id="descriptionTitle1" className="movie1">DESCRIPTION </div>
                <div id="RatingTitle1" className="movie1">RATING </div>
                <div id="genreTitle1" className="movie1"> GENRE</div>

                <div id="movieTitle2" className="movie2"> MOVIE TITLE </div>
                <div id="movieTitleDiv2"className="movie2"/>
                <img id="moviePoster2" className="movie2"src = "https://m.media-amazon.com/images/M/MV5BMTkxMjYyNzgwMl5BMl5BanBnXkFtZTgwMTE3MjYyMTE@._V1_SX300.jpg"/>
                <div id="movieInfoDiv2" className="movie2"/>
                <div id="year2" className="movie2">YEAR </div>
                <div id="descriptionTitle2" className="movie2">DESCRIPTION </div>
                <div id="RatingTitle2" className="movie2">RATING </div>
                <div id="genreTitle2" className="movie2"> GENRE</div>

                <div id="movieTitle3" className="movie3"> MOVIE TITLE </div>
                <div id="movieTitleDiv3"className="movie3"/>
                <img id="moviePoster3" className="movie3" src = "https://m.media-amazon.com/images/M/MV5BMTkxMjYyNzgwMl5BMl5BanBnXkFtZTgwMTE3MjYyMTE@._V1_SX300.jpg"/>
                <div id="movieInfoDiv3" className="movie3"/>
                <div id="year3" className="movie3">YEAR </div>
                <div id="descriptionTitle3" className="movie3">DESCRIPTION </div>
                <div id="RatingTitle3" className="movie3">RATING </div>
                <div id="genreTitle3" className="movie3"> GENRE</div>

        </div>
    );
}
export default TVSuggestions;
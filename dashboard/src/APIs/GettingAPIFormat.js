import React , {Component, useEffect, useState} from "react";

function GettingAPIFormat()
{
    // Declerations of necessary react useStates and default values if needed
    const [input1, setinput1] = useState(null);
    const [input2, setinput2] = useState(null);
    const [input3, setinput3] = useState(null);
    const [input4, setinput4] = useState(null);
    const [input5, setinput5] = useState(null);

    async function fetchFromAPI(parm)
        {
            const response = await fetch("url" + param+ ".com"); // Makes a fetch call to the API url. Use whatever data you pass through into the fetch request
            const json = await response.json(); // Stores the returned values
            console.log(json) // View => Developer Tools to see the value 
            var responseInfo = json.info; // Look at url's rest responses or console.log(json) to see how you need to acess the necearry information
            setinput1(response); // Use the react useState function to set this value into the input
        }
    
    // Used to call the async functions so the fetch function can be called using the "useState" components without refreshing the entire page
    useEffect(() => {
        fetchFromAPI(info);
    }, []);

    // Not necessary, but can primarly use a single function afterwards to organized and set up the information returned in a propper CSS,HTML way that will
    // be show
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
            <div id ="infoDiv"/>
        </div>
    );
}
export default GettingAPIFormat;
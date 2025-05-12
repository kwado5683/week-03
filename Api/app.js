//To do: Iwant to fetch data from an API

//fetching data from Rando fox
//the location of our data is: https://randomfox.ca/floof
//the data structure is: JSON(object)

//step 1: establish a commication channel betweeno ur app and the API
async function fetchFoxes(){
    //we use the fetch() mehod to set up a connection between our app and an API (external or our own server API)
    const response = await fetch("https://randomfox.ca/floof");
// async and await will make sure we get a response immediately rather than a promise.

// console.log(response);
// the response is going to be unreadable at this stage.
//so we use parse the response into json
const data = await response.json();
console.log(data); //remember to always add the await key word to get the response immediately
//since we only want the image, we can wrangle the data to filter just the property we want
const wrangledImage = data.image;
return wrangledImage
}

// fetchFoxes();

//step 2: create DOM elements to contain the images
const foxesContainer = document.getElementById("foxes-container");

function createFoxImages(foxSrc){
    const foxImg = document.createElement("img");
    foxImg.src = foxSrc;
    foxImg.alt = " picture of a lovely fox";
    foxesContainer.appendChild(foxImg);
}

//we want to put together both functions: one create the img element and the other adds the src value
async function createFoxImageAndAddSrc(){
    const fetchedData = await fetchFoxes();
    createFoxImages(fetchedData);
}

createFoxImageAndAddSrc();
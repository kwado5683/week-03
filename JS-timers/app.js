console.log("hello world");
//first i have to connect to the fox api
// const imgsrc = "https://randomfox.ca/floof"
const fetchFox = async function(){
    const response = await fetch("https://randomfox.ca/floof");
    const fetchedData = await response.json();
    const imageUrl = fetchedData.image;
    return imageUrl;
};

//get DOM element
const button = document.getElementById("button");
const container = document.getElementById("container");

//Event listener
const clicked = button.addEventListener("click", async function(){
   const image = document.createElement("img");
   image.src = await fetchFox();
   container.appendChild(image);


   setTimeout(function(){
    container.removeChild(image);
}, 5000);



});


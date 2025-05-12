console.log('hello world');

//first we establish a connection
async function fetchdog(){
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const fetchedData = await response.json();
    const data = fetchedData.message;
    return data;

};

fetchdog();

//step2 we create a DOM element to contain the images
const dogContainer = document.querySelector("#dog-container");

function createDogImage(holding){
    const image = document.createElement("img");
    image.src = holding;
    image.alt = "Here is an awesome dog";
    dogContainer.appendChild(image);
}

async function createAndAddImage(){
    const alldata = await fetchdog();
    createDogImage(alldata);
};

createAndAddImage();



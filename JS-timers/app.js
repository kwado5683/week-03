console.log("hello world");

const button = document.getElementById("button");
const container = document.getElementById("container");

const clicked = button.addEventListener("click",function(){
   const p = document.createElement("p");
   p.innerHTML = "you just clicked a button";
   container.appendChild(p);


   setTimeout(function(){
    container.removeChild(p);
}, 5000);



});


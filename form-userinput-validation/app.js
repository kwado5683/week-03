console.log('Hllo world');

// first we locate the element and assign it to a variable
const mainForm = document.querySelector("form");

//create an eventlistener to pick up our data when its submitted.
mainForm.addEventListener("submit",function(event){
    event.preventDefault();
    const formData = new FormData(mainForm);
    const formValue = Object.fromEntries(formData);

    console.log(formValue);
})
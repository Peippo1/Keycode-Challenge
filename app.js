// button.addEventListener("key",()=>{
//     keyboardEvent.code () 
// });



// no action

const keyValueId =document.getElementById("keyValue");
const keyCodeId = document.getElementById("keyCode");
const charId = document.getElementById("char");
const heading = document.getElementById('heading');

window.addEventListener("keypress",(event) =>{
    keyValueId.innerHtml = event.key;
    keyCodeId.innerHTML = event.code;
    charId.innerHTML = event.key;
    heading.innerHTML = event.key;
    console.log(event);
});
console.log(document.getElementById("keyValue"));
// window is targetted (window is default value)


// create differentation with 

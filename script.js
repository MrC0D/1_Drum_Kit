const btn = document.querySelector("#A");
const btn2 = document.querySelector("#S");
const btn3 = document.querySelector("#D");
const btn4 = document.querySelector("#F");
const btn5 = document.querySelector("#G");
const btn6 = document.querySelector("#H");
const btn7 = document.querySelector("#J");
const btn8 = document.querySelector("#K");
const btn9 = document.querySelector("#L");

//const btn2 = 

/*------key down events------*/
btn.addEventListener("keydown", (event) => {
    playSound(event.key);
});

btn2.addEventListener("keydown", (event) => {
    playSound(event.key);
});


btn3.addEventListener("keydown", (event) => {
    playSound(event.key);
});


btn4.addEventListener("keydown", (event) => {
    playSound(event.key);
});

btn5.addEventListener("keydown", (event) => {
    playSound(event.key);
});

btn6.addEventListener("keydown", (event) => {
    playSound(event.key);
});

btn7.addEventListener("keydown", (event) => {
    playSound(event.key);
});

btn8.addEventListener("keydown", (event) => {
    playSound(event.key);
});

btn9.addEventListener("keydown", (event) => {
    playSound(event.key);
});

/*
reproducir sonidos cuando se hace "click"
*/

btn.addEventListener("click",()=>{
    playSound("a");
})

btn2.addEventListener("click",(event)=>{
    //playSound("");
    playSound("s");
})

btn3.addEventListener("click",()=>{
    playSound("d");
})

btn4.addEventListener("click",()=>{
    playSound("f");
})

btn5.addEventListener("click",()=>{
    playSound("g");
})

btn6.addEventListener("click",()=>{
    playSound("h");
})

btn7.addEventListener("click",()=>{
    playSound("j");
})

btn8.addEventListener("click",()=>{
    playSound("k");
})

btn9.addEventListener("click",()=>{
    playSound("l");
})



var random=Math.floor(Math.random()*100);
var random2=Math.ceil(((Math.random()*100) * random)%10);

var rn=document.querySelector("body");

rn.style.setProperty("--bg-color", "#"+String(random2)+"ff"+String(random));

/**/
function playSound(k) {
    let a_btn = document.getElementById(k);
    a_btn.play();
}

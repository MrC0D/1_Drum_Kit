const btn = document.querySelectorAll("button");

//const btn2 = 

/**/
btn.addEventListener("keydown", (event) => {
    playSound(event.key);
});


btn.addEventListener("click",()=>{
    playSound(btn.id.toLowerCase());
})

/*
btn2.addEventListener("keydown", (event) => {
    playSound(event.key);
});
*/



/**/
function playSound(k) {
    let a_btn = document.getElementById(k);
    a_btn.play();
}

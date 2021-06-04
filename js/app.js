"use strict"

const pupils = document.querySelectorAll('.pupil');

document.addEventListener('mousemove', (e)=>{
    let x = `${e.clientX*100/window.innerWidth}%`;
    let y = `${e.clientY*100/window.innerHeight}%`;
    for (let i = 0; i<pupils.length; i++){
        pupils[i].style.left = `${x}`;
        pupils[i].style.top = `${y}`
        pupils[i].style.transform = `translate(-${x}, -${y})`;
    }
    
});

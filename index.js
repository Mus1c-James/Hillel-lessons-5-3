"use strict";
 
const textBlock = document.getElementById('text');
const btnElement = document.getElementById('btn');
 
btnElement.addEventListener('click', () => {
    textBlock.classList.toggle('color-red'); 
}); 

 
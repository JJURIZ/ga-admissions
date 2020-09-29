"use strict";

let blackShirt = document.getElementById('blackShirt'),
    whiteShirt = document.getElementById('whiteShirt'),
    profilePic = document.getElementById('img__self-portrait-me');

blackShirt.addEventListener('click', function() {
    profilePic.src = "/assets/images/Uriz1.png";
})

whiteShirt.addEventListener('click', function() {
    profilePic.src = "/assets/images/Uriz2.png";
})
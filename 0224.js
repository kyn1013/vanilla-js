const title = document.getElementsByTagName("h2")[0];
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = {
    hadleMouseOn: function() {
    	title.innerText = "The Mouse is here!";
        title.style.color=colors[Math.floor(Math.random()*colors.length)];
    },

    hadleMouseOut: function() {
    	title.innerText = "The Mouse is gone!";
        title.style.color=colors[Math.floor(Math.random()*colors.length)];
    },

    hadleMouseClick: function() {
    	title.innerText = "That was a right click!";
        title.style.color=colors[Math.floor(Math.random()*colors.length)];
    },

    hadleChangeSize: function() {
    	title.innerText = "You just resized!";
        title.style.color=colors[Math.floor(Math.random()*colors.length)];
    },

};


title.addEventListener("mouseenter",superEventHandler.hadleMouseOn);
title.addEventListener("mouseleave",superEventHandler.hadleMouseOut);
title.addEventListener("contextmenu",superEventHandler.hadleMouseClick);
window.addEventListener("resize",superEventHandler.hadleChangeSize);





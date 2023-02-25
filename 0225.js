const display = document.getElementsByTagName("body")[0];

function change(){
    if(innerWidth>700){
        display.classList.remove("P");
        display.classList.remove("R");
        display.classList.add("Y");
    }else if(innerWidth<=700 && innerWidth>=400){
        display.classList.remove("Y");
        display.classList.remove("P");
        display.classList.add("R");
    }else{
        display.classList.remove("Y");
        display.classList.remove("R");
        display.classList.add("P");
    }
}

window.addEventListener("resize",change);









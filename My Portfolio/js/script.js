//* Nav Menu

const sideMenu = document.getElementById("side-menu");

function openMenu(){
    sideMenu.style.right = "0";
}

function closeMenu(){
    sideMenu.style.right = "-50%";
}

//* Language Toggler

const check = document.querySelector(".toggler");

check.addEventListener("click",language);

function language(){
    
    let id = check.checked;

    if (id == true){
        location.href = "es/index.html";
    }else{
        location.href = "../index.html"
    }
}
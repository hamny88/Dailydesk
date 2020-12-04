const settingBtn = document.querySelector(".settingBtn"),
    dropdown = document.querySelector(".dropdown-content"),
    deleteUsr = document.querySelector(".deleteUsr"),
    fixphoto = document.querySelector(".fixphoto"),
    about = document.querySelector(".about")    ;


function handleSettingBtn() {
    dropdown.classList.toggle("showing");
   
}
function handleDeleteUsr() {
    const userName = localStorage.getItem(USER_LS);
    if(userName !== null){
        localStorage.removeItem(USER_LS);
        localStorage.removeItem(TODOS_LS);
        window.location.reload();
    } else {
        alert("There is no user to deleted");
    }
}
function handleFixphoto() {

}

function closeClick() {
    document.querySelector(".popup").classList.toggle("showing");
    document.querySelector(".overlay").classList.toggle("overlay");
}

function paintPopup() {
    const popUpWindow = document.createElement("div");
    popUpWindow.innerHTML="&#9654 This App's background images are from UNSPLASH API.\
    Due to the API request limit, if you reload the pages too much you can use default background image.\
    <br></br>\
    &#9654; Background images are random, so when bright images are loaded it maybe difficult to see the white titles. If you have problem about it, please reload.\
    <br></br>\
    &#9654; Weather information is from OpenWeather API.\
    <br></br>\
    Contact : ellie.hahm0502@gmail.com\
    ";
    popUpWindow.classList.add("popup");
    popUpWindow.classList.add("popup-position");
    body.appendChild(popUpWindow);

    document.querySelector(".popup").innerHTML += '<button class="closeBtn" onclick="closeClick()">X</button>';

}

function paintOverlay() {
     //overlay
     const overlay = document.createElement("div");
     overlay.classList.add("overlay");
     overlay.classList.toggle("showing");
     body.append(overlay);
}

function handleAbout() {
    //show
    const popUp = document.querySelector(".popup");
    popUp.classList.toggle("showing");
    paintOverlay();
}

function init() {
    paintPopup();
    settingBtn.addEventListener("click",handleSettingBtn);
    deleteUsr.addEventListener("click",handleDeleteUsr);
    fixphoto.addEventListener("click",handleFixphoto);
    about.addEventListener("click",handleAbout);

}

init();
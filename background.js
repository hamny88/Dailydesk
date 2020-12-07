const body = document.querySelector("body"),
    unsplash = config.background_KEY,
    IMG_NUMBER = 5,
    OBJECT = '(sea||lake||mountain||flower||grass||sky||night)',
    ORIENTATION = 'landscape',
    COLOR = '(blue||black||brown||purple)',
    image = new Image(),
    IMG_LS = "currentImage"
    ;
let GL_location = "Country,City";

function randomImage() {
    console.log("call the Image")
    fetch(`https://api.unsplash.com/photos/random?client_id=${unsplash}&query=${OBJECT}&orientation=${ORIENTATION}&color=${COLOR}&fit=fill`
    ).then(function(response){
    return response.json();    
    })
    .then(function(json) {
        console.log(json)
        const imgPath = json.urls.regular;
        //const country = json.location.name;
        GL_location = json.location.name;
        console.log(GL_location)
        // const image = new Image();
        const location = document.createElement("span");
        location.innerText = GL_location;
        location.classList.add("location");
        image.src = imgPath;
        image.classList.add("opacityZero");
        console.log(location)
        body.appendChild(location);
    });
   
}
function handleLoad(event) {
    console.log("load...")
    image.classList.remove("opacityZero");
    image.classList.add("bgImage");
    body.prepend(image);
}

function paintLocation(location) {
    const imgLoc = document.createElement("span");
    imgLoc.innerHTML = location;
    imgLoc.classList.add("location");
    body.append(imgLoc);
}

function loadImage() {
    const savedImage = localStorage.getItem(IMG_LS);
    if(savedImage !== null) {
        console.log(savedImage)
        const parsedImg = JSON.parse(savedImage);
        console.log(parsedImg)
        image.src = parsedImg.src;
        const parsedLoc = parsedImg.location;
        paintLocation(parsedLoc);
    } else {
        randomImage();
    }
}

function init() {
    loadImage();
    image.addEventListener("load",handleLoad);
    //tempImage();
    //randomImage();
}

init();
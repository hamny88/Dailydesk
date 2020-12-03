const body = document.querySelector("body");
const unsplash ='hSuIAagnBXHey0OzESdK-ZUj3TIfUT-BIoBrJFybmZs';
const IMG_NUMBER = 5;


// function randomImage() {
//     fetch(`https://api.unsplash.com/photos/random?client_id=${unsplash}&query=(tree||lake||mountain||flower||grass||sky)&orientation=landscape&fit=clamp`).then(function(response){
//     return response.json();    
//     })
//     .then(function(json) {
//         console.log(json)
//         const imgPath = json.urls.regular;
//         const country = json.location.name;
 
//         console.log(country)
//         const image = new Image();
//         const location = document.createElement("span");
//         location.innerText = country;
//         location.classList.add("location");
//         image.src = imgPath;
//         image.classList.add("opacityZero");

//         image.addEventListener("load",event => {
//             console.log("load...")
//             var imgTag = document.querySelector('img');
//             var isLoaded = imgTag.complete && imgTag.naturalHeight !== 0;
//             image.classList.remove("opacityZero");
//             image.classList.add("bgImage");
//         });
//         body.prepend(image);
//         body.prepend(location);
//     });
// }

function tempImage() {
    const tempIMG = new Image();
     tempIMG.src = "images/landscape2.jpg";
     tempIMG.classList.add("opacityZero");
    window.addEventListener("load",event => {
        console.log("load...")
        var imgTag = document.querySelector('img');
        var isLoaded = imgTag.complete && imgTag.naturalHeight !== 0;
        tempIMG.classList.remove("opacityZero");
        tempIMG.classList.add("bgImage");
    });
    body.prepend(tempIMG);
}

function init() {
    
    tempImage();
    //randomImage();
}

init();
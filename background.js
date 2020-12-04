const body = document.querySelector("body");
const unsplash = config.background_KEY;
const IMG_NUMBER = 5;
const OBJECT = '(tree||lake||mountain||flower||grass||sky)';
const ORIENTATION = 'landscape';
const COLOR = '(green||blue||black||brown||purple)';

// function randomImage() {
//     fetch(`https://api.unsplash.com/photos/random?client_id=${unsplash}&query=${OBJECT}&orientation=${ORIENTATION}&color=${COLOR}&fit=fill`
//     ).then(function(response){
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
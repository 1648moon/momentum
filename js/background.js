const images = [
    "0.JPG",
    "1.JPG",
    "2.JPG",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const image = document.createElement("img");
// image.src = `img/${chosenImage}`;
let imageUrl = `url(img/${chosenImage})`;

//document.body.appendChild(image);

document.body.style.backgroundImage = imageUrl;
document.body.style.backgroundSize = "cover";




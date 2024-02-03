const images = [
  "0.JPG",
  "1.JPG",
  "2.JPG",
  "3.JPG",
  "4.JPG",
  "5.JPG",
  "6.JPG",
  "7.JPG",
  "8.JPG",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
let imageUrl = `url(img/${chosenImage})`;

document.body.style.backgroundImage = imageUrl;
document.body.style.backgroundSize = "cover";

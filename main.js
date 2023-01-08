let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let image = document.getElementById("image");
let backgroundColor = document.querySelectorAll('.container .card');


const nikeImgs = ['http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png', 'https://pngimg.com/uploads/running_shoes/running_shoes_PNG5785.png', 'https://pngimg.com/uploads/running_shoes/running_shoes_PNG5800.png']

button1.addEventListener("click", function() {
  image.src = nikeImgs[0];
  backgroundColor.style.background = '#1BBFE9';
});

button2.addEventListener("click", function() {
  image.src = nikeImgs[1];
  backgroundColor.style.background = '#ff3a68';
});

button3.addEventListener("click", function() {
  image.src = nikeImgs[2];
  backgroundColor.style.background = '#0804818';
});

var widths = [270, 140, 190];

for (var i = 0; i < nikeImgs.length; i++) {
  image.src = nikeImgs[i];
  image.style.width = widths[i] + "px";
}

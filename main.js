let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let image = document.getElementById("image");

const nikeImgs = ['http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png', 'https://pngimg.com/uploads/running_shoes/running_shoes_PNG5785.png', 'https://pngimg.com/uploads/running_shoes/running_shoes_PNG5800.png']

button1.addEventListener("click", function() {
  image.src = nikeImgs[0];
});

button2.addEventListener("click", function() {
  image.src = nikeImgs[1];
});

button3.addEventListener("click", function() {
  image.src = nikeImgs[2];
});

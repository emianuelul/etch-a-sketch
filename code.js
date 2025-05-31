const canvas = document.querySelector(".canvas");
const canvasSide = canvas.offsetWidth - 8;

const resizeBtn = document.querySelector("#resizeBtn");
let pixelCountW = 16;

initCanvas(pixelCountW);
let pixels = document.querySelectorAll(".pixel");

// =============== FUNCTIONS =================
function initCanvas(width){
    for(let i = 0; i < width; i++){
        for(let j = 0; j < width; j++){
            let pixel = document.createElement("div");
            pixel.classList.add(`${i}-${j}`);
            pixel.classList.add("pixel");
            pixel.style.width = `${canvasSide / width}px`;
            pixel.style.height = `${canvasSide / width}px`;
            canvas.appendChild(pixel);
        }
    }
}

function setCanvasWidth(){
    const newWidth = parseInt(prompt("What size x width do you want your canvas to be?"));
    if(newWidth > 100){
        newWidth = 100;
    }

    for(const pixel of pixels){
        canvas.removeChild(pixel);
    }
    pixelCountW = newWidth;
    initCanvas(pixelCountW);
    pixels = document.querySelectorAll(".pixel");
    console.log(pixels)
}
// =========== EVENT LISTENERS ===============

canvas.addEventListener("click", (event) => {
    const target = event.target;

    target.style.backgroundColor = "black";
})


resizeBtn.addEventListener('click', () => setCanvasWidth());






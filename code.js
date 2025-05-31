const canvas = document.querySelector(".canvas");
const canvasStyle = getComputedStyle(canvas);
const canvasSide = parseInt(canvasStyle.width) - 2 * parseInt(canvasStyle.borderWidth);

let isHoldingMouseButton = false;

console.log(canvasSide);

const resizeBtn = document.querySelector('#resizeBtn');
const clearBtn = document.querySelector('#clearBtn');

let pixelCountW = 16;
initCanvas(pixelCountW);

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
    pixels = document.querySelectorAll(".pixel");
    console.log(pixels)
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () =>{
            if(pixel.style.backgroundColor === 'black')
                return;
            pixel.style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
        })
        pixel.addEventListener('mouseleave', () => {
            if(pixel.style.backgroundColor === 'black')
                return
            pixel.style.backgroundColor = 'white';
        })
    })
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
}
// =========== EVENT LISTENERS ===============
canvas.addEventListener('mousedown', (event) => {
    const target = event.target;

    isHoldingMouseButton = true;
    console.log(isHoldingMouseButton);

    target.style.backgroundColor = "black";
})

canvas.addEventListener('mouseup', () => {
    isHoldingMouseButton = false;
})

canvas.addEventListener('mouseover', (event) => {
    if(isHoldingMouseButton){
        event.target.style.backgroundColor = "black";
    }
    else
        return;
})



resizeBtn.addEventListener('click', () => setCanvasWidth());

clearBtn.addEventListener('click', () => {
    for(const pixel of pixels){
        pixel.style.backgroundColor = 'white';
    }
})
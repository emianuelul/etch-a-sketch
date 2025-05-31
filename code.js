const canvas = document.querySelector(".canvas");
const canvasStyle = getComputedStyle(canvas);
const canvasSide = parseInt(canvasStyle.width) - 2 * parseInt(canvasStyle.borderWidth);

let isHoldingMouseButton = false;
let crazyModeChecked = false;

let eraserOn = false;

const resizeBtn = document.querySelector('#resizeBtn');
const clearBtn = document.querySelector('#clearBtn');
const eraserBtn = document.querySelector('#eraser');
const crazyCheck = document.querySelector('input[name=crazy-mode]')
const crazyDiv = document.querySelector('.checkbox')

let pixelCountW = 16;
initCanvas(pixelCountW);

// =============== FUNCTIONS =================
function hoverOverPixel(){
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () =>{
            if(pixel.style.backgroundColor != 0 && pixel.style.backgroundColor !== 'white'){
                return
            }
            else
                pixel.style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
        })
        pixel.addEventListener('mouseleave', () => {
            if(pixel.style.backgroundColor !== 'rgba(0, 0, 0, 0.25)')
                return
            pixel.style.backgroundColor = 'white';
        })
    })
}

function initCanvas(width){
    for(let i = 0; i < width; i++){
        for(let j = 0; j < width; j++){
            let pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.style.width = `${canvasSide / width}px`;
            pixel.style.height = `${canvasSide / width}px`;
            canvas.appendChild(pixel);
        }
    }
    pixels = document.querySelectorAll(".pixel");
    hoverOverPixel();
}

function clearCanvas(){
    for(const pixel of pixels){
        pixel.style.backgroundColor = 'white';
    }
}

function setCanvasWidth(){
    
    let newWidth = parseInt(prompt("What size in pixels do you want your canvas to be?\n Introduce only one number."));
    if(newWidth > 128){
        newWidth = 128;
    }

    if(newWidth < 1){
        newWidth = 1;
    }

    if(isNaN(newWidth)){
        return;
    }

    for(const pixel of pixels){
        canvas.removeChild(pixel);
    }

    pixelCountW = newWidth;
    initCanvas(pixelCountW);
}

function paintPixel(event){
    const target = event.target;

    if(eraserOn){
        target.style.backgroundColor = 'white';
    }
    else{
        if(crazyModeChecked){
            const r = Math.floor(Math.random() * 256) + 1;
            const g = Math.floor(Math.random() * 256) + 1;
            const b = Math.floor(Math.random() * 256) + 1;

            target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }   
        else{
        target.style.backgroundColor = 'black';
        }
    }
   
}

// =========== EVENT LISTENERS ===============

canvas.addEventListener('mousedown', (event) => {
    isHoldingMouseButton = true;
    
    paintPixel(event);
})

canvas.addEventListener('mouseup', () => {
    isHoldingMouseButton = false;
})

canvas.addEventListener('mouseover', (event) => {
    if(isHoldingMouseButton){
        paintPixel(event);
    }
    else
        return;
})

canvas.addEventListener('mouseleave', () => isHoldingMouseButton = false)

resizeBtn.addEventListener('click', () => setCanvasWidth());

clearBtn.addEventListener('click', clearCanvas)

crazyCheck.addEventListener('change', () => {
    if(crazyModeChecked){
        crazyDiv.classList.remove('selected');
        crazyModeChecked = false;
    }
    else{
        crazyDiv.classList.add('selected');
        crazyModeChecked = true;
    }
})

eraser.addEventListener('click', () => {
    if(eraserOn){
        eraser.classList.remove('selected')
        eraserOn = false;
    }
    else{
        eraser.classList.add('selected')
        eraserOn = true;
    }
})
const canvas = document.querySelector(".canvas");
const canvasSide = canvas.offsetWidth - 8;

let pixelCountW = 16;


for(let i = 0; i < pixelCountW; i++){
    for(let j = 0; j < pixelCountW; j++){
        let pixel = document.createElement("div");
        pixel.classList.add(`${i}-${j}`);
        pixel.classList.add("pixel");
        pixel.style.width = `${canvasSide / pixelCountW}px`
        pixel.style.height = `${canvasSide / pixelCountW}px`;
        canvas.appendChild(pixel);
    }
}

const pixels = document.querySelectorAll(".pixel");
console.log(pixels)
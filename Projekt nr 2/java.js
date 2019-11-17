document.addEventListener('DOMContentLoaded', appStart)

let canvas
let ctx
let mouseClicked=false
let mouseReleased = true
function appStart() {
    // get canvas
    canvas = document.querySelector('#canvas')
    document.querySelector('#darken').addEventListener('click',() => darkenImage())
    document.querySelector('#brighten').addEventListener('click', ()=>brightenImage())
    document.querySelector('#contrast').addEventListener('click' , ()=>contrastFilter())
    document.addEventListener("click", onMouseClick, false);
    document.addEventListener("mousemove", onMouseMove, false);
    ctx = canvas.getContext('2d')
    drawCanvasImage()
}
function contrastFilter (amount = 10) {
    const canvasData = ctx.getImageData(0, 0, 400,300)
    for (let i = 0; i < canvasData.data.length; i += 4) {
      const r = canvasData.data[i]
      const g = canvasData.data[i + 1]
      const b = canvasData.data[i + 2]
  
      const avg = (r + g + b) / 3
      if (avg <= 127) {
        amount = -amount
      }
      canvasData.data[i] += amount
      canvasData.data[i + 1] += amount
      canvasData.data[i + 2] += amount
    }
    ctx.putImageData(canvasData, 0, 0)
    console.log(canvasData.data)    
    
  }
  
function onMouseClick(e) {
    mouseClicked = !mouseClicked;
}
function onMouseMove(e) {
    if (mouseClicked) {
        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, 7.5, 0, Math.PI * 2, false);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#fff";
        ctx.stroke();
    }
}

function drawCanvasImage() {
    const image = new Image()
    image.src = 'zdjecie.jpg'
    image.addEventListener('load', ()=> {
        ctx.drawImage(image, 0, 0, 400, 300)
    })
}

function darkenImage(amount = 30) {
    const canvasData = ctx.getImageData(0, 0, 400, 300)
    for(let i = 0; i<canvasData.data.length; i++) {
        canvasData.data[i] -= amount
    }
    ctx.putImageData(canvasData, 0, 0)
}
function brightenImage(amount = 30){
    canvasData = ctx.getImageData(0,0,400,300)
    for(let i =0; i<canvasData.data.length; i++){
        canvasData.data[i] +=amount;
    }
    ctx.putImageData(canvasData , 0 ,0)
}
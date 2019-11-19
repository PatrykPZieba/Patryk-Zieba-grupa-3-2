document.addEventListener('DOMContentLoaded', appStart)
  let mouseClicked=false
  let mouseReleased = true
  const  canvas = document.querySelector('#canvas')
  const ctx = canvas.getContext('2d');
  canvas.width = 800;
  canvas.height = 600;
  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  let clickState =0;
  let btn = document.querySelector("#disable")
function appStart() {
    document.querySelector('#darken').addEventListener('click',() => darkenImage())
    document.querySelector('#brighten').addEventListener('click', ()=>brightenImage())
    document.querySelector('#contrast').addEventListener('click' , ()=>contrastFilter())
    document.querySelector('#blur').addEventListener('click' , ()=>blurFilter())
    document.querySelector('#line').addEventListener('click' , ()=>activateLine())
    document.querySelector('#circle').addEventListener('click' , ()=>activateCircle())
    document.querySelector('#rectangle').addEventListener('click' , ()=>activateRect())
    document.querySelector('#clear').addEventListener('click' , ()=>clearCanvas())
    drawCanvasImage()
}
function clearCanvas(){
  ctx.clearRect(0,0,800,600)
}


function blurFilter() {
    const canvasData = ctx.getImageData(200, 150, 400, 300)
    for( let i = 0; i < canvasData.data.length; i+=4) {        
      canvasData.data[i] = (canvasData.data[i] + canvasData.data[i+4])/2
      canvasData.data[i+1] = (canvasData.data[i+1] + canvasData.data[i+5])/2
      canvasData.data[i+2] = (canvasData.data[i+2] + canvasData.data[i+6])/2
    }
    ctx.putImageData(canvasData, 200, 150)
  }
function contrastFilter (amount = 10) {
    const canvasData = ctx.getImageData(200, 150, 400,300)
    for (let i = 0; i < canvasData.data.length; i += 2) {
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
    ctx.putImageData(canvasData, 200, 150)
    console.log(canvasData.data)    
    
}
function activateCircle(){
    function draw(e) {
        if(!isDrawing) return;
        ctx.beginPath();
        ctx.arc(e.offsetX, e.offsetY, 7.5, 0, Math.PI * 2, false);
        ctx.lineWidth = 5;
        ctx.strokeStyle = x;
        ctx.stroke();
      }
      canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
      });
      canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);
}
function activateLine(){
    function draw(e) {
        if(!isDrawing) return;
        ctx.lineWidth = 5;
        ctx.strokeStyle = x;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
        
      }
      canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
      });
      canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);
}
function activateRect(){
    function draw(e) {
        if(!isDrawing) return;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.fillStyle = x;
        ctx.fillRect(lastX , lastY , 6 ,6)
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
        
      }
      canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
      });
      canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);
}
        
  
function color(obj) {
    switch (obj.id) {
        case "green":
            x = "green";
            break;
        case "blue":
            x = "blue";
            break;
        case "red":
            x = "red";
            break;
        case "yellow":
            x = "yellow";
            break;
        case "orange":
            x = "orange";
            break;
        case "black":
            x = "black";
            break;
        case "white":
            x = "white";
            break;
    }}

function drawCanvasImage() {
    const image = new Image()
    image.src = 'zdjecie.jpg'
    image.addEventListener('load', ()=> {
        ctx.drawImage(image, 200,150 , 400, 300)
    })
}

function darkenImage(amount = 30) {
    const canvasData = ctx.getImageData(200, 150, 400, 300)
    for(let i = 0; i<canvasData.data.length; i++) {
        canvasData.data[i] -= amount
    }
    ctx.putImageData(canvasData, 200, 150)
}
function brightenImage(amount = 30){
    canvasData = ctx.getImageData(200,150,400,300)
    for(let i =0; i<canvasData.data.length; i++){
        canvasData.data[i] +=amount;
    }
    ctx.putImageData(canvasData , 200 ,150)
}
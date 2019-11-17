document.addEventListener('DOMContentLoaded' , appStart)

let canvas
let ctx
function appStart(){
    canvas = document.querySelector('#Canvas')
    document
    .querySelector('#darken')
    .addEventListener('click' , ()=> darkenImage())
    ctx = canvas.getContext('2d')
    drawCanvasImage()
}
function drawCanvasImage(){
    const image = new Image()
    image.src = 'zdjecie.jpg'
    image.addEventListener('load' , ()=>{
        ctx.drawImage(image , 0 , 0 ,400 ,300)
    })
}

function darkenImage(amount =30){
    const canvasData = ctx.getImageData(0 , 0 ,200 ,150)
    // rozmycie usrednienie 
    

    ctx.putImageData(canvasData , 0,0)
}
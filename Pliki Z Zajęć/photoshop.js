class Photoshop {
    constructor(canvasId) {
        this.brushShape = 'circle'
        this.setCanvas(canvasId)
    }

    setBrush(shape) {
        this.brushShape = shape
    }
    
    setCanvas(canvasId) {
        this.canvas = document.querySelector('#' + canvasId)
        this.canvasConfig =  {
            top: 100,
            left: 0
        }
        this.canvas.addEventListener('touchmove',(e) => this.onCanvasTouchMove(e))
        this.canvas.style.top = this.canvasConfig.top + 'px';
        this.canvas.style.left = this.canvasConfig.left + 'px';
    }
       
    onCanvasTouchMove(e) {
        const xPos = e.touches[0].clientX - this.canvasConfig.left
        const yPos = e.touches[0].clientY - this.canvasConfig.top
        this.draw(xPos, yPos)
    }

    draw(x, y) {    
        const newDiv = document.createElement('div')
        newDiv.classList.add('brush', this.brushShape)
        newDiv.style.left = x + 'px'
        newDiv.style.top = y + 'px'
        this.canvas.appendChild(newDiv)
    }
}
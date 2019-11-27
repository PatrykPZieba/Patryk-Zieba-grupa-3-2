const TileTypes={
        empty:'empty',
        sand:'sand',
        diamond:'diamond',
        stone:'stone',
        wall:'stone'
}
class world{
    constructor(canvasId){
        this.tiles =[]
        this.tileWidth=50
        this.tileHeight=50
        this.tilesInRow=20;
        this.tileRows=15;
        this.tileCount =this.tileRows * this.tilesInRow
        this.initializeCanvas(canvasId)
        this.fillTiles()
        
        
    
    }
    initializeCanvas(){
        if(canvasId){
            this.canvas = document.querySelector('#${canvasId}')
            this.ctx=this.canvas.getContext('2d')
        }else{
            throw new Error('You have to provide canvas ID')
        }

    }
    fillTiles(){
        //this.tiles=[
            //new Tile(this.tileTypes.sand),
            //new Tile(types[2]),
            //new Tile(types[2]),
            //new Tile(types[4]),
           // new Tile(types[1]),
            //new Tile(types[4]),
            //new Tile(types[2]),
            //new Tile(types[2]),
            //new Tile(types[2]),
            //new Tile(types[2]),
            //new Tile(types[2]),
            //new Tile(types[2]),
        //]
        for(let i =0 ; i<this.tiles.tileCount;i++){
            const randmNumber=Math.floor((Math.random()*4))
            switch(randmNumber){
                case 0:
                    tile= new Tile(TileTypes.empty)
                    break;
                case 1:
                        tile= new Tile(TileTypes.sand)
                        break; 
                case 2:
                        tile= new Tile(TileTypes.diamond)
                         break;   
                 case 3:
                        tile= new Tile(TileTypes.stone)
                        break;
                 case 4:
                        tile= new Tile(TileTypes.stone)
                        break;
                    
            }
            let tile= new Tile(this.tileTypes.sand)
            this.tiles.push(tile)
        }
    }
    

    genereate(){
     
    }
drawTiles(){
    for(let i=0; i<this.tileCount;i++){
        this.drawTiles(i)
    }
}
drawTile(tileIndex){
    const y=Math.ceil(tileIndex / this.tilesInRow)*this.tileHeight
    const x= tileIndex % this.tilesInRow *this.tileWidth
    const width = this.tileWidth
    const height = this.tileHeight
    this.ctx.fillstyle=this.tiles[tileIndex].color
    this.ctx.fillRect(x,y,width,height)
}
}
class Tile{
    constructor(type){
        if(!type){
            throw new Error('Provide a type')
        }
     this.colors={
       [TileTypes.empty]: '#444',
       [TileTypes.sand]: '#a44',
       [TileTypes.diamond]: '#ccc',
       [TileTypes.stone]: '#876',
       [TileTypes.wall]: '#289'
     }
     this.type = type
     this.setColor(type)
    }
    setColor(tileType){
      this.color = this.color[tileType]
    }
}

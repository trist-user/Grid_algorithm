
class Grid{
    constructor(xLength,yLength){
        this.xLength = xLength;
        this.yLength = yLength;
        this.section = document.getElementById("grid")
    }

    createGrid(){
        let gridTable = document.createElement("table") 
        this.gridTable = gridTable
        gridTable.innerHTML = "dhdhdh"
        this.section.appendChild(gridTable);
        for(let i=0; i<=this.xLength-1; i++){
            let gridRow = document.createElement("tr")
            this.gridRow = gridRow
            gridRow.id = i
            gridRow.innerHTML = i 
            gridTable.appendChild(gridRow)
            for(let j=0; j<=this.yLength-1; j++){
                let gridColl = document.createElement("td")
                this.gridColl = gridColl
                gridColl.id = j
                gridColl.innerHTML = j 
                gridRow.appendChild(gridColl)
            }
        }

    }
}

class GridSquare extends Grid{
    constructor(targetGrid, squareType, coordX, coordY, xLength, yLength ){
        super(xLength,yLength)
        this.targetGrid = targetGrid
        this.squareType = squareType
        this.coordX = coordX
        this.coordY = coordY
        this.section = document.getElementById("grid")
    }
    locateSquare(){
        let squareX = this.section.gridTable.getElementById("" +this.coordX)
        let squareY = squareX.getElementById("" +this.coordY)
        let targSquare = this.targetGrid.gridTable.squareX.squareY
        return targSquare, squareX, squareY
    }
}

y = 11232
console.log("" + y) 

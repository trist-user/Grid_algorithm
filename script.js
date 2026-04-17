let gridX = document.getElementById("GridX")
let gridY = document.getElementById("GridY")
let startX = document.getElementById("StartX")
let startY = document.getElementById("StartY")
let goalX = document.getElementById("GoalX")
let goalY = document.getElementById("GoalY")

let gridSpecs = []
let startSpecs = []
let goalSpecs = []
gridX.addEventListener("change", (fucntion) =>{
    gridSpecs.push(gridX.value)
})
gridY.addEventListener("change", (fucntion) =>{
    gridSpecs.push(gridY.value)
})
startX.addEventListener("change", (fucntion) =>{
    startSpecs.push(startX.value)
})
startY.addEventListener("change", (fucntion) =>{
    startSpecs.push(startY.value)
})
goalX.addEventListener("change", (fucntion) =>{
    goalSpecs.push(goalX.value)
})
goalY.addEventListener("change", (fucntion) =>{
    goalSpecs.push(goalY.value)
})



class Grid{
    constructor(xLength,yLength){
        this.xLength = xLength;
        this.yLength = yLength;
        this.section = document.getElementById("grid")
    }

    createGrid(){
        let gridTable = document.createElement("table") 
        gridTable.id = "elbat"
        this.gridTable = gridTable
        gridTable.innerHTML = "dhdhdh"
        this.section.appendChild(gridTable);
        for(let i=0; i<=this.xLength-1; i++){
            let gridRow = document.createElement("tr")
            this.gridRow = gridRow
            gridRow.id = "x" + i
            gridRow.innerHTML = i 
            gridTable.appendChild(gridRow)
            for(let j=0; j<=this.yLength-1; j++){
                let gridColl = document.createElement("td")
                this.gridColl = gridColl
                gridColl.id = "y" + j
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
        this.table = document.getElementById("elbat")
        this.targSquare = this.table.rows[this.coordX].cells[this.coordY]
    }

}

e = new Grid(gridSpecs[0],gridSpecs[1])


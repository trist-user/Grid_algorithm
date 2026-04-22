let gridX = document.getElementById("GridX")
let gridY = document.getElementById("GridY")
let startX = document.getElementById("StartX")
let startY = document.getElementById("StartY")
let goalX = document.getElementById("GoalX")
let goalY = document.getElementById("GoalY")

let gridSpecs = []
let startSpecs = []
let goalSpecs = []
gridX.addEventListener("change", () =>{
    if(gridSpecs.length == 0){
        gridSpecs.push(gridX.value)
    }else if(gridSpecs.length > 1){
        gridSpecs[0] = gridX.value
        if(typeof e !== 'undefined'){
                e.removeGrid()
            }
        e = new Grid(gridSpecs[0],gridSpecs[1])
        e.createGrid()
    }
})
gridY.addEventListener("change", () =>{
    if(gridSpecs.length == 1){
        gridSpecs.push(gridY.value) 
    }else if(gridSpecs.length > 1){
           gridSpecs[1] = gridY.value
           if(typeof e !== 'undefined'){
                e.removeGrid()
           }
           e = new Grid(gridSpecs[0],gridSpecs[1])
           e.createGrid() 
        }
    })
startX.addEventListener("change", () =>{
    if(startSpecs.length == 0){
        startSpecs.push(startX.value)
    }else if(startSpecs.length > 1){
        startSpecs[0] = startX.value
        f.cellChanging("start")
        f = new GridSquare(e,"filler",startX.value,startY.value,e.xLength,e.yLength)
        // stuff too make color of grid at specific coordinat change.
    }
})
startY.addEventListener("change", () =>{
    if(startSpecs.length == 1){
        startSpecs.push(startY.value)
    }else if(startSpecs.length > 1){
        startSpecs[1] = startY.value
        f.cellChanging("start")
        f = new GridSquare(e,"filler",startX.value,startY.value,e.xLength,e.yLength)
        // stuff too make color of grid at specific coordinat change.
    }
})
goalX.addEventListener("change", () =>{
    if(goalSpecs.length == 0){
        goalSpecs.push(goalX.value)
    }else if(goalSpecs.length > 1){
        goalSpecs[0] = goalX.value
        f.cellChanging("goal")
        f = new GridSquare(e,"filler",startX.value,startY.value,e.xLength,e.yLength)
        // stuff too make color of grid at specific coordinat change.
    }
})
goalY.addEventListener("change", () =>{
    if(goalSpecs.length == 1){
        goalSpecs.push(goalY.value)
    }else if(goalSpecs.length > 1){
        goalSpecs[1] = goalY.value
        f.cellChanging("goal")
        f = new GridSquare(e,"filler",startX.value,startY.value,e.xLength,e.yLength)
        // stuff too make color of grid at specific coordinat change.
    }
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
        this.section.appendChild(gridTable);
        for(let i=0; i<=this.xLength-1; i++){
            let gridRow = document.createElement("tr")
            this.gridRow = gridRow
            gridRow.id = "x" + i 
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
    removeGrid(){
        let removee = document.getElementById("elbat")
        removee.remove()
    }
}

class GridSquare extends Grid{
    constructor(targetGrid, squareType, coordX, coordY, xLength, yLength ){
        super(xLength,yLength)
        this.targetGrid = targetGrid
        this.squareType = squareType
        this.coordX = coordX
        this.coordY = coordY
        this.id = 1
        this.table = document.getElementById("elbat")
        this.targSquare = this.table.rows[this.coordX].cells[this.coordY] // this broken but syntax work in console
    }
    cellChanging(type){
        switch(type){
            case "start":
                f.targSquare.style.backgroundColor = "green"
            case "goal":
                f.targSquare.style.backgroundColor = "red"
            case "checked":
                f.targSquare.style.backgroundColor = "cyan"
            case "chosenPath":
                f.targSquare.style.backgroundColor = "blue"
            case "wall":
                f.targSquare.style.backgroundColor = "purple"
        }

    }

}




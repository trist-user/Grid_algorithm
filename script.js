let gridX = document.getElementById("GridX")
let gridY = document.getElementById("GridY")
let startX = document.getElementById("StartX")
let startY = document.getElementById("StartY")
let goalX = document.getElementById("GoalX")
let goalY = document.getElementById("GoalY")
let squares = document.getElementsByTagName("td")

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
        let newGridSpecs = [parseInt(gridSpecs[0], 10), parseInt(gridSpecs[1],10)]
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
           let newGridSpecs = [parseInt(gridSpecs[0], 10), parseInt(gridSpecs[1],10)]
        }
    })
    k = 0
startX.addEventListener("change", () =>{
    if(startSpecs.length == 0){
        startSpecs.push(startX.value)
    }else if(startSpecs.length > 1){
        if(k >= 1){
            f.cellChanging("blank", f)
        }
        startSpecs[0] = startX.value
        k++
        f = new GridSquare(e,"filler",startX.value,startY.value,e.xLength,e.yLength)
        f.cellChanging("start", f)
        let newStartSpecs = [parseInt(startSpecs[0], 10), parseInt(startSpecs[1],10)]
    }
})
startY.addEventListener("change", () =>{
    if(startSpecs.length == 1){
        startSpecs.push(startY.value)
    }else if(startSpecs.length > 1){
        if(k >= 1){
            f.cellChanging("blank", f)
        }
        startSpecs[1] = startY.value
        k++
        f = new GridSquare(e,"filler",startX.value,startY.value,e.xLength,e.yLength)
        f.cellChanging("start", f)
        let newStartSpecs = [parseInt(startSpecs[0], 10), parseInt(startSpecs[1],10)]
    }
})
l = 0
goalX.addEventListener("change", () =>{
    if(goalSpecs.length == 0){
        goalSpecs.push(goalX.value)
    }else if(goalSpecs.length > 1){
        if(l >= 1){
            g.cellChanging("blank", g)
        }
        goalSpecs[0] = goalX.value
        l++
        g = new GridSquare(e,"filler",goalX.value,goalY.value,e.xLength,e.yLength)
        g.cellChanging("goal", g)
        let newGoalSpecs = [parseInt(goalSpecs[0], 10), parseInt(goalSpecs[1],10)]
    }
})
goalY.addEventListener("change", () =>{
    if(goalSpecs.length == 1){
        goalSpecs.push(goalY.value)
    }else if(goalSpecs.length > 1){
        if(l >= 1){
            g.cellChanging("blank", g)
        }
        goalSpecs[1] = goalY.value
        l++
        g = new GridSquare(e,"filler",goalX.value,goalY.value,e.xLength,e.yLength)
        g.cellChanging("goal", g)
        let newGoalSpecs = [parseInt(goalSpecs[0], 10), parseInt(goalSpecs[1],10)]
    }
})

if(typeof e !== 'undefined'){
    table = document.getElementById("elbat")
    table.addEventListener("click", function(event){
        console.log(event.target)
    })
}

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
    cellChanging(type, targ){
        switch(type){
            case "start":
                targ.targSquare.style.backgroundColor = "green"
                break;
            case "goal":
                targ.targSquare.style.backgroundColor = "red"
                break;
            case "checked":
                targ.targSquare.style.backgroundColor = "cyan"
                break;
            case "chosenPath":
                targ.targSquare.style.backgroundColor = "blue"
                break;
            case "wall":
                targ.targSquare.style.backgroundColor = "purple"
                break;
            case "blank":
                targ.targSquare.style.backgroundColor = "white"
                break;
        }

    }

}


// each squares chil;dren are just its coordinates
// chidlren of (x,y) => (x+1,y), (x,y+1), (x-1,y), (x,y-1)
function bfs(start, goal, gridWid, gridLen){ //just realized in my grid making and square locating that my x defines my y and visa versa
    while(queue.length > 0){
    queue = [start]                          // so im just swapping their order here so that the logic down yonder is more readable 
        curSquare = queue[0]
        childrenCur = []
        if(curSquare == goal){
            break;
        }
        if(curSquare[0]+1 <= gridLen ){ // so im just swapping their order here so that the logic down yonder is more readable
            childrenCur.push([curSquare[0]+1, curSquare[1]])
        }
        if(curSquare[0]-1 >=gridLen){
            childrenCur.push([curSquare[0]-1, curSquare[1]])
        }
        if(curSquare[1]+1 <= gridWid ){
          childrenCur.push([curSquare[0], curSquare[1]+1])  
        }
        if(curSquare[1]-1 >=gridWid){
            childrenCur.push([curSquare[0], curSquare[1]-1])
        }
        for(let m = 0; m <= childrenCur; m++ ){
            queue.push(childrenCur[m])
        }
            let squareChecked = queue.shift(0,1)
            if(squareChecked !== start){
                h = new GridSquare(e,"checked",curSquare[0],curSquare[1],gridWid, gridLen)
                h.cellChanging(this.squareType,h)
            }
    }
}
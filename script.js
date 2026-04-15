
class Grid{
    constructor(xLength,yLength){
        this.xLength = xLength;
        this.yLength = yLength;
        this.section = document.getElementById("grid")
    }

    createGrid(){
        console.log("duh")
        let gridTable = document.createElement("table") //undefined issues with mi elements
        gridTable.innerHTML = "dhdhdh"
        console.log("table made")
        this.section.appendChild(gridTable);
        for(let i=0; i<=this.xLength; i++){
            let gridRow = document.createElement("tr")
            gridRow.id = i
            this.section.gridTable.appendChild(gridRow)
        }

    }
}
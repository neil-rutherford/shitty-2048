let memory = [
    [2,4,8,16],
    [32,64,128,256],
    [512,1024,null,2],
    [null,null,null,null]
];

// Checks if winning conditions have been met. Iterates over all items in 'memory' variable. If an item is equal to 2048, it alerts the user and tells them they won.
function checkWin(){
    for (let x=0;x<4;x++){
        for (let y=0;y<4;y++){
            if (memory[x][y] == 2048){
                alert("You won!");
            }
        }
    }
}

// Changes the value of a given element, provided an id attribute and the value. Changes the background and text color if certain criteria are met.
function changeValue(id, value) {
    let color;
    let text;
    switch (value) {
        case 2:
            color = "#DDFAEC";
            text = "black";
            break;
        case 4:
            color = "#C6F6E8";
            text = "black";
            break;
        case 8:
            color = "#B1F2EB";
            text = "black";
            break;
        case 16:
            color = "#9BE6ED";
            text = "black";
            break;
        case 32:
            color = "#87CDE7";
            text = "black";
            break;
        case 64:
            color = "#73AFE1";
            text = "black";
            break;
        case 128:
            color = "#5F8BDA";
            text = "black";
            break;
        case 256:
            color = "#5161C1";
            text = "black";
            break;
        case 512:
            color = "#4B44A7";
            text = "white";
            break;
        case 1024:
            color = "#4F378C";
            text = "white";
            break;
        case 2048:
            color = "#4E2B71";
            text = "white";
            break;
        default:
            color = "white";
            text = "black";
            break;
    }
    if (value != null) {
        document.getElementById(`${id}`).innerHTML = `${value}`;
    } else {
        document.getElementById(`${id}`).innerHTML = " ";
    }
    
    document.getElementById(`${id}`).style.backgroundColor = color;
    document.getElementById(`${id}`).style.color = text;
}

// Broadcasts data from 'memory' variable onto CSS grid container.
function refreshTable(){
    changeValue("a1", memory[0][0])
    changeValue("b1", memory[0][1])
    changeValue("c1", memory[0][2])
    changeValue("d1", memory[0][3])
    changeValue("a2", memory[1][0])
    changeValue("b2", memory[1][1])
    changeValue("c2", memory[1][2])
    changeValue("d2", memory[1][3])
    changeValue("a3", memory[2][0])
    changeValue("b3", memory[2][1])
    changeValue("c3", memory[2][2])
    changeValue("d3", memory[2][3])
    changeValue("a4", memory[3][0])
    changeValue("b4", memory[3][1])
    changeValue("c4", memory[3][2])
    changeValue("d4", memory[3][3])
}

// REQUIREMENT 1
/**
 * Given a cell's location and shift direction, this function provides a list of cells in the cell's way.
 * @param {Integer} cellRow    Zero-indexed cell row number.
 * @param {Integer} cellColumn Zero-indexed cell column number.
 * @param {String} direction   up, down, left, right.
 * @return {Array}             List of cells in the way.
 */
function generateArray(cellRow, cellColumn, direction){
    let arr = [];
    if (direction == "up"){
        for (let i=parseInt(cellRow);i>-1;i--){
            arr.push(memory[i][parseInt(cellColumn)]);
        }
    } else if (direction == "down"){
        for (let i=parseInt(cellRow);i<4;i++){
            arr.push(memory[i][parseInt(cellColumn)]);
        }
    } else if (direction == "left"){
        for (let i=parseInt(cellColumn);i>-1;i--){
            arr.push(memory[parseInt(cellRow)][i]);
        }
    } else if (direction == "right"){
        for (let i=parseInt(cellColumn);i<4;i++){
            arr.push(memory[parseInt(cellRow)][i]);
        }
    } else {
        console.log("Valid directions: up, down, left, right");
    }
    return arr;
}

// REQUIREMENT 2
/**
 * Provided origin is not null and destination is null, this function moves origin value to destination cell.
 * @param {Integer} originRow         Zero-indexed origin cell row.
 * @param {Integer} originColumn      Zero-indexed origin cell column.
 * @param {Integer} destinationRow    Zero-indexed destination cell row.
 * @param {Integer} destinationColumn Zero-indexed destination cell column.
 * @return {NaN}
 */
function shift(originRow, originColumn, destinationRow, destinationColumn) {
    let origin = memory[parseInt(originRow)][parseInt(originColumn)];
    let destination = memory[parseInt(destinationRow)][parseInt(destinationColumn)];
    if (!origin || destination){
        console.log("Origin is null / destination is not null");
    } else {
        memory[parseInt(originRow)][parseInt(originColumn)] = null;
        memory[parseInt(destinationRow)][parseInt(destinationColumn)] = origin;
    }
}

// REQUIREMENT 3
/**
 * If two cells are the same value, this function adds them together and sets the shifter cell equal to null.
 * @param {Integer} shifterRow    Zero-indexed shifter cell row.
 * @param {Integer} shifterColumn Zero-indexed shifter cell column.
 * @param {Integer} targetRow     Zero-indexed target cell row.
 * @param {Integer} targetColumn  Zero-indexed target cell column.
 * @return {NaN}
 */
function collide(shifterRow, shifterColumn, targetRow, targetColumn){
    let shifter = memory[parseInt(shifterRow)][parseInt(shifterColumn)];
    let target = memory[parseInt(targetRow)][parseInt(targetColumn)];
    if (shifter != target){
        console.log("shifter and target values are not the same");
    } else {
        memory[parseInt(shifterRow)][parseInt(shifterColumn)] = null;
        memory[parseInt(targetRow)][parseInt(targetColumn)] = shifter + target;
    }
}

refreshTable()

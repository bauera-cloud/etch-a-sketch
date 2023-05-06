let container = document.querySelector(".gridContainer");
let gridLayoutBtn = document.querySelector("#gridLayoutBtn");

let numOfRows = 16;
let numOfColumns = 16;

createGridLayout(numOfRows, numOfColumns);

function createGridLayout(numOfRows, numOfColumns) {
    //Grid
    //# of rows
    for (let i = 0; i < numOfRows; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        //# of columns
        for (let j = 0; j < numOfColumns; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
            //hover effect
            square.addEventListener('mouseover', getRandomColor);
        }
    }
}

// let gridLayoutOptions = document.querySelectorAll('input[name="gridLayout"');
// gridLayoutOptions.forEach((option) => {
//     option.addEventListener('click', gridLayout)
//     console.log(option)
// })

gridLayoutBtn.addEventListener("click", newGridLayout);

function newGridLayout() {
    deleteGrid();
    numOfRows = getAndLimitRows() || 16;
    numOfColumns = getAndLimitColumns() || 16;
    createGridLayout(numOfRows, numOfColumns);
}

function deleteGrid() {
    let rows = document.querySelectorAll(".row")
    rows.forEach(row => { row.remove() });
}


function getAndLimitRows() {
    let numOfRows = prompt("Rows");
    while (numOfRows > 64) {
        numOfRows = prompt("Rows should be up to 64");
    }
    return numOfRows
}

function getAndLimitColumns() {
    let numOfColumns = prompt("Columns");
    while (numOfColumns > 64) {
        numOfColumns = prompt("Columns should be up to 64")
    }
    return numOfColumns
}

function randomRGBNum() {
    return Math.floor((Math.random() * 255) + 1)
}

function getRandomColor(e) {
    let r = randomRGBNum(), g = randomRGBNum(), b = randomRGBNum();
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b}`;
    setTimeout(() => {
        e.target.style.backgroundColor = "";
    }, 500);
}


//Replace button with 3 options - radio buttons:
//16x16, 32, 64
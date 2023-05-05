let container = document.querySelector(".gridContainer");
let gridLayoutBtn = document.querySelector("#gridLayoutBtn");

gridLayoutBtn.addEventListener("click", gridLayout);



function gridLayout() {
    let numOfRows = getAndLimitRows() || 16;
    let numOfColumns = getAndLimitColumns() || 16;
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


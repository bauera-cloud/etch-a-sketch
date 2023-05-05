let container = document.querySelector(".container");
let gridLayoutBtn = document.querySelector("#gridLayoutBtn");

gridLayoutBtn.addEventListener("click", gridLayout);



function gridLayout() {
    let numOfRows = prompt("Rows");
    while (numOfRows > 100) {
        numOfRows = prompt("Rows should be up to 100");
    }
    let numOfColumns = prompt("Columns");
    while (numOfColumns > 100) {
        numOfColumns = prompt("Columns should be up to 100")
    }
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
            square.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = randomColor();
                setTimeout(() => {
                    e.target.style.backgroundColor = "";
                }, 500);
            });
        }
    }
}

function randomRGBNum() {
    return Math.floor((Math.random() * 255) + 1)
}

function randomColor() {
    let r = randomRGBNum(), g = randomRGBNum(), b = randomRGBNum();
    return `rgb(${r}, ${g}, ${b}`;
}


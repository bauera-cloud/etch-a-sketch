let container = document.querySelector(".container");
let gridLayoutBtn = document.querySelector("#gridLayoutBtn");

gridLayoutBtn.addEventListener("click", gridLayout);

function gridLayout() {
    let numOfRows = prompt("Rows");
    let numOfColumns = prompt("Columns");
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
                e.target.style.backgroundColor = "blue";
                setTimeout(() => {
                    e.target.style.backgroundColor = "";
                }, 500);
            });
        }
    }
}


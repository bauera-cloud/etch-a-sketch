let container = document.querySelector(".container");

//Grid
//# of rows
for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    //# of squares per row
    for (let j = 0; j < 16; j++) {
        let square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
        //hover effect
        square.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = "blue";
            setTimeout(() => {
                e.target.style.backgroundColor = "";
            }, 200);
        });
    }
}

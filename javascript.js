const container = document.querySelector(".container");
const cont_width = 960;
const cont_height = 960;
container.style.width = cont_width + 'px';
container.style.height = cont_height + 'px';
container.style.display = "flex";
container.style.flexDirection = "column";

let alpha = 0;

function generateGrid(squares_per_side = 16) {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }

    const square_dimensions = cont_width / squares_per_side;

    for (let i = 1; i <= squares_per_side; i++) {
        const row_div = document.createElement("div");
        row_div.style.display = "flex";

        for (let j = 1; j <= squares_per_side; j++) {
            const square_div = document.createElement("div");
            square_div.setAttribute("class", "square");

            square_div.style.width = square_dimensions + 'px';
            square_div.style.height = square_dimensions + 'px';
            square_div.style.border = "1px solid black";

            square_div.addEventListener("mouseenter", function () {
                alpha += 0.1;
                square_div.style.backgroundColor = randColor(alpha);
            });

            row_div.appendChild(square_div);
        }
        container.appendChild(row_div);
    }
}

generateGrid();

const button = document.querySelector("#user_button");
button.addEventListener("click", onButtonClick);

function onButtonClick() {
    let userInput;
    while (true) {
        userInput = prompt("Enter the dimensions of the grid (1 to 100).");

        if (userInput >= 1 && userInput <= 100) {
            break; 
        } else {
            alert("Please enter a valid number.")
        }
    }

    generateGrid(userInput);
}

function randColor(alpha) {
    const red = Math.floor(Math.random() * 256) + 1;
    const green = Math.floor(Math.random() * 256) + 1;
    const blue = Math.floor(Math.random() * 256) + 1;
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

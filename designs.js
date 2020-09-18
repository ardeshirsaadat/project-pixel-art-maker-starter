const tableElement = document.getElementById("pixelCanvas");
let formElement = document.querySelector("#sizePicker");
// When size is submitted by the user, call makeGrid()
formElement.addEventListener("submit", makeGrid);
function makeGrid(event) {
    event.preventDefault();
    // Delete <table> element's children
    while(tableElement.childElementCount !== 0){ 
        tableElement.removeChild(tableElement.firstChild);
    } 
    // Obtain height and width values from boxes
    const heightValue = document.getElementById("inputHeight").value;
    const widthValue = document.getElementById("inputWidth").value;
    // Create individual grids
    for (let i = 1;i <= Number(heightValue); i++){
        let newTrElement = document.createElement("TR");
        for (let j = 1; j <= Number(widthValue); j++){
            let newTdElement = document.createElement("TD");
            // Create class for <td> element based off their rows and columns
            newTdElement.classList.add("r"+i+"c"+j);
            newTrElement.appendChild(newTdElement);
        };
        tableElement.appendChild(newTrElement);
    };
};
//  Select color input
// Add background color when a grid is clicked
let pickColor = document.querySelector("#colorPicker");
tableElement.addEventListener("click",function(event){
    event.target.style.background = pickColor.value;
    });

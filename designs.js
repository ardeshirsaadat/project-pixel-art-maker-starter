// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const tableElement = document.getElementById("pixelCanvas");
let form = document.querySelector("#sizePicker");
form.addEventListener('submit', makeGrid)
function makeGrid(event) {
    event.preventDefault()
    while(tableElement.childElementCount !== 0){ 
        tableElement.removeChild(tableElement.firstChild)
    } 
    const heightValue = document.getElementById("inputHeight").value;
    const widthValue = document.getElementById("inputWidth").value;
    for (let i = 1;i <= Number(heightValue); i++){
        var newTrElement = document.createElement("TR");
        for (let j = 1; j <= Number(widthValue); j++){
            var newTdElement = document.createElement("TD");
            newTdElement.classList.add("r"+i+"c"+j);
            newTrElement.appendChild(newTdElement);
        };
        tableElement.appendChild(newTrElement);
    };
    
    var pickColor = document.querySelector("#colorPicker")
    tableElement.addEventListener('click',function(event){
        event.target.style.background = pickColor.value
    })
}


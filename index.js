var colors = ["rgb(0, 106, 113)","rgb(203, 234, 237)","rgb(211, 222, 50)"];
var pickedColor = "rgb(0, 0, 0)";
function colorUtility(el, rows, columns) {
    var idAssign = 1
    var outerBox = document.querySelector(el);
    outerBox.setAttribute("id", el);
    // outerBox.style.height = `${30 * (rows+1)}px`;
    outerBox.style.width = `${30 * (columns+1)}px`;
    // outerBox.style.border = "0.5px solid #0000FF";
    outerBox.style.margin = "10px";
    outerBox.style.display = "flex";
    outerBox.style.flexWrap = "wrap";
    outerBox.style.justifyContent = "center";
    for (var i = 1; i <= rows; i++) {
        for (var j = 1; j <= columns; j++) {
            var innerDiv = document.createElement("DIV");
            innerDiv.setAttribute("id",idAssign);
            innerDiv.setAttribute("class","column");
            innerDiv.style.height = `${30}px`;
            innerDiv.style.width = `${30}px`;
            innerDiv.style.border = "0.2px solid #000000";
            outerBox.appendChild(innerDiv);
            idAssign++;
        }
    }
    colorPicker("color-picker");
    var boxes = document.querySelectorAll(".column");
    for(var i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click",function () {
            this.style.backgroundColor=`${pickedColor}`;
        })
    }
}

function colorPicker(el) {
    var outerColorBox = document.querySelector("#color-picker");
    outerColorBox.style.display="flex";
    outerColorBox.style.margin = "10px";
    for(var i = 0; i < 3; i++) {
        var innerDiv = document.createElement("DIV");
        innerDiv.setAttribute("id",colors[i]);
        innerDiv.setAttribute("class","color");
        innerDiv.style.height = `${30}px`;
        innerDiv.style.width = `${30}px`;
        innerDiv.style.border = "0.2px solid #000000";
        innerDiv.style.backgroundColor = `${colors[i]}`
        outerColorBox.appendChild(innerDiv);
    }
    var colorBoxes = document.querySelectorAll(".color");
    for(var i=0;i<colorBoxes.length;i++) {
        colorBoxes[i].addEventListener("click", function () {
           pickedColor = this.style.backgroundColor; 
        });
    }
}

var canvas = document.getElementById("drawcanvas");
var ctx = canvas.getContext("2d");

function draw(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,150,75);
}

draw();
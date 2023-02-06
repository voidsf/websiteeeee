var canvas = document.getElementById("drawcanvas");
var ctx = canvas.getContext("2d");

var kibbyImage = new Image();
kibbyImage.src = "assets/images/kibby.png";

var mouseX = 0;
var mouseY = 0;


function draw(){
    
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,400,400);

    ctx.drawImage(kibbyImage, mouseX - 50, mouseY - 50);
}

setInterval(() => {
    draw();
}, 20);


canvas.addEventListener("mousemove", function(e){
    if (!e) e = window.event;
    mouseX = e.offsetX;
    mouseY = e.offsetY;
      
});

main();

//code here

function main(){
    const canvas = document.querySelector("#glCanvas");
    const gl = canvas.getContext("webgl");

    if (gl === null){
        alert("Unable to initialise WebGL.");
        return;
    }
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

}
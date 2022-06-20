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
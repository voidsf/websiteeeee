function main(){
    const canvas = document.getElementById("drawcanvas");
    const gl = canvas.getContext("webgl");

    if (gl === null){
        alert("webgl is not supported in your browser");
        return;
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = main;
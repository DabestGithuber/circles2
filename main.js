canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var mouseEvent = "empty";

var last_position_of_x, last_position_of_y;

canvas.addEventListener("mousedown", my_mousedown)

function my_mousedown(e) {

    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mousedown";
}

window.addEventListener("mouseup", my_mouseup)

function my_mouseup() {
    mouseEvent = "mouseup";
}

window.addEventListener("mouseleave", my_mouseleave)

function my_mouseleave() {

    mouseEvent = "mouseleave";
}

window.addEventListener("mousemove", my_mousemove)

function my_mousemove(e) {

    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop
    if (mouseEvent == "mousedown") {
        console.log("Current position of x and y is = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 5;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
import { Vec2 } from "../../vec2.js";

const output = document.querySelector("output"),
      canvas = document.querySelector("canvas"),
      height = canvas.height = 250,
      width = canvas.width = 250,
      ctx = canvas.getContext("2d");

var currentColor = getColor(),
    vec;

canvas.addEventListener("mousemove", handleMousemove);
canvas.addEventListener("mouseleave", handleMouseleave);
canvas.addEventListener("click", handleClick);
drawGrid();

function handleMousemove(e) {
    drawGrid();
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width/2, height/2);
    ctx.lineTo(e.x - canvas.offsetLeft, e.y - canvas.offsetTop);
    ctx.stroke();
}

function handleClick(e) {
    const gridX = e.x - canvas.offsetLeft,
          gridY = e.y - canvas.offsetTop,
          x = gridX - width/2,
          y = gridY - height/2;
    vec = new Vec2(x, y);
    vec.color = currentColor;
    updateOutput();
    currentColor = getColor();
    drawGrid();
}
function handleMouseleave(e) {
    if (!vec) handleClick(e);
    drawGrid();
}

function drawGrid() {
    //erase
    ctx.clearRect(0, 0, width, height);
    //main axis lines
    ctx.strokeStyle = "silver";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, height/2);
    ctx.lineTo(width, height/2);
    ctx.moveTo(width/2, 0);
    ctx.lineTo(width/2, height);
    ctx.stroke();
    //vector
    if (vec) drawVec();
}

function drawVec() {
    ctx.save();
    ctx.translate(width/2, height/2);
    ctx.strokeStyle = vec.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(vec.x, vec.y);
    ctx.stroke();
    ctx.restore();
}

function getColor() {
    const angle = Math.random() * 360;
    return `hsl(${angle}deg, 100%, 75%)`;
}

function updateOutput() {
    if (!vec) return;
    let html = `
        <div style="font-weight:bold;text-align:center;padding:5px 0;background:${vec.color};font-weight:bold;"> new Vec2</div>
        <ul>
            <li>x: ${vec.x}</li>
            <li>y: ${vec.y}</li>
            <li>angle: ${vec.angle().toFixed(2)}</li>
            <li>magnitude: ${vec.mag().toFixed(2)}</li>
        </ul>
    `;

    output.innerHTML = html;
}

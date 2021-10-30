const canvas = document.getElementById("myCanvas"),
    ctx = canvas.getContext("2d");

const config = {
    linesStartingPosition: -40,
}
const leftRoadLineStart = canvas.clientWidth / 2 - 150,
    rightRoadLineStart = canvas.clientWidth / 2 + 150,
    rightRoadRightTurn = rightRoadLineStart + 150,
    leftRoadRightTurn = leftRoadLineStart + 150

var step = 0;

setInterval(generateInitialScreen, 1000 / 60);


function generateInitialScreen() {
    ctx.fillStyle = "#567D46";
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    generateRoad();

    ctx.fillStyle = "green";
    ctx.fillRect(canvas.clientWidth / 2, canvas.clientHeight - 120, 30, 60);

    // ctx.font = "24px Arial";
    // ctx.fillStyle = "black";
    // ctx.fillText(step, canvas.width - 150, canvas.height - 25);


    // for (var i = 1; i < 18; i++) {
    //     ctx.fillRect(canvas.clientWidth / 2 - 5, config.linesStartingPosition + i * 45 - 150, 10, 30);
    // }
    // if (config.linesStartingPosition > 30) {
    //     config.linesStartingPosition = -40;
    // } else {
    //     config.linesStartingPosition += 10;
    // }


}

function generateRoad() {
    var grad = ctx.createLinearGradient(0, 0, 180, 350);
    grad.addColorStop(0, "white");
    grad.addColorStop(1, "aliceblue");
    ctx.strokeStyle = grad; //"white";
    ctx.lineWidth = 25;
    ctx.setLineDash([]);
    ctx.beginPath();
    //BOTTOM-LEFT CORNER
    ctx.moveTo(leftRoadLineStart, canvas.clientHeight - step);
    //START LINE
    ctx.lineTo(rightRoadLineStart, canvas.clientHeight - step);
    ctx.lineTo(rightRoadLineStart, -1000 - step);
    ctx.lineTo(rightRoadRightTurn, -2000 - step);
    ctx.lineTo(rightRoadRightTurn, -3000 - step);
    ctx.lineTo(rightRoadLineStart, -4500 - step);
    ctx.lineTo(rightRoadLineStart, -7500 - step);
    ctx.lineTo(rightRoadLineStart - 150, -8500 - step);
    ctx.lineTo(rightRoadLineStart - 150, -9500 - step);
    ctx.lineTo(rightRoadLineStart, -10500 - step);
    ctx.lineTo(rightRoadLineStart, -12500 - step);
    //BACK LINE
    ctx.lineTo(leftRoadLineStart, -12500 - step);
    ctx.lineTo(leftRoadLineStart, -10500 - step);
    ctx.lineTo(leftRoadLineStart - 150, -9500 - step);
    ctx.lineTo(leftRoadLineStart - 150, -8500 - step);
    ctx.lineTo(leftRoadLineStart, -7500 - step);
    ctx.lineTo(leftRoadLineStart, -4500 - step);
    ctx.lineTo(leftRoadRightTurn, -3000 - step);
    ctx.lineTo(leftRoadRightTurn, -2000 - step);
    ctx.lineTo(leftRoadLineStart, -1000 - step);
    ctx.lineTo(leftRoadLineStart, canvas.clientHeight - step);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "darkred";
    ctx.lineWidth = 25;
    ctx.setLineDash([20, 20]);
    //BOTTOM-LEFT CORNER
    ctx.moveTo(leftRoadLineStart, canvas.clientHeight - step);
    //BOTTOM-RIGHT CORNER
    ctx.lineTo(rightRoadLineStart, canvas.clientHeight - step);
    ctx.lineTo(rightRoadLineStart, -1000 - step);
    ctx.lineTo(rightRoadRightTurn, -2000 - step);
    ctx.lineTo(rightRoadRightTurn, -3000 - step);
    ctx.lineTo(rightRoadLineStart, -4500 - step);
    ctx.lineTo(rightRoadLineStart, -7500 - step);
    ctx.lineTo(rightRoadLineStart - 150, -8500 - step);
    ctx.lineTo(rightRoadLineStart - 150, -9500 - step);
    ctx.lineTo(rightRoadLineStart, -10500 - step);
    ctx.lineTo(rightRoadLineStart, -12500 - step);
    ctx.lineTo(leftRoadLineStart, -12500 - step);
    //BACK LINE
    ctx.lineTo(leftRoadLineStart, -10500 - step);
    ctx.lineTo(leftRoadLineStart - 150, -9500 - step);
    ctx.lineTo(leftRoadLineStart - 150, -8500 - step);
    ctx.lineTo(leftRoadLineStart, -7500 - step);
    ctx.lineTo(leftRoadLineStart, -4500 - step);
    ctx.lineTo(leftRoadRightTurn, -3000 - step);
    ctx.lineTo(leftRoadRightTurn, -2000 - step);
    ctx.lineTo(leftRoadLineStart, -1000 - step);
    ctx.lineTo(leftRoadLineStart, canvas.clientHeight - step);
    ctx.stroke();
    ctx.fillStyle = "#5B5C66";
    ctx.beginPath();
    //BOTTOM-LEFT CORNER
    ctx.moveTo(leftRoadLineStart, canvas.clientHeight - step);
    //BOTTOM-RIGHT CORNER
    ctx.lineTo(rightRoadLineStart, canvas.clientHeight - step);
    ctx.lineTo(rightRoadLineStart, -1000 - step);
    ctx.lineTo(rightRoadRightTurn, -2000 - step);
    ctx.lineTo(rightRoadRightTurn, -3000 - step);
    ctx.lineTo(rightRoadLineStart, -4500 - step);
    ctx.lineTo(rightRoadLineStart, -7500 - step);
    ctx.lineTo(rightRoadLineStart - 150, -8500 - step);
    ctx.lineTo(rightRoadLineStart - 150, -9500 - step);
    ctx.lineTo(rightRoadLineStart, -10500 - step);
    ctx.lineTo(rightRoadLineStart, -12500 - step);
    ctx.lineTo(leftRoadLineStart, -12500 - step);
    //BACK LINE
    ctx.lineTo(leftRoadLineStart, -10500 - step);
    ctx.lineTo(leftRoadLineStart - 150, -9500 - step);
    ctx.lineTo(leftRoadLineStart - 150, -8500 - step);
    ctx.lineTo(leftRoadLineStart, -7500 - step);
    ctx.lineTo(leftRoadLineStart, -4500 - step);
    ctx.lineTo(leftRoadRightTurn, -3000 - step);
    ctx.lineTo(leftRoadRightTurn, -2000 - step);
    ctx.lineTo(leftRoadLineStart, -1000 - step);
    ctx.lineTo(leftRoadLineStart, canvas.clientHeight - step);

    ctx.fill();
    if (step < -12250) {
        step = 0;
    } else {
        step -= 3;
    }
}
const canvas = document.getElementById("myCanvas"),
    ctx = canvas.getContext("2d");

const config = {
    linesStartingPosition: -40
}

setInterval(generateInitialScreen, 50);

function generateInitialScreen() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientWidth);
    ctx.fillStyle = "#5B5C66";
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    ctx.fillStyle = "white";

    for (var i = 1; i < 1800; i++) {
        ctx.fillRect(canvas.clientWidth / 2, config.linesStartingPosition + i * 45 - 1500, 10, 30);
    }

    config.linesStartingPosition += 10;

}
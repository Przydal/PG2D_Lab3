const canvas = document.getElementById("myCanvas"),
    ctx = canvas.getContext("2d");

let shift = 0;

const leftRoadLineStart = canvas.clientWidth / 2 - 150,
    rightRoadLineStart = canvas.clientWidth / 2 + 150,
    rightRoadRightTurn = rightRoadLineStart + 150,
    leftRoadRightTurn = leftRoadLineStart + 150

let roadLinePositions = [{
        xPos: rightRoadLineStart,
        yPos: canvas.clientHeight
    },
    {
        xPos: canvas.clientWidth / 2 + 150,
        yPos: -1000
    },
    {
        xPos: canvas.clientWidth / 2 + 300,
        yPos: -2000
    },
    {
        xPos: canvas.clientWidth / 2 + 300,
        yPos: -3000
    },
    {
        xPos: canvas.clientWidth / 2 + 150,
        yPos: -4000
    },
    {
        xPos: rightRoadLineStart,
        yPos: -5000
    },
    {
        xPos: rightRoadLineStart - 150,
        yPos: -6000
    },
    {
        xPos: rightRoadLineStart - 150,
        yPos: -7000
    },
    {
        xPos: rightRoadLineStart,
        yPos: -8000
    },
    {
        xPos: rightRoadLineStart,
        yPos: -10000
    },
    {
        xPos: leftRoadLineStart,
        yPos: -10000
    },
    {
        xPos: leftRoadLineStart,
        yPos: -8000
    },
    {
        xPos: leftRoadLineStart - 150,
        yPos: -7000
    },
    {
        xPos: leftRoadLineStart - 150,
        yPos: -6000
    },
    {
        xPos: leftRoadLineStart,
        yPos: -5000
    },
    {
        xPos: leftRoadLineStart,
        yPos: -4000
    },
    {
        xPos: leftRoadRightTurn,
        yPos: -3000
    },
    {
        xPos: leftRoadRightTurn,
        yPos: -2000
    },
    {
        xPos: leftRoadLineStart,
        yPos: -1000
    },
    {
        xPos: leftRoadLineStart,
        yPos: canvas.clientHeight
    }
];

let coinsPositions = [{
        xPos: 400,
        yPos: 0
    },
    {
        xPos: 400,
        yPos: -30
    },
    {
        xPos: 400,
        yPos: -60
    },
    {
        xPos: 310,
        yPos: -300
    },
    {
        xPos: 310,
        yPos: -330
    },
    {
        xPos: 310,
        yPos: -360
    },
    {
        xPos: 500,
        yPos: -600
    },
    {
        xPos: 500,
        yPos: -630
    },
    {
        xPos: 500,
        yPos: -660
    },
    {
        xPos: 400,
        yPos: -1050
    },
    {
        xPos: 410,
        yPos: -1100
    },
    {
        xPos: 420,
        yPos: -1150
    },
    {
        xPos: 450,
        yPos: -1350
    },
    {
        xPos: 460,
        yPos: -1400
    },
    {
        xPos: 470,
        yPos: -1450
    },
    {
        xPos: 520,
        yPos: -1750
    },
    {
        xPos: 530,
        yPos: -1800
    },
    {
        xPos: 540,
        yPos: -1850
    },
    {
        xPos: 550,
        yPos: -2250
    },
    {
        xPos: 550,
        yPos: -2300
    },
    {
        xPos: 550,
        yPos: -2350
    },
    {
        xPos: 550,
        yPos: -2650
    },
    {
        xPos: 550,
        yPos: -2700
    },
    {
        xPos: 550,
        yPos: -2750
    },
    {
        xPos: 520,
        yPos: -3200
    },
    {
        xPos: 510,
        yPos: -3250
    },
    {
        xPos: 500,
        yPos: -3300
    },
    {
        xPos: 420,
        yPos: -3800
    },
    {
        xPos: 410,
        yPos: -3850
    },
    {
        xPos: 400,
        yPos: -3900
    },
    {
        xPos: 400,
        yPos: -4500
    },
    {
        xPos: 400,
        yPos: -4550
    },
    {
        xPos: 400,
        yPos: -4600
    },
    {
        xPos: 320,
        yPos: -5500
    },
    {
        xPos: 310,
        yPos: -5550
    },
    {
        xPos: 300,
        yPos: -5600
    },
    {
        xPos: 250,
        yPos: -6100
    },
    {
        xPos: 250,
        yPos: -6150
    },
    {
        xPos: 250,
        yPos: -6200
    },
    {
        xPos: 250,
        yPos: -6500
    },
    {
        xPos: 250,
        yPos: -6550
    },
    {
        xPos: 250,
        yPos: -6600
    },
    {
        xPos: 330,
        yPos: -7500
    },
    {
        xPos: 340,
        yPos: -7550
    },
    {
        xPos: 350,
        yPos: -7600
    },
    {
        xPos: 400,
        yPos: -8100
    },
    {
        xPos: 400,
        yPos: -8150
    },
    {
        xPos: 400,
        yPos: -8200
    },
    {
        xPos: 400,
        yPos: -8700
    },
    {
        xPos: 400,
        yPos: -8730
    },
    {
        xPos: 400,
        yPos: -8760
    },
];

setInterval(generateInitialScreen, 1000 / (60 * 2.5));

function generateInitialScreen() {
    generateBackground();

    generateRoad();

}

function generateRoad() {
    drawWhiteSideRoad();
    drawRedSideRoad();
    drawRoad();

    drawCoins();

    handleStep();

}

function generateBackground() {
    ctx.fillStyle = "#567D46";
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}

function drawWhiteSideRoad() {
    ctx.strokeStyle = "white";
    ctx.lineWidth = 25;
    ctx.setLineDash([]);
    ctx.beginPath();
    roadLinePositions.forEach((roadPoint) => {
        ctx.lineTo(roadPoint.xPos, roadPoint.yPos - shift);
    })
    ctx.stroke();
}

function drawRedSideRoad() {
    ctx.beginPath();
    ctx.strokeStyle = "darkred";
    ctx.lineWidth = 25;
    ctx.setLineDash([25]);
    ctx.moveTo(leftRoadLineStart, canvas.clientHeight - shift);
    roadLinePositions.forEach((roadPoint) => {
        ctx.lineTo(roadPoint.xPos, roadPoint.yPos - shift);
    })
    ctx.stroke();
}

function drawRoad() {
    ctx.fillStyle = "#5B5C66";
    ctx.beginPath();
    ctx.moveTo(leftRoadLineStart, canvas.clientHeight - shift);
    roadLinePositions.forEach((roadPoint) => {
        ctx.lineTo(roadPoint.xPos, roadPoint.yPos - shift);
    });
    ctx.fill();
}

function handleStep() {
    if (shift < -9500) {
        shift = 0;
    } else {
        shift -= 10;
    }
}

function drawCoins() {
    coinsPositions.forEach((coinPosition) => {
        ctx.fillStyle = "yellow";
        ctx.strokeStyle = "orange";
        ctx.lineWidth = 3;
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.arc(coinPosition.xPos, coinPosition.yPos - shift, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.font = "bold 12px Arial";
        ctx.fillStyle = "orange";
        ctx.fillText("C", coinPosition.xPos - 5, coinPosition.yPos + 5 - shift);
    });
}
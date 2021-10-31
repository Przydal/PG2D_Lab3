const canvas = document.getElementById("myCanvas"),
    ctx = canvas.getContext("2d");

const leftKey = 'ArrowLeft',
    rightKey = 'ArrowRight';

let shift = -300,
    score = 0,
    moveLeft = false,
    moveRight = false;

const leftRoadLineStart = canvas.clientWidth / 2 - 150,
    rightRoadLineStart = canvas.clientWidth / 2 + 150,
    rightRoadRightTurn = rightRoadLineStart + 150,
    leftRoadRightTurn = leftRoadLineStart + 150

const roadLinePositions = [{
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
    ],

    coinsPositions = [{
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
        {
            xPos: 400,
            yPos: -8790
        },
        {
            xPos: 400,
            yPos: -8820
        },
        {
            xPos: 400,
            yPos: -8850
        },
        {
            xPos: 400,
            yPos: -8880
        }
    ],

    bombPositions = [{
            xPos: 380,
            yPos: -220
        },
        {
            xPos: 300,
            yPos: -500
        },
        {
            xPos: 380,
            yPos: -550
        },
        {
            xPos: 480,
            yPos: -750
        },
        {
            xPos: 260,
            yPos: -1000
        },
        {
            xPos: 310,
            yPos: -1000
        },
        {
            xPos: 440,
            yPos: -1000
        }, {
            xPos: 490,
            yPos: -1000
        },
        {
            xPos: 300,
            yPos: -1300
        },
        {
            xPos: 350,
            yPos: -1300
        },
        {
            xPos: 400,
            yPos: -1300
        },
        {
            xPos: 450,
            yPos: -1300
        },
        {
            xPos: 450,
            yPos: -1650
        },
        {
            xPos: 500,
            yPos: -1650
        },
        {
            xPos: 550,
            yPos: -1650
        },
        {
            xPos: 600,
            yPos: -1650
        },
        {
            xPos: 530,
            yPos: -2000
        },
        {
            xPos: 530,
            yPos: -2050
        },
        {
            xPos: 530,
            yPos: -2200
        },
        {
            xPos: 530,
            yPos: -2500
        },
        {
            xPos: 530,
            yPos: -2550
        },
        {
            xPos: 430,
            yPos: -2900
        },
        {
            xPos: 480,
            yPos: -2900
        },
        {
            xPos: 530,
            yPos: -2900
        },
        {
            xPos: 650,
            yPos: -3000
        },
        {
            xPos: 470,
            yPos: -3400
        },
        {
            xPos: 440,
            yPos: -3550
        },
        {
            xPos: 420,
            yPos: -3700
        },
        {
            xPos: 280,
            yPos: -4200
        },
        {
            xPos: 330,
            yPos: -4200
        },
        {
            xPos: 380,
            yPos: -4200
        },
        {
            xPos: 380,
            yPos: -4400
        },
        {
            xPos: 430,
            yPos: -4400
        },
        {
            xPos: 480,
            yPos: -4400
        },
        {
            xPos: 280,
            yPos: -4750
        },
        {
            xPos: 330,
            yPos: -4750
        },
        {
            xPos: 380,
            yPos: -4750
        },
        {
            xPos: 420,
            yPos: -5100
        },
        {
            xPos: 400,
            yPos: -5150
        },
        {
            xPos: 380,
            yPos: -5200
        },
        {
            xPos: 360,
            yPos: -5250
        },
        {
            xPos: 340,
            yPos: -5300
        },
        {
            xPos: 250,
            yPos: -5400
        },
        {
            xPos: 260,
            yPos: -5750
        },
        {
            xPos: 300,
            yPos: -7000
        },
        {
            xPos: 150,
            yPos: -7000
        },
        {
            xPos: 220,
            yPos: -7150
        },
        {
            xPos: 270,
            yPos: -7150
        },
        {
            xPos: 270,
            yPos: -7350
        },
        {
            xPos: 300,
            yPos: -7450
        },
        {
            xPos: 370,
            yPos: -7800
        },
        {
            xPos: 370,
            yPos: -8000
        },
        {
            xPos: 380,
            yPos: -8400
        },
        {
            xPos: 300,
            yPos: -8550
        },
        {
            xPos: 380,
            yPos: -8650
        }
    ];

let player = {
    xPos: canvas.clientWidth / 2 - 22,
    yPos: 400,
    width: 45,
    length: 94,
    shift: 5
}

document.onkeydown = (event) => { setDirection(event, true) };
document.onkeyup = (event) => { setDirection(event, false) };

setInterval(generateInitialScreen, 1000 / (60 * 2.5));

function generateInitialScreen() {
    generateBackground();

    generateRoad();
    drawCoins();
    generateBombs();
    drawScore();
    handlePlayer();
    handleStep();
}

function generateBombs() {
    var img = new Image();
    img.src = 'bomb.png';
    bombPositions.forEach((bombPosition) => {
        ctx.drawImage(img, bombPosition.xPos, bombPosition.yPos - shift);
    })
}

function generatePlayer() {
    var playerImg = new Image();
    playerImg.src = 'car.png';

    ctx.drawImage(playerImg, player.xPos, player.yPos);
}

function handlePlayer() {
    checkCollection();
    checkCollision();
    if (moveRight && player.xPos < canvas.width) {
        player.xPos += player.shift;
    } else if (moveLeft && player.xPos > 0) {
        player.xPos -= player.shift;
    }
    generatePlayer();
}

function setDirection(event, down) {
    if (event.key === leftKey && moveLeft !== down) {
        moveLeft = down;
    } else if (event.key === rightKey && moveRight !== down) {
        moveRight = down;
    }
}

function generateRoad() {
    drawWhiteSideRoad();
    drawRedSideRoad();
    drawRoad();
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
    if (shift < -9600) {
        shift = 0;
    } else {
        shift -= 3;
    }
}

function drawCoins() {
    coinsPositions.forEach((coinPosition) => {
        if (!coinPosition.collected) {
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
        }
    });
}

function drawScore() {
    ctx.font = "24px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Wynik: " + score, canvas.width - 150, canvas.height - 25);
}

function checkCollection() {
    coinsPositions.forEach((coin) => {
        if (!coin.collected) {
            if (Math.abs(player.xPos + player.width / 2 - coin.xPos) < player.width / 2 + 8 &&
                coin.yPos - shift - player.yPos >= 0 &&
                coin.yPos - shift - player.yPos < player.length) {
                coin.collected = true;
                score++;
                setTimeout(() => {
                    coin.collected = false
                }, 5000);
            };
        }
    });
}

function checkCollision() {
    bombPositions.forEach((bomb) => {
        if (Math.abs(player.xPos - bomb.xPos) < player.width - 8 &&
            player.yPos - bomb.yPos + shift <= 0 &&
            player.yPos - bomb.yPos + shift > -(player.length / 2)
        ) {
            resetGame();
        };
    });
}

function resetGame() {
    score = 0;
    shift = 0;
    player.xPos = canvas.clientWidth / 2 - 22;
    coinsPositions.forEach((coin) => {
        coin.collected = false;
    })
}
import KeyboardState from "./keyboardState.js";
import SpriteSheet from "./spriteSheet.js";
import { loadImage, loadLevel } from "./loaders.js";
import ImageBuffer from './imageBuffer.js';

const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");

const imageBuffer = ImageBuffer.getInstance();

var gameoverbool;
var cLoaded = true;
var seachedText = "CAT";

const LEFTARROW = 37;
const RIGHTARROW = 39;
const SPACE = 32;
const input = new KeyboardState();
input.addMapping(LEFTARROW, (keyState) => { });
input.addMapping(RIGHTARROW, (keyState) => { });
input.addMapping(SPACE, (keyState) => { });
input.listenTo(window);

var pos = {
    x: 40,
    y: 399,
};

var posBackground = {
    x: 0,
    y: 0,
};

var avatar = {
    width: 74,
    height: 74,
}

var gap = {
    width: 147,
    height: 113,
}

var block = {
    width: 50,
    height: 50,
}

var text = "";
var firstLoop = true;
var posPath = new Array();
var posGap = new Array();
var posLetter = [250, 1300, 3100, 700, 2300, 3700, 1850];
var drawLetter = [true, true, true, true, true, true, true];
var letter = ["C", "A", "T", "I", "X", "S", "E"];

loadImages().then(() => {
    drawCatLevel();
    setTimeout(function () {
        update();
    }, 100);
})


function move(x, y) {
    pos.x += x;
    pos.y += y;

    if (pos.x < -30) {
        pos.x = -30;
    }
    if (pos.x > 730) {
        pos.x = 730;
    }

}


function checkBlock() {

    for (let x = 0; x < posGap.length; ++x) {
        if (drawLetter[x] == true) {
            if (pos.y < (200 + block.height) && pos.y > 200 && (pos.x + avatar.width) > posLetter[x] && pos.x < (posLetter[x] + block.width)) {
                drawLetter[x] = false;
                text = text + letter[x];
            }
        }
    }
}


// Text an (x,y) ausgeben
// size: Schriftgröße
// text: Text
// align: Bezug für (x,y), zwei Buchstaben, z.B. lu für links unten, s. case
// diretion: Textrichtung: v für vertikal, sonst horizontal
canvas.text = function (x, y, size, color, text, align, direction) {
    var align_h = "m";
    var align_v = "m";
    if (align && align.length) {
        align_h = align.substr(0, 1);
        if (align.length > 1) align_v = align.substr(1, 1);
    }
    context.save();
    context.translate(x, this.h - y);
    if (direction && direction == "v")
        context.rotate(1.5 * Math.PI);
    switch (align_h) {
        case "l": context.textAlign = "start"; break;
        case "m": context.textAlign = "center"; break;
        case "r": context.textAlign = "end"; break;
        default: context.textAlign = "center"; break;
    }
    switch (align_v) {
        case "o": context.textBaseline = "top"; break;
        case "m": context.textBaseline = "middle"; break;
        case "u": context.textBaseline = "bottom"; break;
        default: context.textBaseline = "middle"; break;
    }
    context.font = size + " sans-serif";
    context.fillStyle = color;
    context.fillText(text, x, y);
    context.restore();
} 


function checkInGap() {
    for (let x = 0; x < posGap.length; ++x) {
        if (pos.x + avatar.width * 0.6 > posGap[x] * gap.width && (posGap[x] + 1) * gap.width > pos.x + avatar.width * 0.8 && pos.y >= 399) {
            return true;
        }
    }
    return false;
}


function checkGameOver() {
    for (let x = 0; x < posGap.length; ++x) {
        if (pos.x + avatar.width * 0.6 > posGap[x] * gap.width && (posGap[x] + 1) * gap.width > pos.x + avatar.width * 0.8 && pos.y >= canvas.height) {
            return true;
        }
    }
}


function loadcity() {
    return retreiveImageFromBuffer("city2")
        .then((image) => {
            const sprites = new SpriteSheet(image, 800, 471);
            sprites.define("city", 0, 0);
            for (let x = 0; x < 15; ++x) {
                sprites.draw("city", context, posBackground.x + x * sprites.width, posBackground.y);
            }
        });
}

function drawGameover() {
    return retreiveImageFromBuffer("gameOver")
        .then((image) => {
            const sprites = new SpriteSheet(image, 800, 584);
            sprites.define("gameOver", 0, 0);
            sprites.draw("gameOver", context, 1, 0);
        });
}


function drawYouWin() {
    return retreiveImageFromBuffer("win")
        .then((image) => {
            const sprites = new SpriteSheet(image, 800, 584);
            sprites.define("win", 0, 0);
            sprites.draw("win", context, 1, 0);
        });
}


function drawCatLevel() {
    return retreiveImageFromBuffer("LevelCat")
        .then((image) => {
            const sprites = new SpriteSheet(image, 800, 584);
            sprites.define("LevelCat", 0, 0);
            sprites.draw("LevelCat", context, 1, 0);
        });
}


function loadC() {
    return retreiveImageFromBuffer("C")
        .then((image) => {
            const sprites = new SpriteSheet(image, 50, 50);
            sprites.define("LetterC", 0, 0);
            sprites.draw("LetterC", context, posLetter[0], 200);
        });
}

function loadA() {
    return retreiveImageFromBuffer("A")
        .then((image) => {
            const sprites = new SpriteSheet(image, 50, 50);
            sprites.define("LetterA", 0, 0);
            sprites.draw("LetterA", context, posLetter[1], 200);
        });
}

function loadT() {
    return retreiveImageFromBuffer("T")
        .then((image) => {
            const sprites = new SpriteSheet(image, 50, 50);
            sprites.define("LetterT", 0, 0);
            sprites.draw("LetterT", context, posLetter[2], 200);
        });
}

function loadI() {
    return retreiveImageFromBuffer("I")
        .then((image) => {
            const sprites = new SpriteSheet(image, 50, 50);
            sprites.define("LetterI", 0, 0);
            sprites.draw("LetterI", context, posLetter[3], 200);
        });
}

function loadX() {
    return retreiveImageFromBuffer("X")
        .then((image) => {
            const sprites = new SpriteSheet(image, 50, 50);
            sprites.define("LetterX", 0, 0);
            sprites.draw("LetterX", context, posLetter[4], 200);
        });
}

function loadS() {
    return retreiveImageFromBuffer("S")
        .then((image) => {
            const sprites = new SpriteSheet(image, 50, 50);
            sprites.define("LetterS", 0, 0);
            sprites.draw("LetterS", context, posLetter[5], 200);
        });
}

function loadE() {
    return retreiveImageFromBuffer("E")
        .then((image) => {
            const sprites = new SpriteSheet(image, 50, 50);
            sprites.define("LetterE", 0, 0);
            sprites.draw("LetterE", context, posLetter[6], 200);
        });
}

function drawPath(background, context, sprites) {
    background.ranges.forEach(([x1, x2, y1, y2]) => {
        for (let x = x1; x < x2; ++x) {
            if (firstLoop) {
                // posPath.push(x*background.distance[x]);
                if (-(background.distance[x] - 1)) {
                    posPath.push(x);
                }
            }
            sprites.drawTile(background.ground, context, posPath[x], 471);
        }
    });
}


function loadGround() {
    return retreiveImageFromBuffer("path")
        .then((image) => {
            const sprites = new SpriteSheet(image, 147, 113);
            sprites.define("ground", 0, 0);

            loadLevel("level1")
                .then((level) => {
                    drawPath(level.backgrounds[0], context, sprites);
                });
        });
}

function drawGap() {
    return retreiveImageFromBuffer("gap2")
        .then((image) => {

            const sprites = new SpriteSheet(image, 147, 113);
            sprites.define("gap", 0, 0);

            if (firstLoop) {
                loadLevel("level1")
                    .then((level) => {
                        for (let x = 0; x < 70; ++x) {
                            if (level.backgrounds[0].distance[x]) {
                                posGap.push(x);
                            }
                        }
                    });
            }
            for (let x = 0; x < 70; ++x) {
                sprites.drawTile("gap", context, posGap[x], 471);
            }
        });
}


function loadFigur() {
    return retreiveImageFromBuffer("superwomanavatar2")
        .then((image) => {
            const figure = new SpriteSheet(image, 74, 74);
            figure.define("figure", 0, 0);
            figure.draw("figure", context, pos.x, pos.y);
        });
}


var isJumping = false;
var isFalling = false;
var i = 0;

function jump() {
	loadSearchWord();
    if (isJumping) {
        move(0, -i * 0.07);
        i--;
    }
    else if (isFalling) {
        move(0, i * 0.08);
        i++;
    }

    if (isFalling || isJumping) {
        // Figur stoppt am Boden
        if (pos.y > 399) {
            pos.y = 399;
            isFalling = false;
            i = 0;
        }
        // Figur kann nicht aus oberen Rand raus springen
        if (pos.y < 0) {
            isJumping = false;
            isFalling = true;
            i = i / 2;
        }
        // Wenn Sprunghöhe erreicht ist fängt die Figur an zu fallen
        if (i === 0 && (isFalling || isJumping)) {
            isJumping = false;
            isFalling = true;
        }
        drawAll();
    }
}

var myReq;
var start = false;

function drawAll() {
    drawGap();
    loadcity();
    loadGround();
    loadLetters();
    setTimeout(function () {
        loadSearchWord();
    }, 100);
}


function loadLetters() {
    if (drawLetter[0] == true) {
        loadC();
    }
    if (drawLetter[1] == true) {
        loadA();
    }

    if (drawLetter[2] == true) {
        loadT();
    }

    if (drawLetter[3] == true) {
        loadI();
    }

    if (drawLetter[4] == true) {
        loadX();
    }

    if (drawLetter[5] == true) {
        loadS();
    }

    if (drawLetter[6] == true) {
        loadE();
    }
}

function loadSearchWord() {
	canvas.text(400, 50, "35px", "white", text, "mm", "h");
}

function update() {
    if(text == seachedText)
    {
        drawYouWin();
    }
    if (checkInGap()) {
        drawGameover();
    }
    if (checkBlock()) {
        drawGameover();
    }
    else {
        if (input.keyStates.get(RIGHTARROW) && !checkInGap() && !(text == seachedText)) {
            start = true;
            drawAll();
            if (pos.x > 330) {
                posBackground.x -= 2.7;
                firstLoop = false;
                for (let x = 0; x < posPath.length; ++x) {
                    posPath[x] = posPath[x] - 0.018;
                }
                for (let x = 0; x < posGap.length; ++x) {
                    posGap[x] = posGap[x] - 0.018;
                }
                for (let x = 0; x < posLetter.length; ++x) {
                    posLetter[x] = posLetter[x] - 2.8;
                }
            }
            else {
                move(2.7, 0);
            }
        } else if (input.keyStates.get(LEFTARROW) && !checkInGap() && !(text == seachedText)) {
            start = true;
            drawAll();
            move(-2.7, 0);
        }

        if (input.keyStates.get(SPACE) && !checkInGap() && !(text == seachedText)) {
            start = true;
            drawAll();
            if (!isJumping && !isFalling) {
                isJumping = true;
                i = 72;
            }
        }
        if (start == true && !checkInGap() && !(text == seachedText)) {
            jump();
            loadFigur();
            loadLetters();
            loadSearchWord();
        }
    }
    myReq = requestAnimationFrame(update);
}

function addImageToBuffer(url, name) {
    return new Promise((resolve => {
        loadImage(url)
            .then(
            (image) => {
                imageBuffer[name] = image;
                resolve();
            }
            )
            .catch(() => {
                reject();
            })
    }))
}

function retreiveImageFromBuffer(name) {
    return new Promise(((resolve, reject) => {
        if (!!imageBuffer[name]) {
            resolve(imageBuffer[name]);
        } else {
            reject();
        }
    }))
}

function loadImages() {
    return Promise.all([
        addImageToBuffer("../img/city2.png", "city2"),
        addImageToBuffer("../img/gameOver.png", "gameOver"),
        addImageToBuffer("../img/win.png", "win"),
        addImageToBuffer("../img/C.png", "C"),
        addImageToBuffer("../img/A.png", "A"),
        addImageToBuffer("../img/T.png", "T"),
        addImageToBuffer("../img/I.png", "I"),
        addImageToBuffer("../img/X.png", "X"),
        addImageToBuffer("../img/S.png", "S"),
        addImageToBuffer("../img/E.png", "E"),
        addImageToBuffer("../img/path.PNG", "path"),
        addImageToBuffer("../img/gap2.png", "gap2"),
        addImageToBuffer("../img/superwomanavatar2.png", "superwomanavatar2"),
        addImageToBuffer("../img/Cat.png", "LevelCat")
    ])
}



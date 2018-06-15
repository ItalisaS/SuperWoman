
import KeyboardState from "./keyboardState.js";
import SpriteSheet from "./spriteSheet.js"; 



const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");

const LEFTARROW = 37;
const RIGHTARROW = 39;
const SPACE = 32;
const input = new KeyboardState();
input.addMapping(LEFTARROW, (keyState) => { });
input.addMapping(RIGHTARROW, (keyState) => { });
input.addMapping(SPACE, (keyState) => { });
input.listenTo(window);



var WIDCH = 800;
var HEIGHT = 600;


//Pos of View
var posRelative = {
	x: 40,
	y: 399,
};

var pos = {
	x: 40,
	y: 399,
};


var posBackground = {
	x: 0,
	y: 0,
};

var firstLoop = true;
var posPath = new Array();
var posGap = new Array();
var posLetter = [250,1300,3100,700,2300,3700, 1850];
var tiles = new Map();
var spriteName = ["city2", "gameOver", "C", "A", "T", "I", "X", "S", "E", "path", "gap2", "superwomanavatar2"];
var spriteWidth = [800, 800, 50, 50, 50, 50, 50, 50, 50, 147, 147, 74];
var spriteHeight = [471, 584, 50, 50, 50, 50, 50, 50, 50, 113, 113, 74];

function loadSprites(spriteId) {
    var width = spriteWidth[spriteId];
    var height = spriteHeight[spriteId];
    var name = spriteName[spriteId]; 
    var image = new Image();
    if(spriteId == spriteName.length -1) {
        image.onload = function(){
                console.log("loaded: " + name); 
                tiles.set(name, new SpriteSheet(image, width, height));
                loadLevel();
            };
    } else {
        image.onload = function(){
            console.log("loaded: " + name); 
            tiles.set(name, new SpriteSheet(image, width, height));
            loadSprites(spriteId + 1)
        };
    }
    //image.onerror=alert("Image not found");
    image.src = "./img/" + name + ".png";
}


var level1;
loadSprites(0);

function loadLevel()
{
    fetch("./Level/level1.json").
    then(function(data) {
    data.json().then(
        function(level) {
            console.log("loaded level");
            level1 = level.backgrounds[0];
            init();
            setTimeout(function () {
                update();
                }
            , 100);

        }    
    );
   });
}





var oldTime = Date.now();
var newTime = Date.now();


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

function checkInGap() {
	for (let x = 0; x < posGap.length; ++x) {
		if (pos.x + tiles.get("superwomanavatar2").width * 0.6 > posGap[x] * tiles.get("gap2").width && (posGap[x] + 1) * tiles.get("gap2").width > pos.x + tiles.get("superwomanavatar2").width *0.8 && pos.y >= 399) {
            return true;
		}
	}
    return false;

}


function checkGameOver() {
	for (let x = 0; x < posGap.length; ++x) {
		if (pos.x + tiles.get("superwomanavatar2").width * 0.6 > posGap[x] * tiles.get("gap2").width && (posGap[x] + 1) * tiles.get("gap2").width > pos.x + tiles.get("superwomanavatar2").width *0.8 && pos.y >= canvas.height) {
            
            return true;
		}
	}
    return false;

}

function loadcity() { 
	for (let x = 0; x < 15; ++x) {
		tiles.get("city2").draw(context, posBackground.x + x * tiles.get("city2").width, posBackground.y);
	} 
}

function drawGameover() { 
	tiles.get("gameOver").draw(context, 0, 0);
}

function loadC() {
	tiles.get("C").draw(context, posLetter[0], 200);
}

function loadA() {
	tiles.get("A").draw(context, posLetter[1], 200);
}

function loadT() {
	tiles.get("T").draw(context, posLetter[2], 200);
}

function loadI() {
	tiles.get("I").draw(context, posLetter[3], 200);
}

function loadX() {
	tiles.get("X").draw(context, posLetter[4], 200);
}

function loadS() {
	tiles.get("S").draw(context, posLetter[5], 200);
}

function loadE() {
	tiles.get("E").draw(context, posLetter[6], 200);
}

function loadGround() {
	for (let x = 0; x < posPath.length; ++x) {
		tiles.get("path").draw( context, posPath[x] * tiles.get("path").width, 471);
	}

}
 
function drawGap() { 
	for (let x = 0; x < posGap.length; ++x) {
		tiles.get("gap2").draw( context, posGap[x] * tiles.get("gap2").width, 471);
	}
}

function init() {
    for(let x = 0; x < level1.distance.length; x++) {
        if (level1.distance[x] == 1) {
	    	posGap.push(x);
        } else {
            posPath.push(x);
        }
    } 
}

function loadFigur() {
	tiles.get("superwomanavatar2").draw(context, pos.x, pos.y);
}


var isJumping = false;
var isFalling = false;
var i = 0;

function jump() {
	if (isJumping) {
		move(0, -i * 0.07);
		i--;
	}
	else {
        
		move(0, i * 0.08);
        i++;
	}

    // Figur stoppt am Boden
    if (pos.y > 399 && !checkInGap()) {
        pos.y = 399;
        i= 0;
        isFalling = false;
    }
    if (pos.y >= canvas.height) {
        pos.y = canvas.height + 10;
        i = 0
    }
    
    // Figur kann nicht aus oberen Rand raus springen
    if (pos.y < 0) {
        isJumping = false;
        i = 0;
    }
    // Wenn Sprunghöhe erreicht ist fängt die Figur an zu fallen
    if (i == 0 && isJumping) {
        isJumping = false;
        isFalling = true;
    }
}
var myReq;
function update() {
	if (checkGameOver()) {
        console.log("gameOver");
		drawGameover();
	}
	else {
		if (input.keyStates.get(RIGHTARROW) && !checkInGap()) {
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
		} else if (input.keyStates.get(LEFTARROW) && !checkInGap()) {
			move(-2.7, 0);
		}
		if (input.keyStates.get(SPACE) && !checkInGap()) {
			if (!isJumping && !isFalling) {
				isJumping = true;
				i = 72;
			}
		}
		jump();
        newTime = Date.now();

        if(newTime - oldTime >= 1000/30) {
		    drawAll();
            oldTime = newTime;
        }

	}
	myReq = requestAnimationFrame(update);
}

function drawAll() {
	loadcity();
	loadGround();
	drawGap();
	loadLetters();
    loadFigur();
 }

function loadLetters() {
	loadC();
	loadA();
	loadT();
	
	loadI();
	loadX();
	loadS();
	loadE();
}




import KeyboardState from "./keyboardState.js";
import SpriteSheet from "./spriteSheet.js";
import {loadImage, loadLevel} from "./loaders.js";

const canvas = document.getElementById("screen");
const context = canvas.getContext("2d");

const LEFTARROW = 37;
const RIGHTARROW = 39;
const SPACE = 32;
const input = new KeyboardState();
input.addMapping(LEFTARROW, keyState => { });
input.addMapping(RIGHTARROW, keyState => { });
input.addMapping(SPACE, keyState => { });
input.listenTo(window);

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
	var posBrick = new Array(); 
	//window.setInterval(update, 9000);
	
	function move(x, y) {
		pos.x += x;
		pos.y += y;
		
		if(pos.x < -30)
		{
			pos.x = -30;
		}
		if(pos.x > 730) {
			pos.x = 730;
		}
		
	}
		function loadcity() {
			return loadImage("img/city2.png")
				.then((image) => {
					const sprites = new SpriteSheet(image, 800, 471);
					sprites.define("city", 0, 0);
					for(let x = 0; x < 15; ++x) {
						sprites.draw("city", context, posBackground.x + x* sprites.width, posBackground.y);
					}
				});
		}
		
		function drawGameover() {
			return loadImage("img/gameOver.png")
				.then((image) => {
					const sprites = new SpriteSheet(image, 800, 584);
					sprites.define("gameOver", 0, 0);
					sprites.draw("gameOver", context, 1,0); 
				});
		}
		
		function loadBricks() {
			return loadImage("img/Brick.PNG")
				.then(image => {
					const sprites = new SpriteSheet(image, 50, 50);
					sprites.define("brick", 0, 0);
					loadLevel("level1")
					.then(level => {
						for(let x = 0; x < 5; ++x) {
							if (firstLoop) {
								posBrick.push(level.backgrounds[0].positionBrick[x]);
							}
							sprites.draw("brick", context, posBrick[x], 200)
						}
					});
				});
		}
		
		function drawPath(background, context, sprites) {
			background.ranges.forEach(([x1,x2,y1,y2]) => {
				for(let x = x1; x < x2; ++x) {
					if(firstLoop) {
						// posPath.push(x*background.distance[x]);
						if(-(background.distance[x] - 1 ))
							posPath.push(x);
					}
					sprites.drawTile(background.ground, context, posPath[x] , 471);
				}
			});
		}


		function loadGround() {
			return loadImage("img/path.PNG")
				.then((image) => {
					const sprites = new SpriteSheet(image, 147, 113);
					sprites.define("ground", 0, 0);
					
					loadLevel("level1")
					.then(level => {
						// console.log(level);
						drawPath(level.backgrounds[0], context, sprites);
					})
				});
		}
		
		function drawGap() {
			return loadImage("img/gap2.png")
			.then((image) => {
				
				const sprites = new SpriteSheet(image, 147, 113);
				sprites.define("gap", 0, 0);
				
					if(firstLoop) { 
						loadLevel("level1")
						.then(level => {
							for(let x = 0; x < 70; ++x) {
								if (level.backgrounds[0].distance[x])
									posGap.push(x);
							}
						})
					}
				for(let x = 0; x < 70; ++x) {
					sprites.drawTile("gap", context, posGap[x], 471);
				}
			});
		}
		
		function loadFigur() {
			return loadImage("img/superwomanavatar2.png")
				.then((image) => {
					const figure = new SpriteSheet(image, 74, 74);
					figure.define("figure", 0, 0);
					figure.draw("figure", context, pos.x, pos.y);
				});
		}

		var isJumping = false;
		var isFalling = false;
		var i;

		function jump() {
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
			}
		}
		var myReq;
		function update() {
			if(gameoverbool)
				drawGameover();
			else{
				drawGap();
				loadcity();
				loadGround();
				loadBricks();
				if (input.keyStates.get(RIGHTARROW)) {
					if(pos.x > 330) {
						posBackground.x -= 2.7;
						firstLoop = false;
						for(let x = 0; x < posPath.length; ++x) {
								posPath[x] = posPath[x] -0.018;
						}
						for(let x = 0; x < posGap.length; ++x) {
							checkGameOver();
							posGap[x] = posGap[x] -0.018;
						}
						for(let x = 0; x < posBrick.length; ++x) {
							posBrick[x] = posBrick[x] -2.8;
						}
					}
					else {
						move(2.7, 0);
					}
				} else if (input.keyStates.get(LEFTARROW)) {
					checkGameOver();
					move(-2.7, 0);
				} else {
					checkGameOver();
				}
				
				if (input.keyStates.get(SPACE)) {
					if (!isJumping && !isFalling) {
						isJumping = true;
						i = 72;
					}
				}
				jump();
				loadFigur();
			}
			myReq = requestAnimationFrame(update);
		}
		
		function checkGameOver() {
			for(let x = 0; x < posGap.length; ++x) {
				if(1.6<posGap[x] && posGap[x]<2.6 && pos.y == 399) {
					stopGame();
				}
			}
			
		}

		var gameoverbool;
		function stopGame() {
			gameoverbool = true;
			//drawGameover();
			//cancelAnimationFrame(myReq);
		}
		
		// load and draw images
		
//		var calculated_time_in_ms = getCurrentTimeInMs();
//		while(gameoverbool == false) {
			drawGap();
			loadcity();
			setTimeout(loadGround, 200, pos.x, pos.y);
			setTimeout(loadBricks, 200, 150, 250);
			setTimeout(loadFigur, 200, pos.x, pos.y);
			setTimeout(function() {
				update();
			}, 100);
			
			//update();


import KeyboardState from './keyboardState.js';
import {ObserverList, Subject} from './observer.js';
import SpriteSheet from './spriteSheet.js';
import {loadImage, loadLevel} from './loaders.js';
import {theSubject, init} from './pattern.js';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');
// context.fillRect(0,0,500,500);

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
	
		function loadcity() {
			return loadImage('img/city.PNG')
				.then(image => {
					const sprites = new SpriteSheet(image, 800, 471);
					sprites.define('city', 0, 0);
					for(let x = 0; x < 15; ++x) {
						sprites.draw('city', context, posBackground.x + x* sprites.width, posBackground.y);
					}
				});
		}
		
		function drawGameover() {
			return loadImage('img/gameOver.png')
				.then(image => {
					const sprites = new SpriteSheet(image, 800, 471);
					sprites.define('gameOver', 0, 0);
					sprites.draw('gameOver', context, 1,0);
				});
		}
		
		function loadBricks() {
			return loadImage('img/Brick.PNG')
				.then(image => {
					const sprites = new SpriteSheet(image, 50, 50);
					sprites.define('brick', 0, 0);
					loadLevel('level1')
					.then(level => {
						for(let x = 0; x < 5; ++x) {
							if (firstLoop) {
								posBrick.push(level.backgrounds[0].positionBrick[x]);
							}
							sprites.draw('brick', context, posBrick[x], 200)
						}
					})
				});
		}


		function loadGround() {
			return loadImage('img/path.PNG')
				.then(image => {
					const sprites = new SpriteSheet(image, 147, 113)
					sprites.define('ground', 0, 0);
					
					loadLevel('level1')
					.then(level => {
						// console.log(level);
						drawPath(level.backgrounds[0], context, sprites);
					})
				});
		}

		function drawPath(background, context, sprites) {
			background.ranges.forEach(([x1,x2,y1,y2]) => {
				for(let x = x1; x < x2; ++x) {
					if(firstLoop == true) {
						// posPath.push(x*background.distance[x]);
						if(-(background.distance[x] - 1 ))
							posPath.push(x);
					}
					sprites.drawTile(background.ground, context, posPath[x] , 471);
				}
			});
		}
		
		function drawGap() {
			return loadImage('img/gap2.png')
			.then(image => {
				
				const sprites = new SpriteSheet(image, 147, 113);
				sprites.define('gap', 0, 0);
				
					if(firstLoop == true) { 
						loadLevel('level1')
						.then(level => {
							for(let x = 0; x < 70; ++x) {
								if (level.backgrounds[0].distance[x])
									posGap.push(x);
							}
						})
					}
				for(let x = 0; x < 70; ++x) {
					sprites.drawTile('gap', context, posGap[x], 471);
				}
			});
		}
		
		function loadFigur() {
			return loadImage('img/superwomanavatar2.png')
				.then(image => {
					const figure = new SpriteSheet(image, 74, 74);
					figure.define('figure', 0, 0);
					figure.draw('figure', context, pos.x, pos.y);
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
				if (i == 0 && (isFalling || isJumping)) {
					isJumping = false;
					isFalling = true;
				}
			}
		}

		function update() {
			//drawGap();
			//loadcity();
			//loadGround();
			
			if (input.keyStates.get(RIGHTARROW)) {
				if(pos.x > 330) {
					posBackground.x -= 2.7;
					firstLoop = false;
					for(let x = 0; x < posPath.length; ++x) {
							posPath[x] = posPath[x] -0.018;
					}
					for(let x = 0; x < posGap.length; ++x) {
						posGap[x] = posGap[x] -0.018;
						checkGameOver();
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

			requestAnimationFrame(update);
		}
		
		function checkGameOver() {
			for(let x = 0; x < posGap.length; ++x) {
				if(1.6<posGap[x] && posGap[x]<2.6 && pos.y == 399) {
					stopGame();
				}
			}
		}

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
		
		function stopGame() {
			pos.x = 33;
			pos.y = 499;
			drawGameover();
			cancelAnimationFrame();
		}
//
//		function createObserver() {
//			var theEventHandler = function (input.listenTo(window)){
//				console.log("fired: " + input);
//			};
//		
//			var subject = new theSubject();
//		
//			subject.addObserver(theEventHandler); //adds the given function in handler list
//			subject.notify(drawGap()); //calls the function once.
//			subject.notify(loadcity()); //notify doesn't call anything
//			subject.notify(loadGround()); //calls it once with event 3
//			subject.notify(update());
//			subject.removeObserver(theEventHandler); //removes this function twice from the function list
//		}

	//	export function model(){
	//		var self = this;
	//		this.heading = "Hello";
	//		//collection of observers 
	//		  this.observers = []; 
	//		//add to the collection of observers
	//		this.registerObserver = function(observer){
	//			self.observers.push(observer);
	//		}
	//		//Iterate over observers, calling their update method
	//		this.notifyAll = function(){
	 //			self.observers.forEach(function(observer){
		//			observer.update(self);
	//			  })
	//		}
	//	  }

		const LEFTARROW = 37;
		const RIGHTARROW = 39;
		const SPACE = 32;
		const input = new KeyboardState();
		input.addMapping(LEFTARROW, keyState => { });
		input.addMapping(RIGHTARROW, keyState => { });
		input.addMapping(SPACE, keyState => { });
		input.listenTo(window);

		var theEventHandler = function(input){
			console.log(input);
		}
		var observer = new Subject;
		observer.addObserver(theEventHandler);
		observer.notify(update);

//		init();

		// load and draw images
		drawGap();
		loadcity();
		setTimeout(loadGround, 200, pos.x, pos.y);
		//loadBricks();
		// setTimeout(loadBricks, 200, 150, 250);
		setTimeout(loadFigur, 200, pos.x, pos.y);
//		createObserver();
		//update();



//		// Extend an object with an extension
//function extend( obj, extension ){
//  for ( var key in extension ){
//    obj[key] = extension[key];
//  }
//}
// 
//// References to our DOM elements
// 
//var controlCheckbox = document.getElementById( "mainCheckbox" ),
//  addBtn = document.getElementById( "addNewObserver" ),
//  container = document.getElementById( "observersContainer" );
// 
// 
//// Concrete Subject
// 
//// Extend the controlling checkbox with the Subject class
//extend( controlCheckbox, new Subject() );
// 
//// Clicking the checkbox will trigger notifications to its observers
//controlCheckbox.onclick = function(){
//  controlCheckbox.notify( controlCheckbox.checked );
//};
// 
//addBtn.onclick = addNewObserver;
// 
//// Concrete Observer
// 
//function addNewObserver(){
// 
//  // Create a new checkbox to be added
//  var check = document.createElement( "input" );
//  check.type = "checkbox";
// 
//  // Extend the checkbox with the Observer class
//  extend( check, new Observer() );
// 
//  // Override with custom update behaviour
//  check.update = function( value ){
//    this.checked = value;
//  };
// 
//  // Add the new observer to our list of observers
//  // for our main subject
//  controlCheckbox.addObserver( check );
// 
//  // Append the item to the container
//  container.appendChild( check );
//}

		

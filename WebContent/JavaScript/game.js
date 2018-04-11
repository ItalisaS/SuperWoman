
import KeyboardState from './keyboardState.js';
import SpriteSheet from './spriteSheet.js';


		function loadImage(url) {
			return new Promise(resolve => {
				const image = new Image();
				image.addEventListener('load', () => {
					resolve(image);
				});
				image.src = url;
			});
		}


		function loadcity() {
			return loadImage('img/city.PNG')
				.then(image => {
					const sprites = new SpriteSheet(image, 800, 471);
					sprites.define('city', 0, 0);
					sprites.draw('city', context, 0, 0);
				});
		}


		function loadGround() {
			return loadImage('img/weg.PNG')
				.then(image => {
					const sprites = new SpriteSheet(image, 66, 97)
					sprites.define('ground', 0, 0)
					for (let x = 0; x < 14; ++x) {
						sprites.draw('ground', context, x * 66, 471);
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
			console.log("update");
			loadcity();
			loadGround();

			if (input.keyStates.get(RIGHTARROW)) {
				move(2, 0);
			} else if (input.keyStates.get(LEFTARROW)) {
				move(-2, 0);
			}
			if (input.keyStates.get(SPACE)) {
				if (!isJumping && !isFalling) {
					isJumping = true;
					i = 80;
					console.log('Jump');
				}
			}
			jump();
			loadFigur();


			// setTimeout(loadFigur, 200, pos.x, pos.y);
			// pos.y += 2;
			// figure.draw('idle', context, pos.x, pos.y);
			requestAnimationFrame(update);
		}

		function move(x, y) {
			pos.x += x;
			pos.y += y;

			if(pos.x > 730)
			{
				pos.x = 730;
			}
			
		}

		const LEFTARROW = 37;
		const RIGHTARROW = 39;
		const SPACE = 32;
		const input = new KeyboardState();
		input.addMapping(LEFTARROW, keyState => { });
		input.addMapping(RIGHTARROW, keyState => { });
		input.addMapping(SPACE, keyState => { });
		input.listenTo(window);


		const canvas = document.getElementById('screen');
		const context = canvas.getContext('2d');
		context.fillRect(0, 471, 800, 97);


		var pos = {
			x: 40,
			y: 399,
		};

		loadcity();
		loadGround();
		setTimeout(loadFigur, 200, pos.x, pos.y);
		update();

//import {update} from './game.js';
//import Observer from './observer.js';
	
	
	const PRESSED = 1;
		const RELEASED = 0;

export default class KeyboardState {
			constructor() {
				// Wenn der Button gehalten wird
				this.keyStates = new Map();
				this.keyMap = new Map();
			}

			addMapping(keyCode, callback) {
				this.keyMap.set(keyCode, callback);
			}
			  

			handelEvent(event) {
//				var theEventHandler = function (this){
//					console.log("fired: " + this);
//					};
//							
//								var model = new Model();
//						
//								model.registerObserver(theEventHandler); //adds the given function in handler list
//								model.notify(drawGap()); //calls the function once.
//								model.notify(loadcity()); //notify doesn't call anything
//								model.notify(loadGround()); //calls it once with event 3
//								model.notify(update());
//								model.removeObserver(theEventHandler); //removes this function twice from the function list

//				var theEventHandler = function(event){
//					console.log(event);
//				}
//				var observer = new Observer;
//				observer.add(theEventHandler);
//				observer.notify(update());


				const { keyCode } = event;

				if (!this.keyMap.has(keyCode)) {
					return;
				}

				event.preventDefault();

				const keyState = event.type === 'keydown' ? PRESSED : RELEASED;

				if (this.keyStates.get(keyCode) === keyState) {
					return;
				}

				this.keyStates.set(keyCode, keyState);

				this.keyMap.get(keyCode)(keyState);
			}

			listenTo(window) {
				['keydown', 'keyup'].forEach(eventName => {
					window.addEventListener(eventName, event => {
						this.handelEvent(event);
					});
				});
			}

		}

//		export function Model(){
//			var self = this;
//			this.heading = "Hello";
//			//collection of observers 
//			  this.observers = []; 
//			//add to the collection of observers
//			this.registerObserver = function(observer){
//			  self.observers.push(observer);
//			}
//			//Iterate over observers, calling their update method
//			this.notifyAll = function(){
//			  self.observers.forEach(function(observer){
//				observer.update(self);
//			  })
//			}
//		  }
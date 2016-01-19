

class RippleContainer {

	constructor() {
		this.domElement = document.createElement('div');
		this.domElement.className = "ripple-container";
		this.effect = new RippleEffect();
		this.init();
	}

	init() {
		this.domElement.appendChild(this.effect.domElement);
	}

	initEffect() {
		if (this.domElement.classList) {
	 		this.domElement.classList.add("ripple-effect-animation");
		} else { 
	 		this.domElement.className += " ripple-effect-animation";
	 	}
	}
	removeAnimation() {
  		if (this.domElement.classList) {
    		this.domElement.classList.remove('ripple-effect-animation');
  		} else {
   			this.domElement.className = this.domElement.className.replace(new RegExp('(^|\\b)' + 'ripple-effect-animation'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  		}
	}
}



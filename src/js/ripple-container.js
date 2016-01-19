

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
}
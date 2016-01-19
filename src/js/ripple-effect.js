

class RippleEffect {

	constructor() {
		this.domElement = document.createElement('div');
		this.domElement.className = "ripple-effect";
	}

	editPosition(x, y) {
		this.domElement.style.left = x + "px";
		this.domElement.style.top = y + "px";
	}
}
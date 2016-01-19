/**
*	ripple-lite.js
*	Efecto Ripple (Material Design) liviano y sin jquery
*	@author: Gerson Lázaro <http://www.gersonlazaro.com>
*	@Licencia: MIT
*/

'use strict';

class Ripple {

	constructor() {
		this.elements = [];
		this.init();
	}

	init() {
		let selected = document.querySelectorAll(".ripple");

		for(var i = 0; i < selected.length; i++){
			this.elements[i] = new RippleElement(selected[i]);
		}
	}
}


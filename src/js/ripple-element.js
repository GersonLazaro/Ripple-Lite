

class RippleElement {

	constructor(domElement) {
		this.domElement = domElement;
		this.container = new RippleContainer();
		this.img = null;
		this.init();
	}

	init() {
		if(this.isImage()){
			this.createNode();
			this.insertNode();
			this.replaceNode();
		}
		this.domElement.appendChild(this.container.domElement);
	}

	isImage(){
		return this.domElement.tagName == "IMG";
	}

	createNode() {
		this.img = this.domElement;
    	if (this.img.classList){
		  	this.img.classList.remove("ripple");
    	}else{
		  	this.img.className = this.img.className.replace(new RegExp('(^|\\b)' + "ripple".split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
    	this.domElement = document.createElement('div');
        this.domElement.className="ripple ripple-block";


        let css = window.getComputedStyle(this.img);
        this.domElement.style.width = css.getPropertyValue("width");
        this.domElement.style.height = css.getPropertyValue("height");
        this.domElement.style.position = css.getPropertyValue("position");
        this.domElement.style.float = css.getPropertyValue("float");
        this.img.position = "relative";
        this.img.float = "none";

        if(this.domElement.style.position == "static"){
        	this.domElement.style.position = "relative";
        }
    }

    insertNode() {
   		this.img.parentNode.insertBefore(this.domElement, this.img);
    }
    replaceNode() {
    	this.domElement.appendChild(this.img);
    }

    hasClass(className){
    	if (this.domElement.classList){
		  	this.domElement.classList.contains(className);
    	}else { 
		  new RegExp('(^| )' + className + '( |$)', 'gi').test(this.domElement.className);
    	}
    }
}
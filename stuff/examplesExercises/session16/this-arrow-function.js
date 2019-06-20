


const APP = {
	element: document.getElementById("my-button"),
	attachEventHandlers: () => {
		// event handlers : this → elemento que provoca el evento
		this.element.addEventListener('click', (event) => {
		  	this.registerClick(event.target.id);
		});		
	}
	registerClick: id => {
		console.log(`ID is ${id}`)
	}
	init: () => {
		attachEventHandlers()
	}
}

APP.init()
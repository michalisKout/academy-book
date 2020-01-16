class Observable {
	constructor() {
		this.controllers = [];
	}

	registerController(controller) {
		this.controllers.push(controller);
	}

	unregisterController(controller) {
		this.controllers.filter(contr => contr !== controller);
	}

	notifyAllControllers(data) {
		this.controllers.forEach(controller => {
			controller.render(data);
		});
	}

	initAllControllers(data) {
		this.controllers.forEach(controller => {
			controller.onLoad(data);
		});
	}
}

export default Observable;

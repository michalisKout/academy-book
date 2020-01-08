class Router {
	constructor() {
		this.routes = {};

		this.rootDiv = document.getElementById('root');
	}

	route(pathname, config) {
		this.routes = { ...this.routes, [pathname]: config };
		console.log(this.routes);
	}

	navigate(pathname) {
		window.history.pushState({}, pathname, window.location.origin + pathname);
		const { controller, view = null, model = null } = this.routes[pathname];
		this.rootDiv.innerHTML = '';
		new controller(view && new view(), model && new model());
	}
}

export default new Router();

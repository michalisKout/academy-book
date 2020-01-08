import { clearInnerContent } from '../../utils/utilities';

class Router {
	constructor() {
		this.routes = {};

		this.rootDiv = document.getElementById('root');
	}

	route(pathname, config) {
		this.routes = { ...this.routes, [pathname]: config };
	}

	getRouteConfig(key) {
		return this.routes[key];
	}

	navigate(pathname) {
		window.history.pushState({}, pathname, window.location.origin + pathname);
		const { controller, view = null, model = null } = this.getRouteConfig(pathname);
		clearInnerContent(this.rootDiv);

		new controller(view && new view(), model && new model());
	}
}

export default new Router();

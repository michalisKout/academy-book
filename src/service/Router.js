import { clearInnerContent, getElementDOM } from '../utils/utilities';

class Router {
	constructor() {
		this.routes = {};
		this.rootDiv = getElementDOM('#root');
	}

	route(pathname, config) {
		this.routes = { ...this.routes, [pathname]: config };
	}

	getRouteConfig(key) {
		return this.routes[key];
	}

	createController({ controller, view = null, model = null }) {
		return new controller(view && new view(), model && new model(), this);
	}

	navigate(pathname, pageId = '') {
		clearInnerContent(this.rootDiv);
		window.history.pushState({}, pathname, window.location.origin + pathname + pageId);
		this.createController(this.getRouteConfig(pathname + pageId));
	}
}

export default Router;

import { getElementDOM } from '../utils/utilities';

const ROUTES = {
	home: '/',
	students: '/students',
};

const DEFAULT_CLASS =
	'nav-item bg-white inline-block py-2 px-4 text-blue-700 font-semibold focus:outline-none';
const ACTIVE_CLASS = `-mb-px border-l border-t border-r rounded-t ${DEFAULT_CLASS}`;
class NavBar {
	constructor(routerInstance) {
		this.routerInstance = routerInstance;
		this.render();
	}

	setNavItemStyleToDefault() {
		Array.from(document.querySelectorAll('.nav-item')).forEach((item) =>
			item.setAttribute('class', DEFAULT_CLASS)
		);
	}

	bindNavigation() {
		getElementDOM('.navbar').addEventListener('click', (event) => {
			const targetId = event.target.id;
			if (ROUTES.hasOwnProperty(targetId)) {
				this.setNavItemStyleToDefault();
				this.routerInstance.navigate(ROUTES[targetId]);
				document.getElementById(targetId).setAttribute('class', ACTIVE_CLASS);
			}
		});
	}

	render() {
		document.querySelector('body').insertAdjacentHTML(
			'afterbegin',
			`<ul class="navbar flex border-b m-1">
				<li class="mr-1">
					<button id="home" class="${ACTIVE_CLASS}">Home</button>
				</li>
				<li class="mr-1">
					<button id="students" class="${DEFAULT_CLASS}">Students</button>
				</li>
			</ul>`
		);
		this.bindNavigation();
	}
}

export default NavBar;

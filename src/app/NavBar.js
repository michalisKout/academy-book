import { getElementDOM } from '../utils/utilities';

class NavBar {
	constructor(routerInstance) {
		this.routerInstance = routerInstance;
		this.render();
	}

	bindNavigation() {
		getElementDOM('body').addEventListener('click', (event) => {
			const targetId = event.target.id;

			switch (targetId) {
				case 'home':
					this.routerInstance.navigate('/');
					break;
				case 'students':
					this.routerInstance.navigate('/students');
					break;
				default:
					break;
			}
		});
	}

	render() {
		document.querySelector('body').insertAdjacentHTML(
			'afterbegin',
			`<ul class="flex border-b">
				<li class="-mb-px mr-1">
					<button id="home" class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold focus:outline-none">Home</button>
				</li>
				<li class="mr-1">
					<button id="students" class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold focus:outline-none">Students</button>
				</li>
			</ul>`
		);
		this.bindNavigation();
	}
}

export default NavBar;

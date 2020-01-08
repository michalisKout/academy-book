import { getElementDOM } from '../utils/utilities';

class NavBar {
	constructor(navigateFn) {
		this.navigateFn = navigateFn;
		this.render();
	}

	bindNavigation() {
		getElementDOM('body').addEventListener('click', event => {
			const targetId = event.target.id;

			switch (targetId) {
				case 'home':
					this.navigateFn('/');
					break;
				case 'students':
					this.navigateFn('/students');
					break;
				default:
					break;
			}
		});
	}

	render() {
		document.querySelector('body').insertAdjacentHTML(
			'afterbegin',
			`<div class="navbar" style="width:100%;position:fixed;top:0;right:0;background:#f0f0f0">
            <button id="home">Home</button>
            <button id="students">Students</button>
        </div>`
		);
		this.bindNavigation();
	}
}

export default NavBar;

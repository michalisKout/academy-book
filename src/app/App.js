/* eslint-disable no-unused-vars */
import HomeController from './Controllers/HomeController';
import StudentsController from './Controllers/StudentsController';
import StudentsView from './Views/StudentsView';
import StudentsModel from './Models/StudentsModel';
import HomeView from './Views/HomeView';
import Router from '../service/Router';
import NavBar from './NavBar';

function App() {
	new NavBar(Router.navigate.bind(Router));
	const homeRouteConfig = {
		controller: HomeController,
		view: HomeView
	};

	const studentsRouteConfig = {
		controller: StudentsController,
		view: StudentsView,
		model: StudentsModel
	};
	Router.route('/', homeRouteConfig);
	Router.route('/students', studentsRouteConfig);

	Router.navigate('/');
	return `<div>Academy Book</div>`;
}

export default App;

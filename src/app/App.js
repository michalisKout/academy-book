/* eslint-disable no-unused-vars */
import HomeController from './Controllers/HomeController';
import StudentsController from './Controllers/StudentsController';
import StudentsView from './Views/StudentsView';
import StudentsModel from './Models/StudentsModel';
import HomeView from './Views/HomeView';
import Router from '../service/Router';
import NavBar from './NavBar';

function App() {
	const router = new Router();
	new NavBar(router);

	const homeRouteConfig = {
		controller: HomeController,
		view: HomeView
	};

	const studentsRouteConfig = {
		controller: StudentsController,
		view: StudentsView,
		model: StudentsModel
	};

	router.route('/', homeRouteConfig);
	router.route('/students', studentsRouteConfig);

	router.navigate('/');
	return ``;
}

export default App;

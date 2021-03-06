import { clearInnerContent, getElementDOM } from '../utils/utilities';
import StudentsApi from '../service/StudentsAPI';
import StudentController from '../app/Controllers/StudentController';
import StudentView from '../app/Views/StudentView';
import StudentModel from '../app/Models/StudentModel';
class Router {
	constructor() {
		this.routes = {};
		this.rootDiv = getElementDOM('#root');
		this.students = [];
		this.initStudentRoutes();
	}

	initStudentRoutes() {
		StudentsApi.getAllStudents(incomingStudents => {
			this.students = [...incomingStudents];
			this.students.forEach(student => {
				const studentRouteConfig = {
					controller: StudentController,
					view: StudentView,
					model: StudentModel
				};
				const studentsPathname = `/student/${student.id}`;

				this.route(studentsPathname, studentRouteConfig);
			});
			console.group('<== AVAILABLE ROUTES ==>');
			console.log(this.routes);
		});
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

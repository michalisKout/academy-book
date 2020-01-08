import StudentsApi from '../../service/StudentsAPI';

const EMPTY_STUDENT = { id: 0 };
class StudentsController {
	constructor(homeView, studentsModel) {
		this.homeView = homeView;
		this.studentsModel = studentsModel;
		this.studentsModel.registerController(this);
		this.bindStudentEvents();
	}

	updateView(students) {
		this.homeView.displayAllStudents(students);
	}

	bindStudentEvents() {
		StudentsApi.getAllStudents(this.studentsModel.init.bind(this.studentsModel));
		this.homeView.bindStudentsOnLoad(this.studentsModel.getStudents());
		this.homeView.bindDeleteStudent(this.studentsModel.removeStudentById.bind(this.studentsModel));
	}

	bindSelectPeriod() {}

	searchData(searchText, displayFn) {
		if (searchText) {
			StudentsApi.getStudentByQuery(searchText, displayFn);
		} else {
			displayFn(EMPTY_STUDENT);
		}
	}
}

export default StudentsController;

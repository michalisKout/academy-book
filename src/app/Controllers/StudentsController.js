import StudentsApi from '../../service/StudentsAPI';

const EMPTY_STUDENT = { id: 0 };
class StudentsController {
	constructor(studentsView, studentsModel) {
		this.studentsView = studentsView;
		this.studentsModel = studentsModel;
		this.studentsModel.registerController(this);
		this.bindStudentEvents();
	}

	updateView(students) {
		this.studentsView.displayAllStudents(students);
	}

	bindStudentEvents() {
		StudentsApi.getAllStudents(this.studentsModel.init.bind(this.studentsModel));
		this.studentsView.bindStudentsOnLoad(this.studentsModel.getStudents());
		this.studentsView.bindDeleteStudent(this.studentsModel.removeStudentById.bind(this.studentsModel));
		this.studentsView.bindSelectAcademyPeriod(this.selectPeriod);
	}

	selectPeriod(periodQuery, displayFn) {
		if (periodQuery) {
			StudentsApi.getStudentByFilter(periodQuery, displayFn);
		} else {
			displayFn(EMPTY_STUDENT);
		}
	}
}

export default StudentsController;

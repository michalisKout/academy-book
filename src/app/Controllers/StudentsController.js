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
		this.studentsView.bindDeleteStudent(this.studentsModel.removeStudentById.bind(this.studentsModel));
		this.studentsView.bindSelectAcademyPeriod(this.selectPeriod);
	}

	// getUniqueAcademyPeriods() {
	// 	const periods = this.studentsModel.getStudents().map(student => student.academy_period);
	// 	return new Set(periods);
	// }

	selectPeriod(periodQuery, displayFn) {
		StudentsApi.getStudentByFilter(periodQuery, displayFn);
	}
}

export default StudentsController;

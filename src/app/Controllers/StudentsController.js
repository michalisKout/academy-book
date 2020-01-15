import StudentsApi from '../../service/StudentsAPI';

class StudentsController {
	constructor(studentsView, studentsModel) {
		this.studentsView = studentsView;
		this.studentsModel = studentsModel;
		this.studentsModel.registerController(this);
		this.bindStudentEvents();
	}

	onLoad(students) {
		console.log('on load');
		this.studentsView.displayAllStudents(students);
		this.studentsView.displayFilterOptions(students);
	}

	bindStudentEvents() {
		StudentsApi.getAllStudents(this.studentsModel.init.bind(this.studentsModel));
		this.studentsView.bindDeleteStudent(this.studentsModel.removeStudentById.bind(this.studentsModel));
		this.studentsView.bindSelectAcademyPeriod(this.selectPeriod);
	}

	selectPeriod(periodQuery, displayFn) {
		StudentsApi.getStudentByFilter(periodQuery, displayFn);
	}

	render(students) {
		console.log('on update');
		this.studentsView.displayAllStudents(students);
	}
}

export default StudentsController;

import StudentsApi from '../../service/StudentsAPI';

class StudentsController {
	constructor(studentsView, studentsModel) {
		this.studentsView = studentsView;
		this.studentsModel = studentsModel;
		this.studentsModel.registerController(this);

		this.bindStudentEvents();
		this.bindViewEvents();
	}

	onLoad(students) {
		console.log('on load');
		this.studentsView.displayAllStudents(students);
		this.studentsView.displayFilterOptions(students);
	}

	bindStudentEvents() {
		this.initStudents = this.initStudents.bind(this);
		this.removeStudent = this.removeStudent.bind(this);
		StudentsApi.getAllStudents(this.initStudents);
	}

	bindViewEvents() {
		this.studentsView.bindDeleteStudent(this.removeStudent);
		this.studentsView.bindSelectAcademyPeriod(this.selectPeriod);
	}

	initStudents(data) {
		this.studentsModel.init(data);
	}

	removeStudent(id) {
		this.studentsModel.removeStudentById(id);
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

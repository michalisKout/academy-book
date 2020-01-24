import StudentsApi from '../../service/StudentsAPI';

class StudentsController {
	constructor(studentsView, studentsModel, router) {
		this.router = router;
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
		this.selectPeriod = this.selectPeriod.bind(this);

		StudentsApi.getAllStudents(this.initStudents);
	}

	bindViewEvents() {
		this.studentsView.bindDeleteStudent(this.removeStudent);
		this.studentsView.bindSelectAcademyPeriod(this.selectPeriod);
		this.studentsView.bindClickStudent(this.router);
	}

	initStudents(data) {
		this.studentsModel.init(data);
	}

	removeStudent(id) {
		this.studentsModel.removeStudentById(id);
	}

	selectPeriod(periodQuery) {
		const studentsHandler = this.studentsModel.setStudents.bind(this.studentsModel);
		return () => StudentsApi.getStudentByFilter(periodQuery, studentsHandler);
	}

	render(students) {
		console.log('on update');
		this.studentsView.displayAllStudents(students);
	}
}

export default StudentsController;

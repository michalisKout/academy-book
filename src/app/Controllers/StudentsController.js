import StudentsApi from '../../service/StudentsAPI';

const EMPTY_STUDENT = { id: 0 };
class StudentsController {
	constructor(studentsView, studentsModel) {
		this.studentsView = studentsView;
		this.studentsModel = studentsModel;
		this.studentsModel.registerController(this);
		StudentsApi.getAllStudents(this.studentsModel.init.bind(this.studentsModel));
		this.bindStudentEvents();
	}

	update(students) {
		this.studentsView.displayAllStudents(students);
	}

	bindStudentEvents() {
		this.studentsView.bindStudentsOnLoad(this.studentsModel.getStudents());
		this.studentsView.bindInputStudent(this.studentsModel.getStudents(), this.memoizeStudentInput);
		this.studentsView.bindDeleteStudent(this.studentsModel.removeStudentById.bind(this.studentsModel));
	}

	memoizeStudentInput(studentId, cachedStudents, displayFn) {
		const existingStudent = cachedStudents.find(student => student.id === studentId);
		if (!studentId) displayFn(EMPTY_STUDENT);
		if (existingStudent) {
			displayFn(existingStudent);
		} else if (studentId) {
			StudentsApi.getStudentById(studentId, displayFn);
		}
	}
}

export default StudentsController;

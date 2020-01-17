import StudentsApi from '../../service/StudentsAPI';

class StudentController {
	constructor(studentView, studentModel) {
		this.studentView = studentView;
		this.studentModel = studentModel;
		this.studentModel.registerController(this);

		this.studentId = window.location.pathname.split('/')[2];
		this.bindStudentEvents();
	}

	bindStudentEvents() {
		this.updateView = this.updateView.bind(this);
		StudentsApi.getStudentById(this.studentId, this.studentModel.setStudent.bind(this.studentModel));
		this.studentView.bindCommentInput(this.updateView);
	}

	updateView(newComment) {
		const student = this.studentModel.getStudent();
		const updateHandler = this.studentModel.updateStudent.bind(this.studentModel);
		return () => StudentsApi.updateStudentComments(student, newComment, updateHandler);
	}

	render(student) {
		this.studentView.displayStudent(student);
	}

	onLoad(student) {
		this.studentView.displayStudent(student);
	}

	addStudentComment(student) {}
}

export default StudentController;

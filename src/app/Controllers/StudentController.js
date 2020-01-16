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
		StudentsApi.getStudentById(this.studentId, this.studentModel.setStudent.bind(this.studentModel));
	}

	onLoad(student) {
		this.studentView.displayStudent(student);
	}
}

export default StudentController;

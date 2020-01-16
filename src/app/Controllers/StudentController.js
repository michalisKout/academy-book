import StudentsApi from '../../service/StudentsAPI';

class StudentController {
	constructor(studentView, studentModel) {
		this.studentView = studentView;
		this.studentModel = studentModel;

		this.studentId = window.location.pathname.split('/')[2];
		this.bindStudentEvents();
	}

	bindStudentEvents() {
		// StudentsApi.getStudentById(this.studentId, this.studentModel.setStudent.bind(this.studentModel));
		StudentsApi.getStudentById(this.studentId, this.studentView.displayStudent.bind(this.studentView));
	}
}

export default StudentController;

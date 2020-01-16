import Observable from '../../utils/Observable';

class StudentModel extends Observable {
	constructor() {
		super();
		this.student = {};
	}

	setStudent(data) {
		this.student = { ...this.student, ...data };
		this.initAllControllers(this.student);
	}

	getStudent() {
		return this.student;
	}

	getId() {
		return this.student && this.student.id;
	}
}

export default StudentModel;

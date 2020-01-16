class StudentModel {
	constructor() {
		this.student = {};
	}

	setStudent(data) {
		this.student = { ...this.student, ...data };
		console.log(this.student);
	}

	getStudent() {
		return this.student;
	}

	getId() {
		return this.student && this.student.id;
	}
}

export default StudentModel;

class StudentsModel {
	constructor() {
		this.students = [];
		this.controllers = [];
	}

	getStudents() {
		return this.students;
	}

	setStudents(updatedStudents) {
		this.students = updatedStudents;
		this.notifyAllControllers(this.students);
	}

	addStudent(student) {
		this.students.push(student);
		this.notifyAllControllers(this.students);
	}

	removeStudentById(studentId) {
		const updatedStudents = this.students.filter(student => student.id !== parseInt(studentId));
		this.setStudents(updatedStudents);
	}

	init(data) {
		this.students.push(...data);
		this.notifyAllControllers(this.students);
	}

	deleteStudent(student) {
		this.students.filter(std => std.id !== student.id);
	}

	registerController(controller) {
		this.controllers.push(controller);
	}

	unregisterController(controller) {
		this.controllers.filter(contr => contr !== controller);
	}

	notifyAllControllers(students) {
		this.controllers.forEach(controller => {
			controller.render(students);
		});
	}
}

export default StudentsModel;

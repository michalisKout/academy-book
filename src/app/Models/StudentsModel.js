import Observable from '../../utils/Observable';

class StudentsModel extends Observable {
	constructor() {
		super();
		this.students = [];
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
		this.initAllControllers(this.students);
	}

	deleteStudent(student) {
		this.students.filter(std => std.id !== student.id);
	}
}

export default StudentsModel;

class StudentsModel {
  constructor() {
    this.students = [];
  }

  getStudents() {
    return this.students;
  }

  addStudent(student) {
    this.students.push(student);
    // this.notifyAllControllers(this.students);
  }

  initStudents(data) {
    this.students.push(...data);
  }

  deleteStudent(student) {
    this.students.filter(std => std.id !== student.id);
  }

  // registerController(controller) {
  //   this.controllers.push(controller);
  // }

  // unregisterController(controller) {
  //   this.controllers.filter(contr => contr !== controller);
  // }

  // notifyAllControllers(data) {
  //   this.controllers.forEach(controller => {
  //     controller.notify(data);
  //   });
  // }
}

export default StudentsModel;

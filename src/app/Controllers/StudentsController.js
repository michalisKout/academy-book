import StudentsApi from '../../service/StudentsAPI';

class StudentsController {
  constructor(studentsView, studentsModel) {
    this.studentsView = studentsView;
    this.studentsModel = studentsModel;
    this.bindEvents();
    this.studentsView.bindInputStudent(this.memoizeStudentInput, this.studentsModel.getStudents());
  }

  bindEvents() {
    StudentsApi.getAllStudents(this.studentsModel);
    this.studentsView.bindStudentsOnLoad(this.studentsModel.getStudents());
  }

  memoizeStudentInput(studentId, cachedStudents, displayFn) {
    const existingStudent = cachedStudents.find(student => student.id === studentId);

    if (existingStudent) {
      displayFn(existingStudent);
    } else if (studentId) {
      StudentsApi.getStudentById(studentId, displayFn);
    }
  }
}

export default StudentsController;

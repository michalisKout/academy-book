class StudentsAPI {
  constructor() {
    this.API_URL = 'http://localhost:5500';
    this.STUDENTS_URL = '/students';
  }

  async getAllStudents(studentsModel) {
    const url = `${this.API_URL}${this.STUDENTS_URL}`;
    try {
      const students = await (await fetch(url)).json();
      studentsModel.initStudents(students);
    } catch (e) {
      console.log(e);
    }
  }

  async getStudentById(id, display) {
    const url = `${this.API_URL}${this.STUDENTS_URL}/${id}`;
    try {
      const student = await (await fetch(url)).json();
      display(student);
    } catch (e) {
      console.log(e);
    }
  }
}

export default new StudentsAPI();

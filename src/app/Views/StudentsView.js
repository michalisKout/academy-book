import {
  appendContentToParent,
  getElementDOM,
  constructElement,
  studentElement,
} from '../../utils/utilities';

const SEARCH_RESULT_ID = '#search-result';
const STUDENT_INPUT_ID = '#student';
const STUDENT_INPUT = 'student';
const EVENT_TYPES = {
  LOAD: 'load',
  INPUT: 'input',
};
const STUDENTS_LIST_ID = '#students-list';

class StudentsView {
  constructor() {
    [
      constructElement('ul', '', { type: 'id', value: 'students-list' }),
      constructElement('div', '', { type: 'id', value: 'search-result' }),
      constructElement('input', '', { type: 'id', value: 'student' }),
    ].forEach(el => {
      appendContentToParent(getElementDOM('#root'), el);
    });
  }

  bindStudentsOnLoad(students) {
    window.addEventListener(EVENT_TYPES.LOAD, () => {
      this.displayAllStudents(students);
    });
  }

  bindInputStudent(handler, students) {
    getElementDOM(STUDENT_INPUT_ID).addEventListener(EVENT_TYPES.INPUT, event => {
      const isInputStudent = event.target.id === STUDENT_INPUT;

      if (isInputStudent) {
        const studentId = event.target.value && parseInt(event.target.value, 10);
        handler(studentId, students, this.displayStudent);
      }
    });
  }

  displayStudent(student) {
    getElementDOM(SEARCH_RESULT_ID).innerHTML = '';
    if (student) appendContentToParent(getElementDOM(SEARCH_RESULT_ID), studentElement(student));
  }

  displayAllStudents(students) {
    students.forEach(student => {
      if (student) {
        appendContentToParent(getElementDOM(STUDENTS_LIST_ID), studentElement(student));
      }
    });
  }
}

export default StudentsView;

import {
	appendContentToParent,
	getElementDOM,
	constructElement,
	studentElement,
	studentSearchResult,
	emptySearchResult,
	clearInnerContent
} from '../../utils/utilities';

const DELETE_STUDENT = 'delete-student';
const SEARCH_RESULT_ID = '#search-result';
const STUDENT_INPUT_ID = '#student';
const STUDENT_INPUT = 'student';
const EVENT_TYPES = {
	LOAD: 'load',
	INPUT: 'input',
	CLICK: 'click'
};
const STUDENTS_LIST_ID = '#students-list';

class StudentsView {
	constructor() {
		[
			constructElement('ul', '', { type: 'id', value: 'students-list' }),
			constructElement('div', '', { type: 'id', value: 'search-result' }),
			constructElement('input', '', { type: 'id', value: 'student' })
		].forEach(el => {
			appendContentToParent(getElementDOM('#root'), el);
		});
	}

	bindStudentsOnLoad(students) {
		window.addEventListener(EVENT_TYPES.LOAD, () => {
			this.displayAllStudents(students);
		});
	}

	bindInputStudent(students, memoizeStudents) {
		getElementDOM(STUDENT_INPUT_ID).addEventListener(EVENT_TYPES.INPUT, event => {
			const isInputStudent = event.target.id === STUDENT_INPUT;

			if (isInputStudent) {
				const studentId = event.target.value && parseInt(event.target.value, 10);
				memoizeStudents(studentId, students, this.displayStudent);
			}
		});
	}

	bindDeleteStudent(handler) {
		getElementDOM(STUDENTS_LIST_ID).addEventListener(EVENT_TYPES.CLICK, event => {
			const targetElementId = event.target.id;

			if (targetElementId === DELETE_STUDENT) {
				handler(event.target.dataset.id);
			}
		});
	}

	displayStudent(student) {
		const searchResult = getElementDOM(SEARCH_RESULT_ID);
		let content;
		const shouldDisplayEmptySearchField = student.id === 0;
		clearInnerContent(searchResult);

		if (shouldDisplayEmptySearchField) {
			content = emptySearchResult();
		} else {
			content = studentSearchResult(student);
		}

		appendContentToParent(searchResult, content);
	}

	displayAllStudents(students) {
		const studentsList = getElementDOM(STUDENTS_LIST_ID);
		clearInnerContent(studentsList);

		students.forEach(student => {
			if (student) {
				appendContentToParent(studentsList, studentElement(student));
			}
		});
	}
}

export default StudentsView;

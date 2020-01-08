import {
	appendContentToParent,
	getElementDOM,
	constructElement,
	studentElement,
	clearInnerContent,
	studentFilters
} from '../../utils/utilities';
import { PERIODS, STUDENTS_LIST_ID, EVENT_TYPES, DELETE_STUDENT } from '../../utils/config';

class StudentsView {
	constructor() {
		[constructElement('ul', '', { type: 'id', value: 'students-list' }), studentFilters(PERIODS)].forEach(el => {
			appendContentToParent(getElementDOM('#root'), el);
		});
	}

	bindStudentsOnLoad(students) {
		window.addEventListener(EVENT_TYPES.LOAD, () => {
			this.displayAllStudents(students);
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

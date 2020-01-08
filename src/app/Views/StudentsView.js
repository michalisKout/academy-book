import {
	appendContentToParent,
	getElementDOM,
	constructElement,
	studentElement,
	clearInnerContent,
	studentFilters,
	getPeriodQueryById
} from '../../utils/utilities';
import { PERIODS, STUDENTS_LIST_ID, EVENT_TYPES, DELETE_STUDENT, STUDENTS_FILTER_ID } from '../../utils/config';

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

	bindSelectAcademyPeriod(handler) {
		getElementDOM(STUDENTS_FILTER_ID).addEventListener(EVENT_TYPES.CHANGE, event => {
			const periodId = event.target.value;
			console.log(getPeriodQueryById(periodId));
			console.log(periodId);
			handler(getPeriodQueryById(periodId), this.displayAllStudents);
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

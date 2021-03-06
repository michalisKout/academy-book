import {
	appendContentToParent,
	getElementDOM,
	constructElement,
	studentElement,
	clearInnerContent,
	academyFilters,
	getPeriodQueryById,
	getUniqueAcademyPeriods,
	addOptionsToAcademyFilter,
} from '../../utils/utilities';

import { STUDENTS_LIST_ID, EVENT_TYPES, DELETE_STUDENT, ACADEMY_FILTER } from '../../utils/config';

const STUDENTS_LIST_ELEMENT = {
	type: 'ul',
	content: '',
	attr: [
		{ type: 'id', value: 'students-list' },
		{ type: 'class', value: 'flex mb-4' }
	]
}

class StudentsView {
	constructor() {
		[constructElement(STUDENTS_LIST_ELEMENT),academyFilters(new Set())]
			.forEach((el) => {
			appendContentToParent(getElementDOM('#root'), el);
		});
	}

	bindDeleteStudent(handler) {
		getElementDOM(STUDENTS_LIST_ID).addEventListener(EVENT_TYPES.CLICK, (event) => {
			const targetElementId = event.target.id;

			if (targetElementId === DELETE_STUDENT) {
				handler(event.target.dataset.id);
			}
		});
	}

	bindClickStudent(router) {
		getElementDOM(STUDENTS_LIST_ID).addEventListener(EVENT_TYPES.CLICK, (event) => {
			const className = event.target.className;
			if (className.includes('student')) {
				const studentId = event.target.id.split('_')[1];
				const studentsPathname = `/student/${studentId}`;
				router.navigate(studentsPathname);
			}
		});
	}

	bindSelectAcademyPeriod(handler) {
		getElementDOM(ACADEMY_FILTER).addEventListener(EVENT_TYPES.CHANGE, (event) => {
			const periodId = event.target.value;
			handler(getPeriodQueryById(periodId))();
		});
	}

	displayFilterOptions(academyPeriods) {
		addOptionsToAcademyFilter(
			getElementDOM(ACADEMY_FILTER),
			getUniqueAcademyPeriods(academyPeriods)
		);
	}

	displayAllStudents(students) {
		const studentsList = getElementDOM(STUDENTS_LIST_ID);
		clearInnerContent(studentsList);

		students.forEach((student) => {
			if (student) {
				appendContentToParent(studentsList, studentElement(student));
			}
		});
	}
}

export default StudentsView;

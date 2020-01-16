import {
	appendContentToParent,
	getElementDOM,
	constructElement,
	studentElement,
	clearInnerContent
} from '../../utils/utilities';
import isEmpty from 'lodash/isEmpty';
import { STUDENT_CARD } from '../../utils/config';

class StudentView {
	constructor() {
		appendContentToParent(
			getElementDOM('#root'),
			constructElement('div', '', { type: 'id', value: 'student-card' })
		);
	}

	displayStudent(student) {
		const studentCard = getElementDOM(STUDENT_CARD);
		clearInnerContent(studentCard);

		if (!isEmpty(student)) {
			appendContentToParent(studentCard, studentElement(student));
		}
	}
}

export default StudentView;

import {
	appendContentToParent,
	getElementDOM,
	constructElement,
	studentElement,
	clearInnerContent,
	studentComments
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

	bindCommentInput(handler) {
		getElementDOM('#root').addEventListener('click', event => {
			if (event.target.id === 'add-comment') {
				handler(getElementDOM('#student-comment').value)();
			}
		});
	}

	displayComments(student) {
		const commentsContainer = getElementDOM('.students__comments');
		clearInnerContent(commentsContainer);
		appendContentToParent(commentsContainer, studentComments(student));
	}

	displayStudent(student) {
		const studentCard = getElementDOM(STUDENT_CARD);
		clearInnerContent(studentCard);

		if (!isEmpty(student)) {
			appendContentToParent(studentCard, studentComments(student));
			appendContentToParent(studentCard, studentElement(student));
			appendContentToParent(
				studentCard,
				constructElement('button', 'add comment', { type: 'id', value: 'add-comment' })
			);
			appendContentToParent(studentCard, constructElement('input', '', { type: 'id', value: 'student-comment' }));
		}
	}
}

export default StudentView;

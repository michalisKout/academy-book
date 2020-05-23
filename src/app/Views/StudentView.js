import {
	appendContentToParent,
	getElementDOM,
	constructElement,
	studentElement,
	clearInnerContent,
	studentComments,
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
		getElementDOM('#root').addEventListener('click', (event) => {
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
				constructElement(
					'button',
					'add comment',
					{ type: 'id', value: 'add-comment' },
					{
						type: 'class',
						value: 'border bg-blue-500 text-white p-2 rounded-full',
					}
				)
			);
			appendContentToParent(
				studentCard,
				constructElement(
					'input',
					'',
					{ type: 'id', value: 'student-comment' },
					{
						type: 'class',
						value:
							'w-1/6 border-b border-b-2 border-teal-500 py-2 appearance-none bg-transparent text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none',
					}
				)
			);
		}
	}
}

export default StudentView;

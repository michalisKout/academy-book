import {
	getElementDOM,
	constructElement,
	appendContentToParent,
	emptySearchResult,
	clearInnerContent,
	studentsSearchResult
} from '../../utils/utilities';
import { STUDENT_INPUT_ID, EVENT_TYPES, STUDENT_INPUT, SEARCH_RESULT_ID } from '../../utils/config';

class HomeView {
	constructor() {
		[
			constructElement('div', '', { type: 'id', value: 'search-result' }),
			constructElement('input', '', { type: 'id', value: 'student' })
		].forEach(el => {
			appendContentToParent(getElementDOM('#root'), el);
		});
	}

	bindInputStudent(searchDataFn) {
		getElementDOM(STUDENT_INPUT_ID).addEventListener(EVENT_TYPES.INPUT, event => {
			const isInputStudent = event.target.id === STUDENT_INPUT;

			if (isInputStudent) {
				const searchText = event.target.value;
				searchDataFn(searchText, this.displayStudent);
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
			console.log(student);
			content = studentsSearchResult(student);
		}

		appendContentToParent(searchResult, content);
	}
}

export default HomeView;

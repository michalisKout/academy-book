import {
    appendContentToParent,
    getElementDOM,
    constructElement,
    studentElement,
    clearInnerContent,
    studentComments,
} from '../../utils/utilities';
import isEmpty from 'lodash/isEmpty';
import {STUDENT_CARD} from '../../utils/config';
import { STUDENT_ELEMENTS } from "../constants";


class StudentView {
    constructor() {
        appendContentToParent(
            getElementDOM('#root'),
            constructElement(STUDENT_ELEMENTS.CARD)
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
        const { ADD_COMMENT_BTN, COMMENT } = STUDENT_ELEMENTS;
        const studentCard = getElementDOM(STUDENT_CARD);
        clearInnerContent(studentCard);

        if (!isEmpty(student)) {
            appendContentToParent(studentCard, studentComments(student));
            appendContentToParent(studentCard, studentElement(student));
            appendContentToParent(
                studentCard,
                constructElement(ADD_COMMENT_BTN)
            );
            appendContentToParent(
                studentCard,
                constructElement(COMMENT)
            );
        }
    }
}

export default StudentView;

/* eslint-disable camelcase */
import _ from 'lodash';

export const clearInnerContent = (element) => {
	element.innerHTML = '';
};

export const appendContentToParent = (parent, child) => {
	parent.insertAdjacentHTML('afterbegin', child);
};

export const getElementDOM = (query) => document.querySelector(query);

export const removesCommasFromElementList = (elements) =>
	elements &&
	elements
		.toString()
		.split('')
		.filter((letter) => {
			return letter !== ',';
		})
		.join('');

export const constructElement = (type, content = '', ...attrs) =>
	`<${type} ${removesCommasFromElementList(
		attrs.map((attr) => `${attr.type}="${attr.value}"`)
	)}>${content}</${type}>`;

export const studentElement = ({ id, first_name, last_name, DoB, image, studies, comments }) => {
	const allStudies = studies && studies.map((stud) => constructElement('p', `⋆ ${stud}`));
	const shouldDisplayComments =
		comments && comments.length > 0 ? `<div>comments: ${comments.length}</div>` : '';
	return `<li style="list-style:none" id="student_${id}" class="relative student m-4 w-1/4 flex-1 max-w-sm rounded overflow-hidden shadow-lg">
			<img class="w-full" id="student-img_${id}" src="${image}" />
			<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2">First Name: ${first_name}</div>
				<div class="font-bold text-xl mb-2">Last Name: ${last_name}</div>
				<div class="font-bold text-xl mb-2">Date of Birth: ${DoB}</div>
				<h3 class="font-bold text-xl mb-2">Studies</h3>
				${removesCommasFromElementList(allStudies)}${shouldDisplayComments}
				<button id="delete-student" class="m-2 absolute top-0 right-0 bg-red-500 rounded-full px-3 py-1 text-sm font-semibold hover:bg-red-100 hover:text-black text-white mr-2" data-id="${id}">
					delete
				</button>
			</div>
		</li>`;
};

export const studentComments = ({ comments }) => {
	const commentsList =
		comments.length > 0
			? comments.map((comment, index) => `<div id="comment_${index}">${comment}</div>`)
			: '';

	return `<div class="students__comments">${removesCommasFromElementList(commentsList)}</div>`;
};

export const getUniqueAcademyPeriods = (studentsList) => {
	const periods = studentsList.map((student) => student.academy_period);
	return new Set(periods);
};

export const studentsSearchResult = (students) => {
	const content = students.map(({ id, first_name, last_name, DoB }) =>
		id
			? `<div id="search-student-${id}">
					<h3>Student Information</h3>
					<div>First Name: ${first_name}</div>
					<div>Last Name: ${last_name}</div>
					<div>Date of Birth: ${DoB}</div>
				</div>`
			: `<div id="not-found">Student with this ID not found.</div>`
	);
	return removesCommasFromElementList(content);
};

export const emptySearchResult = () => '<div class="empty-search"></div>';

export const addOptionsToAcademyFilter = (selectElement, academyPeriods) => {
	selectElement.insertAdjacentHTML(
		'beforeend',
		removesCommasFromElementList(convertSetToArray(academyPeriods))
	);
};

export const academyFilters = () => {
	return `<select id="academy-filter">
				<option value="">ALL STUDENTS</option>
			</select>`;
};

export const getPeriodQueryById = (periodId) => periodId.split('_').join(' ');

const convertSetToArray = (list) => {
	const periodList = [];

	if (_.isSet(list)) {
		list.forEach((periodName) => {
			periodList.push(
				`<option value="${getPeriodId(periodName)}">${displayPeriod(periodName)}</option>`
			);
		});

		return periodList;
	}

	return list;
};

const displayPeriod = (periodName) => periodName.toUpperCase();

const getPeriodId = (periodName) => periodName.toLowerCase().trim().split(' ').join('_');

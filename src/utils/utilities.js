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

export const constructElement = ({type, content = '', attr = []}) =>
	`<${type} ${removesCommasFromElementList(
		attr.map((attr) => `${attr.type}="${attr.value}"`)
	)}>${content}</${type}>`;

export const studentElement = ({ id, first_name, last_name, DoB, image, studies, comments }) => {
	const studiesElementConfig = (stud) => ({
		type: 'p',
		content: `⋆ ${stud}`
	});
	const allStudies = studies && studies.map((stud) => constructElement(studiesElementConfig(stud)));
	const shouldDisplayComments =
		comments && comments.length > 0 ? `<div>comments: ${comments.length}</div>` : '';
	return `<li style="list-style:none" id="student_${id}" class="relative student m-4 w-1/4 flex-1 max-w-sm rounded overflow-hidden shadow-lg">
			<img class="w-full student-img" id="student-img_${id}" src="${image}" />
			<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2">First Name: ${first_name}</div>
				<div class="font-bold text-xl mb-2">Last Name: ${last_name}</div>
				<div class="font-bold text-xl mb-2">Date of Birth: ${DoB}</div>
				<h3 class="font-bold text-xl mb-2">Studies</h3>
				${removesCommasFromElementList(allStudies)}
				${shouldDisplayComments}
				<button id="delete-student" class="m-2 absolute top-0 right-0 bg-red-500 rounded-full px-3 py-1 text-sm font-semibold hover:bg-red-100 hover:text-black text-white mr-2" data-id="${id}">
					delete
				</button>
			</div>
		</li>`;
};

export const studentComments = ({ comments }) => {
	const commentsList =
		comments.length > 0
			? comments.map(
					(comment, index) =>
						`<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" id="comment_${index}">${comment}</span>`
			  )
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
			? `<div id="search-student-${id}" class="bg-red-200 m-4 max-w-sm rounded overflow-hidden shadow-lg">
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2">${first_name} ${last_name}</div>
						<div class="font-bold text-xl mb-2">Birthed on: ${DoB}</div>
					</div>
				</div>`
			: `<div id="not-found" class="max-w-sm rounded overflow-hidden shadow-lg">
				<p class="class="text-gray-700 text-base">Student with this ID not found.</p>
			</div>`
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

function displayPeriod(periodName) {
	return periodName.toUpperCase();
}

function getPeriodId(periodName) {
	return periodName.toLowerCase().trim().split(' ').join('_');
}

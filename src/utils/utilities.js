/* eslint-disable camelcase */
import _ from 'lodash';

export const clearInnerContent = element => {
	element.innerHTML = '';
};

export const appendContentToParent = (parent, child) => {
	parent.insertAdjacentHTML('afterbegin', child);
};

export const getElementDOM = query => document.querySelector(query);

export const constructElement = (type, content = '', ...attrs) =>
	`<${type} ${attrs.map(attr => `${attr.type}="${attr.value}"`)}>${content}</${type}>`;

export const removesCommasFromElementList = elements =>
	elements &&
	elements
		.toString()
		.split('')
		.filter(letter => {
			return letter !== ',';
		})
		.join('');

export const studentElement = ({ id, first_name, last_name, DoB, image, studies, comments }) => {
	const allStudies = studies && studies.map(stud => constructElement('p', `⋆ ${stud}`));
	const shouldDisplayComments = comments.length > 0 ? `<div>comments: ${comments.length}</div>` : '';
	return `<li style="list-style:none" id="student_${id}">
<hr/><button id="delete-student" data-id=${id}>delete</button>
      <img src="${image}"/>
      <div>First Name: ${first_name}</div>
      <div>Last Name: ${last_name}</div>
      <div>Date of Birth: ${DoB}</div>
      <h3>Studies</h3>
	  ${removesCommasFromElementList(allStudies)}
	  ${shouldDisplayComments}
      <hr/>
    </li>`;
};

export const getUniqueAcademyPeriods = studentsList => {
	const periods = studentsList.map(student => student.academy_period);
	return new Set(periods);
};

export const studentsSearchResult = students => {
	const content = students.map(({ id, first_name, last_name, DoB }) =>
		id
			? `<div id="search-student-${id}">
					<hr/>
					<h3>Student Information</h3>
					<hr/>
					<div>First Name: ${first_name}</div>
					<div>Last Name: ${last_name}</div>
					<div>Date of Birth: ${DoB}</div>
					<hr/>
					<hr/>
				</div>`
			: `<div id="not-found">Student with this ID not found.</div>`
	);
	return removesCommasFromElementList(content);
};

export const emptySearchResult = () => '<div class="empty-search"></div>';

export const addOptionsToAcademyFilter = (selectElement, academyPeriods) => {
	selectElement.insertAdjacentHTML('beforeend', removesCommasFromElementList(convertSetToArray(academyPeriods)));
};

export const academyFilters = () => {
	return `<select id="academy-filter">
			<option value="">ALL STUDENTS</option>
		</select>`;
};

export const getPeriodQueryById = periodId => periodId.split('_').join(' ');

const convertSetToArray = list => {
	const periodList = [];

	if (_.isSet(list)) {
		list.forEach(periodName => {
			periodList.push(`<option value="${getPeriodId(periodName)}">${displayPeriod(periodName)}</option>`);
		});

		return periodList;
	}

	return list;
};

const displayPeriod = periodName => periodName.toUpperCase();

const getPeriodId = periodName =>
	periodName
		.toLowerCase()
		.trim()
		.split(' ')
		.join('_');

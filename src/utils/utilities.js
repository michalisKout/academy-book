/* eslint-disable camelcase */
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

export const studentElement = ({ id, first_name, last_name, DoB, image, studies }) => {
	const allStudies = studies && studies.map(stud => constructElement('p', `⋆ ${stud}`));

	return id
		? `<li style="list-style:none" id="student_${id}">
<hr/><button id="delete-student" data-id=${id}>delete</button>
      <img src="${image}"/>
      <div>First Name: ${first_name}</div>
      <div>Last Name: ${last_name}</div>
      <div>Date of Birth: ${DoB}</div>
      <h3>Studies</h3>
      ${removesCommasFromElementList(allStudies)}
      <hr/>
    </li>`
		: `<div id="not-found">Student with this ID not found.</div>`;
};

export const studentSearchResult = ({ id, first_name, last_name, DoB }) => {
	return id
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
		: `<div id="not-found">Student with this ID not found.</div>`;
};

export const emptySearchResult = () => '<div class="empty-search"></div>';

export const clearInnerContent = element => {
	element.innerHTML = '';
};

/* eslint-disable camelcase */
export const appendContentToParent = (parent, child) =>
  parent.insertAdjacentHTML('afterbegin', child);

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
      <hr/>
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

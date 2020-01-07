/* eslint-disable no-unused-vars */
import StudentsController from './Controllers/StudentsController';
import StudentsModel from './Models/StudentsModel';
import StudentsView from './Views/StudentsView';

function App() {
  new StudentsController(new StudentsView(), new StudentsModel());
  return `<div>Hello</div>`;
}

export default App;

import StudentsApi from '../../service/StudentsAPI';

const EMPTY_STUDENT = { id: 0 };
class HomeController {
	constructor(homeView) {
		this.homeView = homeView;
		this.bindStudentSearch();

		//we add a model later to memoize students' data to reduce network fetches
	}

	bindStudentSearch() {
		this.homeView.bindInputStudent(this.searchData);
	}

	searchData(searchText, displayFn) {
		if (searchText) {
			StudentsApi.getStudentByQuery(searchText, displayFn);
		} else {
			displayFn(EMPTY_STUDENT);
		}
	}
}

export default HomeController;

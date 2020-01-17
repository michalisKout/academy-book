class StudentsAPI {
	constructor() {
		this.API_URL = 'http://localhost:5500';
		this.STUDENTS_URL = '/students';
	}

	async getAllStudents(handler) {
		const url = `${this.API_URL}${this.STUDENTS_URL}`;
		this.handlesDataFromUlr(url, handler);
	}

	async getStudentByQuery(searchText, handler) {
		const url = `${this.API_URL}${this.STUDENTS_URL}?q=${searchText}`;
		this.handlesDataFromUlr(url, handler);
	}

	async getStudentByFilter(filterQuery, handler) {
		const url = `${this.API_URL}${this.STUDENTS_URL}?academy_period_like=${filterQuery}`;
		this.handlesDataFromUlr(url, handler);
	}

	async getStudentById(id, handler) {
		const url = `${this.API_URL}${this.STUDENTS_URL}/${id}`;
		this.handlesDataFromUlr(url, handler);
	}

	async updateStudentComments(student, comment, handler) {
		const url = `${this.API_URL}${this.STUDENTS_URL}/${student.id}`;

		const data = { comments: [...student.comments, comment] };
		try {
			const response = await fetch(url, {
				method: 'PATCH',
				mode: 'cors',
				cache: 'no-cache',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json'
				},
				redirect: 'follow',
				referrerPolicy: 'no-referrer',
				body: JSON.stringify(data)
			});
			handler(await response.json());
		} catch (e) {
			console.log(e);
		}
	}

	async handlesDataFromUlr(url, handler) {
		try {
			const data = await (await fetch(url)).json();
			handler(data);
		} catch (e) {
			console.log(e);
		}
	}
}

export default new StudentsAPI();

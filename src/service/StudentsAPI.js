class StudentsAPI {
	constructor() {
		this.API_URL = 'http://localhost:5500';
		this.STUDENTS_URL = '/students';
	}

	async getAllStudents(handler) {
		const url = `${this.API_URL}${this.STUDENTS_URL}`;
		this.handlesDataFromUlr(url, handler);
	}

	async getStudentById(id, handler) {
		const url = `${this.API_URL}${this.STUDENTS_URL}/${id}`;
		this.handlesDataFromUlr(url, handler);
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

const baseUrl = 'http://localhost:4000/api';

class FactorialService {
    static async getFactorial(body) {
        console.log(body);
        return fetch(`${baseUrl}/getFactorial`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
    }
}

export default FactorialService;

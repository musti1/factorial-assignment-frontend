const baseUrl = 'https://lovely-yellowstone-33319.herokuapp.com/api';
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

class AuthService {
    static async signUp(body){
        return fetch(`${baseUrl}/signUp`,{
            method: 'post',
            headers,
            body: JSON.stringify(body)
        });
    }

    static async signIn(body){
        return fetch(`${baseUrl}/login`,{
            method: 'post',
            headers,
            body: JSON.stringify(body)
        });
    }
}

export default AuthService;

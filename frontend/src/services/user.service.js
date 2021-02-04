import axios from 'axios';

export const userService = {
    login,
    logout,
    register
};

function login(email, password) {
    const request = {
      email,
      password
    }
    return axios
        .post("http://127.0.0.1:8000/main/api/Pedido/", request)
        .then(res => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', res.data);
            return res.data;
        })
        .catch(err => console.log(err));
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}


function register(user) {
    return axios
        .post("http://127.0.0.1:8000/main/api/Pedido/", user)
        .then(res => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', res.data);
            return res.data;
        })
        .catch(err => console.log(err));
}

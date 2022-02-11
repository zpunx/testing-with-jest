import axios from "axios";

export async function signIn(username, password) {
    try {
        const response = await axios.post('/user/signin', { username, password });
        return response;
    } catch (exception) {
        throw new Error('user failed to sign in');
    }
};

export async function signUp(username, password) {
    try {
        const response = await axios.post('/user/signup', { username, password });
        return response;
    } catch (exception) {
        throw new Error('user failed to sign up');
    }
};

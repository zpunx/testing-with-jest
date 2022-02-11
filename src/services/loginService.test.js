import * as loginService from './loginService';
import moxios from 'moxios';

describe('loginService', () => {

    beforeEach(() => { moxios.install() });
    afterEach(() => { moxios.install() });

    it('should throw an error if user sign in request fails', async () => {
        moxios.stubRequest('/user/signin', { status: 500 });
        await expect(loginService.signIn()).rejects.toThrow();
    });

    it('should throw an error if user sign up request fails', async () => {
        moxios.stubRequest('/user/signup', { status: 500 });
        await expect(loginService.signUp()).rejects.toThrow();
    });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginPage from './LoginPage';
import moxios from 'moxios';

describe('LoginPage', () => {
    let componentUnderTest;

    const signInEndpoint = '/user/signin';
    const signUpEndpoint = '/user/signup';

    beforeEach(() => {
        componentUnderTest = render(<LoginPage />);
        moxios.install();
    });

    afterEach(() => {
        componentUnderTest.unmount();
        moxios.uninstall();
    });

    it('should send a sign in request to the back-end', (done) => {        
        moxios.stubRequest(signInEndpoint, { 
            status: 200, 
            responseText: 'user signed in successfully'
        });
        
        const emailInput = screen.getByRole('textbox', { name: /e\-mail/i });
        const passwordInput = screen.getByLabelText(/password/i);
        const submitButton = screen.getByRole('button', { name: /submit/i });
        
        userEvent.type(emailInput, 'bar@bar.com');
        userEvent.type(passwordInput, '12345');
        userEvent.click(submitButton);

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            expect(request.url).toBe(signInEndpoint);
            expect(request.config.method).toBe('post');
            done();
        });
    });

    it('should send a sign up request to the back-end', (done) => {
        moxios.stubRequest(signUpEndpoint, { 
            status: 200, 
            responseText: 'user signed up successfully'
        });
        
        const signUpTab = screen.getByRole('tab', { name: /sign up/i });    
        userEvent.click(signUpTab);

        const emailInput = screen.getByRole('textbox', { name: /e\-mail/i });
        const passwordInput = screen.getByLabelText('Password');
        const confirmPasswordInput = screen.getByLabelText('Confirm password');
        const submitButton = screen.getByRole('button', { name: /submit/i });

        userEvent.type(emailInput, 'bar@bar.com');
        userEvent.type(passwordInput, '12345');
        userEvent.type(confirmPasswordInput, '12345');
        userEvent.click(submitButton);

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            expect(request.url).toBe(signUpEndpoint);
            expect(request.config.method).toBe('post');
            done();
        });
    });
});


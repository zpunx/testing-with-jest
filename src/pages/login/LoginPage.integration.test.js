import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginPage from './LoginPage';
import * as loginService from '../../services/loginService';
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

    it('should have a Tab component', () => {
        expect(screen.getByRole('tablist')).toBeInTheDocument();
        expect(screen.getByRole('tabpanel')).toBeInTheDocument();
    });

    it('should have a SignInForm component as the active tab content', () => {
        expect(screen.getByLabelText('Sign-in form')).toBeInTheDocument();    
    });

    it('should have a SignUpForm component when the user clicks on the sign-up tab', () => {
        const signUpTab = screen.getByRole('tab', { name: /sign up/i });
        userEvent.click(signUpTab);
        expect(screen.getByLabelText('Sign-up form')).toBeInTheDocument();    
    });

    it('should call the loginService signIn callback', () => {        
        const signInCallback = jest.spyOn(loginService, 'signIn');
        
        const emailInput = screen.getByRole('textbox', { name: /email/i });
        const passwordInput = screen.getByLabelText(/password/i);
        const submitButton = screen.getByRole('button', { name: /submit/i });
        
        userEvent.type(emailInput, 'bar@bar.com');
        userEvent.type(passwordInput, '12345');
        userEvent.click(submitButton);

        expect(signInCallback).toHaveBeenCalled();
    });

    it('should call the loginService signUp callback', () => {        
        const signUpCallback = jest.spyOn(loginService, 'signUp');
        
        const signUpTab = screen.getByRole('tab', { name: /sign up/i });    
        userEvent.click(signUpTab);

        const emailInput = screen.getByRole('textbox', { name: /email/i });
        const passwordInput = screen.getByLabelText('Password');
        const confirmPasswordInput = screen.getByLabelText('Confirm password');
        const submitButton = screen.getByRole('button', { name: /submit/i });

        userEvent.type(emailInput, 'bar@bar.com');
        userEvent.type(passwordInput, '12345');
        userEvent.type(confirmPasswordInput, '12345');
        userEvent.click(submitButton);

        expect(signUpCallback).toHaveBeenCalled();
    });

    it('should send a sign in request to the back-end', (done) => {        
        moxios.stubRequest(signInEndpoint, { 
            status: 200, 
            responseText: 'user signed in successfully'
        });
        
        const emailInput = screen.getByRole('textbox', { name: /email/i });
        const passwordInput = screen.getByLabelText(/password/i);
        const submitButton = screen.getByRole('button', { name: /submit/i });
        
        userEvent.type(emailInput, 'bar@bar.com');
        userEvent.type(passwordInput, '12345');
        userEvent.click(submitButton);

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            expect(request.url).toBe(signInEndpoint);
            expect(request.config.method).toBe('get');
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

        const emailInput = screen.getByRole('textbox', { name: /email/i });
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


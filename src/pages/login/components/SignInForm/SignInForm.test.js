import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignInForm from './SignInForm';

describe('SignInForm', () => {
    let componentUnderTest;
    const mockSubmitCallback = jest.fn();

    beforeEach(() => componentUnderTest = render(<SignInForm onSubmit={mockSubmitCallback} />) );
    afterEach(() => componentUnderTest.unmount() );

    it('should have a sign in form', () => {
        const form = screen.getByTestId('sign-in--form');
        expect(form).toBeInTheDocument();
    });

    it('should have a email input', () => {
        const input = screen.getByRole('textbox', { name: /email/i })
        expect(input).toBeInTheDocument();
    });

    it('should have a password input', () => {
        const input = screen.getByLabelText(/password/i);
        expect(input).toBeInTheDocument();
    });

    it('should not call the submit callback if the email input is empty', () => {
        const submitButton = screen.getByRole('button', { name: /submit/i });
        
        userEvent.type(screen.getByLabelText(/password/i), '12345');
        userEvent.click(submitButton);
        
        expect(mockSubmitCallback).not.toHaveBeenCalled();
    });

    it('should not call the submit callback if the password input is empty', () => {
        const submitButton = screen.getByRole('button', { name: /submit/i });
        
        userEvent.type(screen.getByRole('textbox', { name: /email/i }), 'bar@bar.com');
        userEvent.click(submitButton);
        
        expect(mockSubmitCallback).not.toHaveBeenCalled();
    });

    it('should call a submit callback when the form is submitted', () => {
        const submitButton = screen.getByRole('button', { name: /submit/i });
        
        userEvent.type(screen.getByRole('textbox', { name: /email/i }), 'bar@bar.com');
        userEvent.type(screen.getByLabelText(/password/i), '12345');
        userEvent.click(submitButton);
        
        expect(mockSubmitCallback).toHaveBeenCalled();
    });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUpForm from './SignUpForm';

describe('SignUpForm', () => {
    let componentUnderTest;
    const mockSubmitCallback = jest.fn();

    beforeEach(() => componentUnderTest = render(<SignUpForm onSubmit={mockSubmitCallback} />) );
    afterEach(() => componentUnderTest.unmount() );

    it('should have a sign in form', () => {
        const form = screen.getByTestId('sign-up--form');
        expect(form).toBeInTheDocument();
    });

    it('should have a email input', () => {
        const input = screen.getByRole('textbox', { name: /email/i });
        expect(input).toBeInTheDocument();
    });

    it('should have a password input', () => {
        const input = screen.getByLabelText('Password');
        expect(input).toBeInTheDocument();
    });

    it('should have a confirm password input', () => {
        const input = screen.getByLabelText('Confirm password');
        expect(input).toBeInTheDocument();
    });

    it('should not call the submit callback if the email input is empty', () => {
        const submitButton = screen.getByRole('button', { name: /submit/i });
        
        userEvent.type(screen.getByLabelText('Password'), '12345');
        userEvent.type(screen.getByLabelText('Confirm password'), '12345');
        userEvent.click(submitButton);
        
        expect(mockSubmitCallback).not.toHaveBeenCalled();
    });

    it('should not call the submit callback if the password input is empty', () => {
        const submitButton = screen.getByRole('button', { name: /submit/i });
        
        userEvent.type(screen.getByRole('textbox', { name: /email/i }), 'bar@bar.com');
        userEvent.type(screen.getByLabelText('Confirm password'), '12345');
        userEvent.click(submitButton);
        
        expect(mockSubmitCallback).not.toHaveBeenCalled();
    });

    it('should not call the submit callback if the confirm password input is empty', () => {
        const submitButton = screen.getByRole('button', { name: /submit/i });
        
        userEvent.type(screen.getByRole('textbox', { name: /email/i }), 'bar@bar.com');
        userEvent.type(screen.getByLabelText('Password'), '12345');
        userEvent.click(submitButton);
        
        expect(mockSubmitCallback).not.toHaveBeenCalled();
    });

    it('should call a submit callback when the form is submitted', () => {
        const submitButton = screen.getByRole('button', { name: /submit/i });
        
        userEvent.type(screen.getByRole('textbox', { name: /email/i }), 'bar@bar.com');
        userEvent.type(screen.getByLabelText('Password'), '12345');
        userEvent.type(screen.getByLabelText('Confirm password'), '12345');
        userEvent.click(submitButton);
        
        expect(mockSubmitCallback).toHaveBeenCalled();
    });
});
import React from 'react';
import './SignUpForm.css';

export default function SignUpForm(props) {  
    function handleSubmit(event) {
        event.preventDefault();
        
        const isValid = (
            event.target.elements.email.value && 
            event.target.elements.password.value &&
            event.target.elements.confirmPassword.value
        );

        if (!isValid) { return; }
        props.onSubmit();
    }

    return (
        <div 
            id="sign_up--panel" 
            className="form--container" 
            aria-label="Sign up form"
        >
            <form data-testid="sign-up--form" onSubmit={(event) => handleSubmit(event)}>
                <label className="form--label" htmlFor="email">E-mail</label>
                <input className="form--input" type="text" name="email" id="email" placeholder="foo@bar.com" />
                <label className="form--label" htmlFor="password">Password</label>
                <input className="form--input" type="password" name="password" id="password" />
                <label className="form--label" htmlFor="confirmPassword">Confirm password</label>
                <input className="form--input" type="password" name="confirmPassword" id="confirmPassword" />
                <button 
                    className="form--button"
                    type="submit"
                    aria-label="submit"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
}

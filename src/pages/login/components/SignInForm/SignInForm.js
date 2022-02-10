import React from 'react';
import './SignInForm.css';

export default function SignInForm(props) { 
    function handleSubmit(event) {
        event.preventDefault();
        const isValid = (event.target.elements.email.value && event.target.elements.password.value);
        if (!isValid) { return; }
        props.onSubmit();
    }

    return (
        <div 
            id="sign_in--panel" 
            className="form--container" 
            aria-label="Sign in form"
        >
            <form data-testid="sign-in--form" onSubmit={(event) => handleSubmit(event)}>
                <label className="form--label" htmlFor="email">E-mail</label>
                <input className="form--input" type="text" name="email" id="email" placeholder="foo@bar.com" />
                <label className="form--label" htmlFor="password">Password</label>
                <input className="form--input" type="password" name="password" id="password" />
                <button 
                    className="form--button" 
                    type="submit" 
                    aria-label="submit"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
}

import React from 'react';
import PropTypes from 'prop-types';
import './SignInForm.css';

export default function SignInForm(props) { 
    async function handleSubmit(event) {
        event.preventDefault();
        const isValid = (event.target.elements.email.value && event.target.elements.password.value);
        if (!isValid) { return; }
        await props.onSubmit();
    }

    return (
        <div 
            id="sign_in--panel" 
            className="form--container" 
            aria-label="Sign-in form"
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

SignInForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

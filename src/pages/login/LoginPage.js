import React from 'react';
import './LoginPage.css';
import Tab from './components/Tab/Tab';
import SignInForm from './components/SignInForm/SignInForm';
import SignUpForm from './components/SignUpForm/SignUpForm';
import * as loginService from '../../services/loginService';

export default function LoginPage() {
    async function handleSignIn(event) {
        await loginService.signIn();
    }
    
    async function handleSignUp(event) {
        await loginService.signUp();
    }

    return (
        <div>
            <section className="login--container">
                <Tab 
                    tabs={[
                        { 
                            name: 'Sign In', 
                            content: <SignInForm onSubmit={handleSignIn} />, 
                            active: true 
                        },
                        { 
                            name: 'Sign Up', 
                            content: <SignUpForm onSubmit={handleSignUp} />
                        }
                    ]}
                />
            </section>
        </div>
    );
}

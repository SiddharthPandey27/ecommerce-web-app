import React from 'react';

import SignInComponent from '../../components/signInComponent/signInComponent';

import './styles.scss';

const SignIn = () => {
    return (
        <div className="sign-in-container">
            <h2>Hey! Family Member. Sign In to your account!!</h2>
            <p>Sign In with your email and password or with Google Account.</p>
            <SignInComponent />
        </div>
    );
}

export default SignIn;
import React from 'react';

import SignInComponent from '../../components/signInComponent/signInComponent';

const SignIn = () => {
    return (
        <div className="sign-in-container">
            <h2>Hey! Family Member. SignIn to your account here!!</h2>
            <p>Signup to join Ecommerce family.</p>
            <SignInComponent />
        </div>
    );
}

export default SignIn;
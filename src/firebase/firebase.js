import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDAwolTzvPUJiRpuoRY5ZUCeBJhCJNpuWU",
    authDomain: "react-ecomm-project.firebaseapp.com",
    databaseURL: "https://react-ecomm-project.firebaseio.com",
    projectId: "react-ecomm-project",
    storageBucket: "react-ecomm-project.appspot.com",
    messagingSenderId: "358378162846",
    appId: "1:358378162846:web:6f11aeabfb4ca8ffadc98f",
    measurementId: "G-C8F4BDX29N"
};

firebase.initializeApp(config);

export const createUserProfileDoc = async (userAuth, additionalData) => {
    if (!userAuth) return;

    console.log("userAuth", userAuth);

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    console.log("user ref", userRef);
    console.log("user snap shot", snapShot);

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log("Error creating user", error.message);
        }
    }

    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
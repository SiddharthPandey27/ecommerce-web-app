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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
// script.js

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyAvfxL-EiAo6i6iOuGE2qsw7vqLarK1OpU",
    authDomain: "frozen-code-studios-website.firebaseapp.com",
    projectId: "frozen-code-studios-website",
    storageBucket: "frozen-code-studios-website.appspot.com",
    messagingSenderId: "940079797917",
    appId: "1:940079797917:web:54aba40e93d2af4bdde674",
    measurementId: "G-G4993S3SZ1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function openSignInModal() {
    const signInContent = document.getElementById('signInContent');
    signInContent.style.display = 'block';
}

function closeSignInModal() {
    const signInContent = document.getElementById('signInContent');
    signInContent.style.display = 'none';
}

function signInUser() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const email = emailInput.value;
    const password = passwordInput.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Signed in as: ' + user.email);
            closeSignInModal();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Sign-in error:', errorCode, errorMessage);
        });
}

function createAccount() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const email = emailInput.value;
    const password = passwordInput.value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Account created and signed in: ' + user.email);
            closeSignInModal();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Account creation error:', errorCode, errorMessage);
        });
}

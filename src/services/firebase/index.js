import { auth } from './config';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

function createUser(email, password) {
    console.log(auth)
    createUserWithEmailAndPassword(auth, email, password)
    .then(credentials => console.log('user credentials', credentials))
    .catch((e) => console.log(e))
}

function signIn(email, password) {
    signInWithEmailAndPassword(auth, email, password)
    .then(credentials => console.log('signin credentials', credentials))
    .catch(e => console.log(e));
}

export {
    createUser, signIn
};
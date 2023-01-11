import { auth, db } from './config';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword , onAuthStateChanged, signOut} from 'firebase/auth'
import {  doc, setDoc, getDoc } from 'firebase/firestore'

function createUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}

function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}

function isUserLoggedIn() {
    onAuthStateChanged(auth, user => {
     if (user) {
         document.cookie = "isUserLoggedIn = true; path=/";
     } else {
         document.cookie = "isUserLoggedIn = false; path=/";
     }
    })
 }

function logout() {
    signOut(auth)
    .then(() => {
        console.log('logged out successfully');
        document.cookie = "isUserLoggedIn = false; path=/";
        window.location.reload();
    })
}

function addUserToDB(userData) {
    return setDoc(doc(db, userData.id, 'userInfo'), {...userData})
}

function getUserFromDB(id) {
    return getDoc(doc(db, id, 'userInfo'))
}

function addUserMarksToDB(userData) {
    return setDoc(doc(db, userData, 'marks'), {...userData})
}


export {
    createUser, signIn, addUserToDB, getUserFromDB, addUserMarksToDB, isUserLoggedIn, logout
};
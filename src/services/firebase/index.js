import { auth, db } from './config';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword , onAuthStateChanged, signOut} from 'firebase/auth'
import {  doc, setDoc, getDoc } from 'firebase/firestore'

function createUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}

function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}

function isUserLoggedIn(id) {
    onAuthStateChanged(auth, user => {
     if (user) {
         document.cookie = `isUserLoggedIn = true|${id}; path=/`;
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

function addUserScoresToDB(userData) {
    return setDoc(doc(db, userData.id, 'score'), {...userData})
}

function getUserScoresFromDb(id) {
    return setDoc(doc(db, id, 'score'));
}


export {
    createUser,
    signIn,
    isUserLoggedIn,
    logout,
    addUserToDB,
    getUserFromDB,
    addUserScoresToDB,
    getUserScoresFromDb
};
import { auth, db } from './config';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {  doc, setDoc, getDoc } from 'firebase/firestore'

function createUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}

function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}

function addUserToDB(userData) {
    return setDoc(doc(db, 'users', userData.id), {...userData})
}

function getUserFromDB(id) {
    return getDoc(doc(db, 'users', id))
}

export {
    createUser, signIn, addUserToDB, getUserFromDB
};
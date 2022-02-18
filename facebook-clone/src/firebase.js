import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({

    apiKey: "AIzaSyDCTEgqfEwcjvQUcL8b2ajUAOyhi9w-gNQ",
    authDomain: "facebook-clone-3f5bd.firebaseapp.com",
    projectId: "facebook-clone-3f5bd",
    storageBucket: "facebook-clone-3f5bd.appspot.com",
    messagingSenderId: "279660736850",
    appId: "1:279660736850:web:02a90f4f1d595c2b690a8b",
    measurementId: "G-LP6PGCTNKG"

});

const auth = firebase.auth();
const db = firebaseConfig.firestore();
const storage = firebase.storage();

export { auth, db, storage };

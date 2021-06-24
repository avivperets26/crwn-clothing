import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";

const config = {
  apiKey: "AIzaSyBQ2xE4r91ROyOkv9dwlgH_kgMDYBPRudo",
  authDomain: "crwn-db-bd38e.firebaseapp.com",
  projectId: "crwn-db-bd38e",
  storageBucket: "crwn-db-bd38e.appspot.com",
  messagingSenderId: "1088036642414",
  appId: "1:1088036642414:web:58f18618b898f33188d07f",
  measurementId: "G-GFRRZYSG40",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

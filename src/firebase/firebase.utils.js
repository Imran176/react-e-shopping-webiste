import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GoogleAuthProvider } from "firebase/auth";

//connection to firebase
const config = {
    apiKey: "AIzaSyAcDvdBl_K8n6CLPX3-v_ajhNmCBJsU33w",
    authDomain: "e-clothing-site-db.firebaseapp.com",
    projectId: "e-clothing-site-db",
    storageBucket: "e-clothing-site-db.appspot.com",
    messagingSenderId: "681379638132",
    appId: "1:681379638132:web:5635f4dcb23e14163c9a21",
    measurementId: "G-95FSGTM5ZW"
};


//create new user in database
export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({ displayName, email, createdAt, ...additionalData })
        } catch (error) {
            console.log("Error creating user", error);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider)
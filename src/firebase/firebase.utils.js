import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyC1Jd-eEhiIGZLF9opGDR5waHrFPWDbH-A",
    authDomain: "orbital-81240.firebaseapp.com",
    projectId: "orbital-81240",
    storageBucket: "orbital-81240.appspot.com",
    messagingSenderId: "69784700493",
    appId: "1:69784700493:web:9565ef67d670615eb63e04",
    measurementId: "G-5W4E5TSQMV"
  };

//gets the user object from auth and puts it in the database
export const createUserProfileDocument =async (userAuth)=>{
if (!userAuth) return;
const userRef=firestore.doc(`users/${userAuth.uid}`);
//we need a snapshot as firebase will alwyas return a snapshot even if object does not exist
const snapShot=await userRef.get()
if (!snapShot.exists){
    const {displayName, email}=userAuth;
    const createdAt=new Date()
    try{
        await userRef.set({
            displayName,
            email,
            createdAt
        })
    }catch(error){
        console.log(error.message, 'error creating user')
    }
}
return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); //always trigger google popup for authentication
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;

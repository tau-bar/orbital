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

export const createUserProfileDocument = async (user)=>{
if (!user) return;
const userRef = firestore.doc(`users/${user.uid}`);
// Firebase will always return a snapshot even if object does not exist.
const snapShot = await userRef.get()
if (!snapShot.exists){
    const { email } = user;
    const createdAt=new Date()
    try {
        await userRef.set({
            email,
            createdAt
        })
    } catch (error) {
        console.error(error.message, 'Error creating user document.')
    }
}
return getUserDocument(user.uid);
}

const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
/* Always triggers google popup for authentication. */
provider.setCustomParameters({ prompt: "select_account" }); 
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;

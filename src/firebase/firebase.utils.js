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
    const createdAt = new Date()
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

export const logOut = async () => {
  auth.signOut()
  .then(() => {
    alert('Signed out!')
  })
  .catch(error => {
    console.log(error.message)
  })
}

export const resetPassword = async (email) => {
  auth.sendPasswordResetEmail(email)
  .then(() => {
    alert("Email sent!")
  })
  .catch((error) => {
    console.error(error.message)
    alert("Something went wrong.")
  });
}

export const changePassword = async (newPassword) => {
  auth.currentUser.updatePassword(newPassword).then(() => {
    alert("Password successfully changed!")
  }).catch(error => {
    alert(error.message)
  }
  );
}

export const deleteUser = async (user) => {
  const authUser = await auth.currentUser;
  authUser.delete().then(async () => {
    alert('User deleted.')
    const userDocument = await firestore.doc(`users/${user.uid}`);
    userDocument.delete();
  }).catch((error) => {
    alert(error.message)
    // ...
  });
}


export const createNewVirus = async (user, data) =>  {
  if (user === undefined) return;
  try {
    await firestore.collection('users').doc(user.uid).collection('userViruses').add(data); 
  } catch (error) {
    console.error(error.message);
  }
}

export const getUserViruses = async user => {
  if (!user) return;
  try {
    const virusRef = firestore.doc(`users/${user.uid}`).collection('userViruses');
    const snapshot = await virusRef.get();
    const viruses = await snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    return viruses;
  } catch (error) {
    console.error("Error fetching viruses", error);
  }
};

export const getVirus = async (user, virusId) => {
  if (!virusId || !user) return;
  try {
    const virusRef = firestore.doc(`users/${user.uid}`).collection('userViruses').doc(virusId);
    return await virusRef
    .get()
    .then(doc => doc.data());
  } catch (error) {
    console.error(error.message);
  }
}

export const updateVirus = async (user, values) => {
  console.log(values.id)
  if (!user || !values.id) return;
  try {
    const virusRef = await firestore.doc(`users/${user.uid}`).collection('userViruses').doc(values.id);
    virusRef.set(values);
  } catch (error) {
    console.error(error.message);
  }
}

export const deleteVirus = async (user, virusId) => {
  if (!virusId || !user) return;
  try {
    const virusRef = await firestore.doc(`users/${user.uid}`).collection('userViruses').doc(virusId);
    virusRef
    .delete()
    .then(() => alert('Virus has been deleted.'))
  } catch (error) {
    console.error(error.message);
  }
}

export default firebase;

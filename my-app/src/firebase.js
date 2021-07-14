import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCyMQmxFP-enejaYZsy1XSCZmX6Wd0lpgw",
    authDomain: "twitter-clone-63b95.firebaseapp.com",
    projectId: "twitter-clone-63b95",
    storageBucket: "twitter-clone-63b95.appspot.com",
    messagingSenderId: "213417207785",
    appId: "1:213417207785:web:6e757b24441e16c9a48d78",
    measurementId: "G-V5GEV2KYQ9"
  };

    const firebaseApp = firebase.initializeApp(firebaseConfig);

    const db = firebaseApp.firestore();

    export default db;
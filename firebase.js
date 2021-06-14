import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpex7zUwbaoCl4hwWyQR6hEoPGJkt-ROc",
    authDomain: "mingle-be73d.firebaseapp.com",
    projectId: "mingle-be73d",
    storageBucket: "mingle-be73d.appspot.com",
    messagingSenderId: "356630603381",
    appId: "1:356630603381:web:c87b004d598310cff6ba3c",
    measurementId: "G-RFYSZVTN8N"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;
import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA_ozTxggv3YnIClOp279fJ2OFfy4Xlz_8",
    authDomain: "yourfourthings.firebaseapp.com",
    databaseURL: "https://yourfourthings-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "yourfourthings",
    storageBucket: "yourfourthings.appspot.com",
    messagingSenderId: "706747991094",
    appId: "1:706747991094:web:982194ae14fa727eca8497",
    measurementId: "G-JDJWTGNNZK"
  };

  firebase.initializeApp(firebaseConfig);
  
  export default firebase;


import firebase from "firebase";
require("@firebase/firestore");


const firebaseConfig = {
    apiKey: "AIzaSyAsRjhfxGWpn31HQsXX09-Ma3_i56rzeC4",
    authDomain: "e-bike-88ee1.firebaseapp.com",
    projectId: "e-bike-88ee1",
    storageBucket: "e-bike-88ee1.appspot.com",
    messagingSenderId: "175748537240",
    appId: "1:175748537240:web:30ec97bf7c35fd5019a9ed"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

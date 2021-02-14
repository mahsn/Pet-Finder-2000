 import firebase from 'firebase'
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDYkBX5adntRFv8nFjmb8uYEJfQpGlOXT8",
    authDomain: "petfinder-200.firebaseapp.com",
    projectId: "petfinder-200",
    storageBucket: "petfinder-200.appspot.com",
    messagingSenderId: "468979526570",
    appId: "1:468979526570:web:426dcb15fd801eb96259d3"
  };
  // Initialize Firebase
  const Firebase = firebase.initializeApp(firebaseConfig);

  export default Firebase;
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDrFowwLA9Jhnm3Jq0cEWfWgwVxpvkenj4",
    authDomain: "pokeapi-react.firebaseapp.com",
    databaseURL: "https://pokeapi-react.firebaseio.com",
    projectId: "pokeapi-react",
    storageBucket: "pokeapi-react.appspot.com",
    messagingSenderId: "318926115608",
    appId: "1:318926115608:web:d8f428b749af826b5ec46d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase;
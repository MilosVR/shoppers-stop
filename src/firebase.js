import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAUWsVnXi6ExkA4HO-h1xeL6HLsc5pr8_g",
    authDomain: "shoppersstop-dced9.firebaseapp.com",
    databaseURL: "https://shoppersstop-dced9.firebaseio.com",
    projectId: "shoppersstop-dced9",
    storageBucket: "",
    messagingSenderId: "620360193676"
  };

  export const firebaseApp = firebase.initializeApp(config);
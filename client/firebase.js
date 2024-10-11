import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
     // apiKey: "AIzaSyB-P07RlVm3TxelNGItdo63XY60P9ib3-A",
     // authDomain: "mobztask6.firebaseapp.com",
  
     // projectId: "mobztask6",
     // storageBucket: "mobztask6.appspot.com",
     // messagingSenderId: "278366660333",
     // appId: "1:278366660333:web:fc580a51e444474d3e0ee4",
     apiKey: "AIzaSyDl4T6KxxXMZrQvj_cJ6uSe33rzlBtRj-w",
     authDomain: "todo-aba57.firebaseapp.com",
     databaseURL: "https://todo-aba57-default-rtdb.asia-southeast1.firebasedatabase.app/",
     projectId: "todo-aba57",
     storageBucket: "todo-aba57.appspot.com",
     messagingSenderId: "131866438607",
     appId: "1:131866438607:web:4fb02e8713a3fb0b1e00ba",
     measurementId: "G-47QQYSC0KK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, app }
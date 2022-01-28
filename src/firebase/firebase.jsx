import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAgYvM0kRKU86WL3RIKyqvWFjQ3RFacgX4",
    authDomain: "coderhouse-react-horny.firebaseapp.com",
    projectId: "coderhouse-react-horny",
    storageBucket: "coderhouse-react-horny.appspot.com",
    messagingSenderId: "943812304256",
    appId: "1:943812304256:web:b0eb9ef17cee7dc7c13565"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
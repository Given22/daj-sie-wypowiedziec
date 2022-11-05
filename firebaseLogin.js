// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB92t5nXMg8Az8GkFRsXNYtG_MuF7nxf-E",
	authDomain: "fir-86fa7.firebaseapp.com",
	projectId: "fir-86fa7",
	storageBucket: "fir-86fa7.appspot.com",
	messagingSenderId: "641122111881",
	appId: "1:641122111881:web:ed42c9e6ac131200ea9158",
	measurementId: "G-3KDPNZXTNF",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app);

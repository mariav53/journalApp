import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: 'journalapp-mern.firebaseapp.com',
	databaseURL: 'https://journalapp-mern.firebaseio.com',
	projectId: 'journalapp-mern',
	storageBucket: 'journalapp-mern.appspot.com',
	messagingSenderId: '718202292521',
	appId: '1:718202292521:web:3eef45101d67bb414bcf38',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//referencia de la bbdd

const db = firebase.firestore();

//auth providers
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, firebase, googleAuthProvider };

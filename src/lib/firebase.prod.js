import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// we need to somehow seed the database

// we need a config here
const config = {
    apiKey: "AIzaSyC3ths-6XaK6yFnpx-VPDCJ9E1727qMkug",
    authDomain: "netflix-3b27e.firebaseapp.com",
    projectId: "netflix-3b27e",
    storageBucket: "netflix-3b27e.appspot.com",
    messagingSenderId: "401612213161",
    appId: "1:401612213161:web:d98942513a94c9fc37d2b8",
};

const firebase = Firebase.initializeApp(config);

export { firebase };


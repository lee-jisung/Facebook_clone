import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD3LDQWSBnQrLMOCWZoQS_gN_E3iCIRvk0',
  authDomain: 'facebook-clone-1e729.firebaseapp.com',
  databaseURL: 'https://facebook-clone-1e729.firebaseio.com',
  projectId: 'facebook-clone-1e729',
  storageBucket: 'facebook-clone-1e729.appspot.com',
  messagingSenderId: '29102668915',
  appId: '1:29102668915:web:79f4797158536711507e06',
  measurementId: 'G-HMNZ5214ZE',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); // to use google login

export { auth, provider };
export default db;

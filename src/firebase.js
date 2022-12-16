// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBC0NlmW7ISJUwQNO1L9J4Q60a3JlNwW4I',
  authDomain: 'workout-diary-807db.firebaseapp.com',
  projectId: 'workout-diary-807db',
  storageBucket: 'workout-diary-807db.appspot.com',
  messagingSenderId: '835285428288',
  appId: '1:835285428288:web:1f65bb88e39eed837557a5',
};

// Initialize Firebase
// index.js 에서 사용을 위함.
export default firebase.initializeApp(firebaseConfig);

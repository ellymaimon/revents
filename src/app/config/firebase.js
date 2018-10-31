import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuHfWEMagVxUatn_5UkwwW2GqFhnAQNuo",
  authDomain: "revents-673fd.firebaseapp.com",
  databaseURL: "https://revents-673fd.firebaseio.com",
  projectId: "revents-673fd",
  storageBucket: "revents-673fd.appspot.com",
  messagingSenderId: "100842168835"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings);

export default firebase;

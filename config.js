import firebase from "firebase";
require("@firebase/firestore");

//Pega tu configuración de firebase aquí
const firebaseConfig = {
  apiKey: "AIzaSyAmeTPTuLjiZSDAdmtzSqjfj2qCKFrpSZw",
  authDomain: "paseo-electronico.firebaseapp.com",
  projectId: "paseo-electronico",
  storageBucket: "paseo-electronico.appspot.com",
  messagingSenderId: "534227197494",
  appId: "1:534227197494:web:7bd98f0756f6218627c297"
};





firebase.initializeApp(firebaseConfig);

export default firebase.firestore();



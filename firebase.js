// const firebase = require('firebase')
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs,where,query } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvafM5UsbQYxe_iVY4cQPrLmpTsFNc7x4",
  authDomain: "my-mini-porject.firebaseapp.com",
  projectId: "my-mini-porject",
  storageBucket: "my-mini-porject.appspot.com",
  messagingSenderId: "45496877619",
  appId: "1:45496877619:web:de1c98884c55c1b0ee9946",
  measurementId: "G-4FMQ3X9LPN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



try {
//   const snapshot = await getDocs(collection(db, "users")).where('age', '=>', 18).get();
// if(snapshot.empty){
//   console.log("no matching document");
// }
  const querySnapshot = await getDocs(query(collection(db, "users"),where("age", ">=", 20))); 
querySnapshot.forEach((doc) => {
  console.log(doc.data());
});
} catch (error) {
  console.error(error)
}


// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     name: "khurtsaa",
//     phoneNumber: 60112233,
//   });

//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }
import { db } from './config';
import { collection, addDoc, doc, onSnapshot } from "firebase/firestore";

export const addData = async (collectionName, data) => {
    try {
        const docRef = await addDoc(collection(db, collectionName), data);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}


export const getData = (collectionName, setData) => {
    const unsubscribe = onSnapshot(collection(db, collectionName), (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setData(data);
    });
  
    return unsubscribe;
  };


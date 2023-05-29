import { db } from './config';
import { collection, addDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";

export const addData = async (collectionName, data) => {
    try {
        const docRef = await addDoc(collection(db, collectionName), data);
        console.log("Document written with ID: ", docRef.id);

        return docRef.id;
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

  
export const getStatus = (collectionName, id, setData) => {
    const unsubscribe = onSnapshot(doc(db, collectionName, id), (doc) => {
        setData(doc.data().statusOrder);
    });
};

export const updateData = async (collectionName, id, data) => {
    try {
        const docRef = await updateDoc(doc(db, collectionName, id), data);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}


import React from 'react'
import { products } from '../asyncMock'
import { db } from '../services/firebaseConfig'
import { collection, addDoc } from "firebase/firestore"




const handleUpload = async () => {
  try {
    let productsUploaded = 0;
    for (const item of products) {
      const { id, ...data } = item;
      await addDoc(collection(db, 'products'), data);
      productsUploaded++;
    }
    alert(`${productsUploaded} productos subidos exitosamente`);
  } catch (error) {
    console.error("Error al subir productos:", error);
  }
}

const Admin = () => {
  return (
    <button onClick={()=>handleUpload()}>subir productos</button>
  )
}

export default Admin
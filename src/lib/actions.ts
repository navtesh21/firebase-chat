"use server";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "./firebase";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
} from "firebase/firestore";
import { use } from "react";

export const createUser = async (data: FormData) => {
  const { email, password, username } = Object.fromEntries(data);
  const app = initializeApp(firebaseConfig);

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email.toString(), password.toString())
    .then(async (userCredential) => {
      // Signed up
      const user = userCredential.user;
      const db = getFirestore(app);
      const docRef = await addDoc(collection(db, "users"), {
        username,
        email,
        id: user.uid,
        blocked: [],
      });
      console.log("Document written with ID: ", docRef.id);
      const userDocRef = doc(db, "users", docRef.id);

      // Reference to the subcollection under the document
      const ordersCollectionRef = collection(userDocRef, "chats");
      const doRef = await addDoc(ordersCollectionRef, {
        chats: [],
      });
      console.log("Order added with ID: ", doRef.id);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

  // Create a new document
};

export const getSearchedUsers = async (data: string) => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const q = query(collection(db, "users"), where("username", "==", data));
  const querySnapshot = await getDocs(q);
  const tempdoc: any = [];

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    tempdoc.push(doc.data());
    console.log(doc.id, " => ", doc.data());
  });

  return tempdoc;
};

export async function addUserToChat() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user, "hi");
}

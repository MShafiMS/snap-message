import firebase from "@NextAlias/firebase/firebase";
import {
    collection,
    doc,
    getDoc,
    query,
    serverTimestamp,
    setDoc,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

export const useUsers = () => {
  const usersRef = collection(firebase.db, "users");
  const queryRef = query(usersRef);

  const [users, loading, error] = useCollectionData(queryRef);

  return { users, loading, error };
};

export const addUser = async (userId, userData) => {
  try {
    const userRef = doc(collection(firebase.db, "users"), userId);
    const userDoc = await getDoc(userRef);
    if (!userDoc.exists()) {
      const user = { ...userData, createdAt: serverTimestamp() };
      await setDoc(userRef, user);
      console.log("User data added successfully!");
    }
  } catch (error) {
    console.error("Error adding user data:", error);
    throw error;
  }
};

export const addFriend = async (userId, friendId) => {
  try {
    const userRef = doc(collection(firebase.db, "users"), userId);
    const friendRef = doc(collection(firebase.db, "users"), friendId);

    await setDoc(doc(userRef, "friends", friendId), { friendId });

    await setDoc(doc(friendRef, "friends", userId), { friendId: userId });

    console.log("Friend added successfully!");
  } catch (error) {
    console.error("Error adding friend:", error);
    throw error;
  }
};

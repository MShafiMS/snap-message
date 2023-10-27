import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { v4 as uuidv4 } from "uuid";
import { firebase } from "./firebase";

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

export const getUserById = async (userId) => {
  try {
    const userRef = doc(collection(firebase.db, "users"), userId);
    const userSnapshot = await getDoc(userRef);

    if (userSnapshot.exists()) {
      const userData = {
        ...userSnapshot.data(),
        createdAt: userSnapshot.data().createdAt.toMillis(),
      };
      return userData;
    } else {
      console.log("User not found");
      return null;
    }
  } catch (error) {
    console.error("Error retrieving user:", error);
    throw error;
  }
};

export const getAllFriends = async (userId) => {
  if (userId) {
    try {
      const friendsCollectionRef = collection(
        firebase.db,
        "users",
        userId,
        "friends"
      );
      const usersRef = collection(firebase.db, "users");
      const q = query(usersRef, where("userId", "!=", userId));
      const usersSnapshot = await getDocs(q);

      const friendsSnapshot = await getDocs(friendsCollectionRef);

      const friendIds = friendsSnapshot.docs.map((doc) => doc.id);
      const friendUsers = [];

      for (const friendId of friendIds) {
        const friendData = await getUserById(friendId);
        if (friendData) {
          friendUsers.push(friendData);
        }
      }
      const nonFriendUsers = [];
      for (const userDoc of usersSnapshot.docs) {
        const userId = userDoc.id;

        if (!friendIds.includes(userId)) {
          const userRef = doc(usersRef, userId);
          const userSnapshot = await getDoc(userRef);

          if (userSnapshot.exists()) {
            const userData = userSnapshot.data();
            nonFriendUsers.push(userData);
          }
        }
      }
      return { friendUsers, nonFriendUsers };
    } catch (error) {
      console.error("Error getting friend details:", error);
      throw error;
    }
  }
};

const generateUuid = () => {
  const UUID = uuidv4();
  return UUID;
};

export const getConversationIdByParticipants = async (participants) => {
  if (participants) {
    try {
      const conversationsRef = collection(firebase.db, "conversations");
      const q = query(
        conversationsRef,
        where("participants", "==", participants.sort())
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        return null;
      }

      const conversationId = querySnapshot.docs[0].id;
      return conversationId;
    } catch (error) {
      console.error("Error getting conversation ID:", error);
      throw error;
    }
  }
};

export const sendMessage = async (sender, recipient, content) => {
  try {
    const messageId = uuidv4();

    const participants = [sender, recipient].sort();
    const conversationId = await getConversationIdByParticipants(participants);

    const messageData = {
      messageId,
      sender,
      recipient,
      content,
      timestamp: serverTimestamp(),
    };

    if (conversationId) {
      await addDoc(
        collection(firebase.db, "conversations", conversationId, "messages"),
        messageData
      );

      await updateDoc(
        doc(collection(firebase.db, "conversations"), conversationId),
        {
          updatedAt: serverTimestamp(),
        }
      );
    } else {
      const newConversationId = generateUuid();

      const conversationData = {
        participants,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };
      await setDoc(
        doc(collection(firebase.db, "conversations"), newConversationId),
        conversationData
      );

      await addDoc(
        collection(firebase.db, "conversations", newConversationId, "messages"),
        messageData
      );
    }

    console.log("Message sent successfully!");
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};

export const getChatmateList = async () => {
  const currentUserId = firebase?.auth?.currentUser?.uid;
  if (currentUserId) {
    try {
      const conversationsQuery = query(
        collection(firebase.db, "conversations"),
        where("participants", "array-contains", currentUserId)
      );

      const querySnapshot = await getDocs(conversationsQuery);

      const chatmateList = [];

      for (const doc of querySnapshot.docs) {
        const conversationData = doc.data();
        const { participants, updatedAt } = conversationData;

        const chatmateId = participants
          .sort()
          .find((participant) => participant !== currentUserId);

        const chatmateDetails = await getUserById(chatmateId);

        const timestampMillis = updatedAt ? updatedAt.toMillis() : null;

        const chatmate = {
          id: chatmateId,
          updatedAt: timestampMillis,
          ...chatmateDetails,
        };

        chatmateList.push(chatmate);
      }

      chatmateList.sort((a, b) => b.updatedAt - a.updatedAt);

      return chatmateList;
    } catch (error) {
      console.error("Error fetching chatmate list:", error);
      throw error;
    }
  }
};

export const getMessages = async (conversationId, setMessages) => {
  try {
    if (conversationId) {
      const messagesRef = collection(
        firebase.db,
        "conversations",
        conversationId,
        "messages"
      );

      const messagesQuery = query(messagesRef, orderBy("timestamp"));

      const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
        const newMessages = [];
        snapshot.forEach((doc) => {
          const messageData = doc.data();
          const { sender, recipient, content, timestamp } = messageData;

          const timestampMillis = timestamp ? timestamp.toMillis() : null;

          const message = {
            id: doc.id,
            sender,
            recipient,
            content,
            timestamp: timestampMillis,
          };

          newMessages.push(message);
        });
        setMessages(newMessages);
      });
      return () => {
        unsubscribe();
      };
    } else {
      setMessages(null);
    }
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
};

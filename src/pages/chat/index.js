import firebase from "@NextAlias/firebase/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatLayout from "./layout";

const Chat = () => {
  const router = useRouter();
  const [user] = useAuthState(firebase.auth);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);
  return (
    <div>
      <h1>this is chat</h1>
      <button onClick={() => signOut(firebase.auth)}>logout</button>
    </div>
  );
};
Chat.PageLayout = ChatLayout;
export default Chat;

import { firebase } from "@NextAlias/firebase/firebase";
import { signOut } from "firebase/auth";
import ChatLayout from "./layout";

const Chat = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-xl font-bold">
        Select a chat or start a new conversation
      </h1>
      <button
        className="uppercase mt-3 px-3 py-2 bg-red-600 rounded font-bold"
        onClick={() => signOut(firebase.auth)}
      >
        logout
      </button>
    </div>
  );
};
Chat.PageLayout = ChatLayout;
export default Chat;

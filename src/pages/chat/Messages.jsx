import { firebase } from "@NextAlias/firebase/firebase";
import { getMessages } from "@NextAlias/firebase/firestore";
import { renderClickableLinks } from "@NextAlias/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaUserAlt } from "react-icons/fa";

const Message = ({ message, userData }) => {
  const currentUser = firebase.auth.currentUser;
  const time = new Date(message?.timestamp);
  const formattedTime = time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return (
    <div
      key={message?.id}
      className={`w-full flex items-end justify-end gap-1 ${
        message?.sender === currentUser?.uid ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div
        className={`w-fit lg:max-w-[35vw] max-w-[73vw] rounded-xl px-1 ${
          message?.sender === currentUser?.uid
            ? "bg-blue-500 rounded-br-none"
            : "bg-white/10 rounded-bl-none"
        }`}
      >
        <p className="p-2 pb-1 break-all lg:max-w-[35vw] max-w-[73vw]">
        {renderClickableLinks(message?.content.message)}
        </p>
        <p className="text-end text-xs pr-1 text-white/70">{formattedTime}</p>
      </div>
      {message?.sender === currentUser?.uid ? (
        <>
          {currentUser?.photoURL ? (
            <Image
              src={currentUser?.photoURL}
              width={30}
              height={30}
              className="rounded-full"
              alt="profile"
            />
          ) : (
            <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-white/30">
              <FaUserAlt size={15} />
            </div>
          )}
        </>
      ) : (
        <>
          {userData?.profilePic ? (
            <Image
              src={userData?.profilePic}
              width={30}
              height={30}
              className="rounded-full"
              alt="profile"
            />
          ) : (
            <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-white/30">
              <FaUserAlt size={15} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

const Messages = ({ conversationId, userData }) => {
  const messageContainerRef = useRef(null);
  const [messages, setMessages] = useState();

  useEffect(() => {
    if (conversationId) {
      (async () => {
        await getMessages(conversationId, setMessages);
      })();
    }
  }, [conversationId]);
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <div
      ref={messageContainerRef}
      className="absolute top-0 left-0 right-0 bottom-0 overflow-y-auto"
    >
      <div className="flex flex-col gap-3 m-3 min-h-full justify-end">
        {messages?.map((message) => (
          <Message key={message?.id} userData={userData} message={message} />
        ))}
      </div>
    </div>
  );
};

export default Messages;

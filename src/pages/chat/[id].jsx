import { firebase } from "@NextAlias/firebase/firebase";
import {
  getConversationIdByParticipants,
  getMessages,
  sendMessage,
} from "@NextAlias/firebase/firestore";
import { collection, doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiSolidSend } from "react-icons/bi";
import { BsEmojiSmile, BsImages } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";
import { RiArrowRightCircleFill, RiInformationFill } from "react-icons/ri";
import Messages from "./Messages";
import ChatLayout from "./layout";

const ChattingView = ({ userData }) => {
  const currentUser = firebase.auth.currentUser;
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState(null);
  const [info, setInfo] = useState(false);

  const { handleSubmit, register, reset, watch } = useForm();
  const message = watch("message");

  const onSend = async () => {
    const content = { media: false, message: message };
    await sendMessage(currentUser.uid, userData?.userId, content);
    reset();
  };

  useEffect(() => {
    const fetchUserAndMessage = async () => {
      const participants = [currentUser.uid, userData?.userId];
      if (participants) {
        const conversationId = await getConversationIdByParticipants(
          participants
        );
        if (conversationId) {
          await getMessages(conversationId, setMessages);
        }
      }
      setLoading(false);
    };
    return () => {
      fetchUserAndMessage();
    };
  }, [currentUser.uid, userData?.userId]);

  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <ImSpinner9 className="text-7xl animate-spin mx-auto" />
      </div>
    );
  }

  return (
    <div className="flex h-full">
      <div className="w-full flex flex-col h-full">
        <div className="mx-2 px-8 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex gap-3 items-center">
            {userData?.profilePic ? (
              <Image
                src={userData?.profilePic}
                width={60}
                height={60}
                className="rounded-full"
                alt="profile"
              />
            ) : (
              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-white/30">
                <FaUserAlt size={25} />
              </div>
            )}
            <p className="text-xl font-medium">{userData?.name}</p>
          </div>
          <div>
            <button
              onClick={() => setInfo(!info)}
              className="text-2xl text-blue-500 bg-white/70 rounded-full"
            >
              {!info ? <RiInformationFill /> : <RiArrowRightCircleFill />}
            </button>
          </div>
        </div>
        <div className="w-full h-full relative">
          <Messages messages={messages} userData={userData} />
        </div>
        <form
          onSubmit={handleSubmit(onSend)}
          className="m-3 flex items-center gap-2"
        >
          <button type="button">
            <BsImages size={25} />
          </button>
          <div className="relative w-full bg-white/10 shadow rounded">
            <input
              type="text"
              {...register("message")}
              placeholder="Type your message here..."
              required
              className="w-11/12 bg-white/0 outline-none px-3 text-lg py-3"
            />
            <button
              type="button"
              className="absolute top-1/2 -translate-y-1/2 right-3"
            >
              <BsEmojiSmile size={25} />
            </button>
          </div>
          <button
            disabled={!message?.length}
            type="submit"
            className={`${
              message?.length && "bg-green-700 shadow"
            } p-2 rounded`}
          >
            <BiSolidSend size={20} />
          </button>
        </form>
      </div>
      {info && (
        <div className="w-5/12 border-l border-white/10">
          <div className="flex flex-col mt-10 items-center">
            {userData?.profilePic ? (
              <Image
                src={userData?.profilePic}
                width={60}
                height={60}
                className="rounded-full"
                alt="profile"
              />
            ) : (
              <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-white/30">
                <FaUserAlt size={25} />
              </div>
            )}
            <p className="text-xl font-medium mt-3">{userData?.name}</p>
            <p className="text-sm">{userData?.email}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps({ query }) {
  try {
    const userId = query.id;

    const userDocRef = doc(collection(firebase.db, "users"), userId);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      const userData = {
        ...userDoc.data(),
        createdAt: userDoc.data().createdAt.toMillis(),
      };
      return {
        props: {
          userData,
        },
      };
    } else {
      return {
        notFound: true,
      };
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    return {
      props: {
        userData: null,
      },
    };
  }
}

ChattingView.PageLayout = ChatLayout;
export default ChattingView;

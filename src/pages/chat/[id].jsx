import { firebase } from "@NextAlias/firebase/firebase";
import {
  getConversationIdByParticipants,
  getUserById,
  sendMessage,
} from "@NextAlias/firebase/firestore";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiArrowBack, BiSolidSend } from "react-icons/bi";
import { BsImages } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";
import { RiArrowRightCircleFill, RiInformationFill } from "react-icons/ri";
import Messages from "./Messages";
import ChatLayout from "./layout";

const ChattingView = () => {
  const { query } = useRouter();
  const chatMateId = query.id;

  const currentUser = firebase.auth.currentUser;
  const [loading, setLoading] = useState(true);
  const [conversationId, setConversationId] = useState(null);
  const [userData, setUserData] = useState(null);
  const [info, setInfo] = useState(false);
  const [focus, setFocus] = useState(false);

  const { handleSubmit, register, reset, watch } = useForm();
  const message = watch("message");

  const onSend = async () => {
    const content = { media: false, message: message };
    reset();
    await sendMessage(currentUser.uid, chatMateId, content);
  };

  useEffect(() => {
    const fetChatMate = async () => {
      setLoading(true);
      const user = await getUserById(chatMateId);
      if (user) {
        setUserData(user);
        const participants = [currentUser.uid, user.userId];
        if (participants.length === 2) {
          const conversationId = await getConversationIdByParticipants(
            participants
          );
          setConversationId(conversationId);
        }
      }
      setLoading(false);
    };
    if (!userData || userData.userId !== chatMateId) {
      fetChatMate();
    }
  }, [chatMateId, currentUser?.uid, userData]);

  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <ImSpinner9 className="text-7xl animate-spin mx-auto" />
      </div>
    );
  }

  return (
    <div className="flex h-full">
      <Head>
        <title>{userData?.name || "Message"}</title>
      </Head>
      <div className="w-full flex flex-col h-full">
        <div className="mx-2 md:px-8 px-2 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <Link href={"/chat"} className="text-2xl lg:hidden">
              <BiArrowBack />
            </Link>
            {userData?.profilePic ? (
              <Image
                src={userData?.profilePic}
                width={50}
                height={50}
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
          <Messages conversationId={conversationId} userData={userData} />
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
              onFocus={setFocus}
              onBlur={() => setFocus(false)}
              placeholder="Type your message here..."
              required
              className="w-11/12 bg-white/0 outline-none px-3 text-lg py-3"
            />
            {(message?.length || focus) && (
              <button
                disabled={!message?.length}
                type="submit"
                className={`${
                  message?.length && "bg-green-700 shadow"
                } p-2 rounded absolute top-1/2 -translate-y-1/2 right-2`}
              >
                <BiSolidSend size={20} />
              </button>
            )}
          </div>
        </form>
      </div>
      {info && (
        <div className="lg:w-5/12 lg:relative lg:bg-inherit absolute bg-[#272F56] h-full w-full border-l border-white/10">
          <button
            onClick={() => setInfo(false)}
            className="text-2xl text-blue-500 p-2.5 bg-white/5 lg:hidden"
          >
            <BiArrowBack />
          </button>
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

ChattingView.PageLayout = ChatLayout;
export default ChattingView;

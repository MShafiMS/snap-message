import { firebase } from "@NextAlias/firebase/firebase";
import { getAllFriends, getChatmateList } from "@NextAlias/firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BiHomeAlt2 } from "react-icons/bi";
import { ImSpinner9 } from "react-icons/im";
import { RiUserSearchLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../Components/Logo";
import Connect from "./Connect";
import Friends from "./Friends";
import Menu from "./Menu";

const ChatLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isFriend, setIsFriend] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [friends, setFriends] = useState(null);
  const [chatmateList, setChatmateList] = useState(null);
  const [nonFriends, setNonFriends] = useState(null);
  const [user] = useAuthState(firebase.auth);
  const router = useRouter();
  const { query } = useRouter();

  const filteredFriends = friends?.filter((item1) => {
    return !chatmateList?.some((item2) => item1.userId === item2.userId);
  });

  useEffect(() => {
    const fetchUsers = async () => {
      if (user) {
        const chatmateList = await getChatmateList();
        const { friendUsers, nonFriendUsers } = await getAllFriends(user?.uid);
        setChatmateList(chatmateList);
        setFriends(friendUsers);
        setNonFriends(nonFriendUsers);
      }
    };
    if (!chatmateList || !friends || !nonFriends) {
      fetchUsers();
    }
  }, [chatmateList, friends, nonFriends, user]);

  useEffect(() => {
    if (chatmateList && friends && nonFriends && loading) {
      setLoading(false);
    }
  }, [chatmateList, friends, nonFriends, loading]);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  if (loading) {
    return (
      <div className="bg-[#1B2348] text-white h-screen flex flex-col gap-8 items-center justify-center">
        <Logo className="w-80 animate-pulse" fill={"#FFFFFF"} />
        <ImSpinner9 className="text-6xl animate-spin mx-auto" />
      </div>
    );
  }
  return (
    <div className="lg:flex bg-[#1B2348] lg:p-4 h-screen text-white">
      <div
        className={`lg:w-4/12 ${
          query?.id && "lg:block hidden"
        } overflow-y-auto lg:mr-4 p-2 lg:rounded-xl lg:bg-gradient-to-b from-[#272F56] to-[#272F56]/80`}
      >
        <div className="flex gap-5 mx-1 mt-2">
          {isFriend || isMenu ? (
            <button
              onClick={() => {
                setIsFriend(false);
                setIsMenu(false);
              }}
              className="p-2 bg-[#4B5277] rounded-full text-lg"
            >
              <BiHomeAlt2 />
            </button>
          ) : (
            <button
              onClick={() => setIsMenu(true)}
              className="p-2 bg-[#4B5277] rounded-full text-lg"
            >
              <RxHamburgerMenu />
            </button>
          )}
          <div className="w-full flex justify-center">
            {isFriend || isMenu ? (
              <p className="text-2xl font-bold">
                {isFriend && "Connect"} {isMenu && "Menu"}
              </p>
            ) : (
              <Logo className="w-40" fill={"#FFFFFF"} />
            )}
          </div>
          <button
            onClick={() => {
              setIsMenu(false);
              setIsFriend(true);
            }}
            className={`p-2 bg-[#3f6dec] rounded-full text-lg`}
          >
            <RiUserSearchLine />
          </button>
        </div>
        {isFriend || isMenu ? (
          <>
            {isFriend && <Connect nonFriends={nonFriends} />}
            {isMenu && (
              <Menu
                clickFriend={() => {
                  setIsMenu(false);
                  setIsFriend(true);
                }}
              />
            )}
          </>
        ) : (
          <>
            {chatmateList && filteredFriends && (
              <Friends friends={[...chatmateList, ...filteredFriends]} />
            )}
          </>
        )}
      </div>
      <div
        className={`w-full lg:h-full h-screen ${
          !query?.id && "lg:block hidden"
        } rounded-xl bg-gradient-to-bl from-[#273056] to-[#36406C]`}
      >
        {children}
      </div>
    </div>
  );
};

export default ChatLayout;

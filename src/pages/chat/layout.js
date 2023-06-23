import { useState } from "react";
import { RiUserSearchLine } from "react-icons/ri";
import { RxArrowLeft, RxHamburgerMenu } from "react-icons/rx";
import Logo from "../Components/Logo";
import Connect from "./Connect";
const ChatLayout = ({ children }) => {
  const [isFriend, setIsFriend] = useState(false);
  return (
    <div className="flex bg-[#1B2348] p-4 min-h-screen text-white">
      <div className="w-4/12 mr-4 p-2 rounded-xl bg-gradient-to-b from-[#272F56] to-[#4B5277]">
        <div className="flex gap-5 mx-1 mt-2">
          {isFriend ? (
            <button
              onClick={() => setIsFriend(false)}
              className="p-2 bg-[#4B5277] rounded-full text-lg"
            >
              <RxArrowLeft />
            </button>
          ) : (
            <button className="p-2 bg-[#4B5277] rounded-full text-lg">
              <RxHamburgerMenu />
            </button>
          )}
          <div className="w-full flex justify-center">
            {isFriend ? (
              <p className="text-2xl font-bold">Connect</p>
            ) : (
              <Logo className="w-40" fill={"#FFFFFF"} />
            )}
          </div>
          <button
            onClick={() => setIsFriend(true)}
            className={`p-2 bg-[#3f6dec] rounded-full text-lg`}
          >
            <RiUserSearchLine />
          </button>
        </div>
        {isFriend && <Connect />}
      </div>
      <div className="w-full rounded-xl bg-gradient-to-bl from-[#273056] to-[#36406C]">
        {children}
      </div>
    </div>
  );
};

export default ChatLayout;

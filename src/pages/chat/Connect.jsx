import { firebase } from "@NextAlias/firebase/firebase";
import { addFriend } from "@NextAlias/firebase/firestore";
import Image from "next/image";
import { useState } from "react";
import { FaUserAlt, FaUserPlus } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";

const Connect = ({ nonFriends }) => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const currentUser = firebase.auth.currentUser;

  const searched = nonFriends?.filter(
    (user) =>
      user.name.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search)
  );

  const handleAddFriend = async (friendId) => {
    setIsLoading(friendId);
    await addFriend(currentUser.uid, friendId);
    setIsLoading("");
  };

  return (
    <div className="flex flex-col px-2 gap-3">
      <div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          onFocus={(e) => setSearch(e.target.value)}
          placeholder="Find friends by name or email"
          type="text"
          className="w-full bg-white/20 py-1.5 px-3 rounded-3xl outline-none mt-6 mb-2"
        />
      </div>
      {search.length
        ? searched.slice(0, 7)?.map((user, idx) => (
            <div
              key={idx}
              className="bg-white/20 p-2 gap-2 rounded flex justify-between items-center"
            >
              <div className="flex gap-2 justify-center">
                {user?.profilePic ? (
                  <Image
                    src={user?.profilePic}
                    width={45}
                    height={45}
                    className="rounded-full"
                    alt="profile"
                  />
                ) : (
                  <div className="w-[45px] h-[45px] flex items-center justify-center rounded-full bg-white/30">
                    <FaUserAlt size={25} />
                  </div>
                )}
                <div>
                  <p className="text-lg font-medium">{user.name}</p>
                  <p className="text-xs">{user.email}</p>
                </div>
              </div>
              <button
                onClick={() => handleAddFriend(user.userId)}
                className="p-2 text-lg border-[#70a8fd] text-[#70a8fd] border-2 rounded"
              >
                {isLoading === user.userId ? (
                  <ImSpinner2 className="animate-spin" />
                ) : (
                  <FaUserPlus />
                )}
              </button>
            </div>
          ))
        : null}
        {!searched.length && <div className="h-96 flex items-center justify-center">
        <p>Nothing Found</p></div>}
    </div>
  );
};

export default Connect;

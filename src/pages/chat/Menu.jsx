import firebase from "@NextAlias/firebase/firebase";
import { signOut } from "firebase/auth";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { BiLogOutCircle } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { RiUserSearchLine } from "react-icons/ri";

const Menu = ({ clickFriend }) => {
  const [user] = useAuthState(firebase.auth);
  return (
    <div className="flex flex-col items-center mt-8">
      {user?.photoURL ? (
        <Image
          src={user?.photoURL}
          width={90}
          height={90}
          className="rounded-full"
          alt="profile"
        />
      ) : (
        <div className="w-[90px] h-[90px] flex items-center justify-center rounded-full bg-white/30">
          <FaUserAlt size={25} />
        </div>
      )}
      <h1 className="text-2xl font-semibold mt-4">{user?.displayName}</h1>
      <p className="text-sm">{user?.email}</p>
      <button
        onClick={clickFriend}
        className="flex items-center gap-3 justify-center uppercase bg-white/10 w-full my-2 py-3 bg-blue-600 rounded"
      >
        <RiUserSearchLine className="text-xl" /> Connect With Friends
      </button>
      <button
        onClick={() => signOut(firebase.auth)}
        className="flex items-center gap-3 justify-center uppercase bg-white/10 w-full my-2 py-3 bg-red-500 rounded"
      >
        <BiLogOutCircle className="text-xl" /> Logout
      </button>
    </div>
  );
};

export default Menu;

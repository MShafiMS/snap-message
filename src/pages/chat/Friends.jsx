import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaUserAlt } from "react-icons/fa";

const Friends = ({ friends }) => {
  const { query } = useRouter();
  return (
    <>
      {friends?.map((user, idx) => (
        <Link
          href={`/chat/${user.userId}`}
          key={idx}
          className={`${
            query.id === user.userId ? "bg-[#4967be]" : "hover:bg-white/10"
          } duration-100 p-3 gap-2 rounded-lg flex justify-between items-center`}
        >
          <div className="flex gap-2 items-center justify-center">
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
            <p className="text-lg font-medium">{user.name}</p>
          </div>
        </Link>
      ))}
      {!friends.length && (
        <div className="h-[80%] flex items-center justify-center">
          <p>Nothing Found</p>
        </div>
      )}
    </>
  );
};

export default Friends;

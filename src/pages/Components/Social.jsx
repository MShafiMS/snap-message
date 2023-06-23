import firebase from "@NextAlias/firebase/firebase";
import { addUser } from "@NextAlias/firebase/firestore";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { SiSpinrilla } from "react-icons/si";

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(
    firebase.auth
  );
  return (
    <>
      <button
        type="button"
        onClick={async () => {
          const { user } = await signInWithGoogle();
          const userData = {
            userId: user.uid,
            name: user.displayName,
            email: user.email,
            profilePic: user.photoURL,
          };
          await addUser(user.uid, userData);
        }}
        className="w-80 mx-auto border-[#244583]/70 border-2 py-2 px-4 rounded-3xl flex justify-center items-center font-medium"
      >
        {loading ? (
          <SiSpinrilla className="text-center w-full text-2xl animate-spin" />
        ) : (
          <>
            <span className="mr-3">Continue with</span> <FcGoogle size={20} />
          </>
        )}
      </button>
      {error && (
        <p className="text-center text-red-600 mt-2 capitalize">
          {error?.code}
        </p>
      )}
    </>
  );
};

export default Social;

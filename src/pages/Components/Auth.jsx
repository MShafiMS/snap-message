import firebase from "@NextAlias/firebase/firebase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./Login";
import Logo from "./Logo";
import Register from "./Register";
import Reset from "./Reset";

const Auth = () => {
  const [isMethod, setIsMethod] = useState("login");
  const [isHidden, setIsHidden] = useState(false);
  const [user, loading] = useAuthState(firebase.auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/chat");
    }
  }, [user, router]);
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div
      className={`flex lg:flex-row flex-col items-center lg:gap-32 min-h-screen lg:mx-36 ${
        isHidden ? "lg:justify-center justify-start" : "justify-center"
      }`}
    >
      {isHidden && <Logo className="w-60 my-10 lg:hidden" />}
      <div
        className={`lg:w-fit flex flex-col justify-center items-center ${
          isHidden && "lg:block hidden"
        }`}
      >
        <Logo className="lg:w-[330px] w-72" />
        <p className="lg:text-2xl text-xl text-center mt-4 font-medium">
          Chat, Snap, and Share in an Instant!
        </p>
        <div className="flex flex-col justify-center lg:hidden">
          <button
            onClick={() => setIsHidden(true)}
            className="mb-5 mt-12 w-60 py-2 text-lg font-medium text-white rounded-3xl bg-[#244583]/80"
          >
            Sign In
          </button>
          <button
            onClick={() => {
              setIsHidden(true);
              setIsMethod("register");
            }}
            className="w-60 py-2 text-lg font-medium text-black rounded-3xl border-[#244583]/80 border-2"
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className={`lg:w-fit ${!isHidden && "lg:block hidden"}`}>
        {isMethod === "login" && <Login setIsMethod={setIsMethod} />}
        {isMethod === "register" && <Register setIsMethod={setIsMethod} />}
        {isMethod === "reset" && <Reset setIsMethod={setIsMethod} />}
      </div>
    </div>
  );
};

export default Auth;

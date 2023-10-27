import { firebase } from "@NextAlias/firebase/firebase";
import { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { SiSpinrilla } from "react-icons/si";

const Reset = ({ setIsMethod }) => {
  const [isSent, setIsSent] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
    firebase.auth
  );
  const onSubmit = (data) => {
    sendPasswordResetEmail(data.email).then((response) => {
      if (response) {
        setIsSent(true);
      }
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="lg:w-96 text-gray-700">
        <h1 className="text-3xl uppercase font-semibold text-center">
          Forgot Password
        </h1>
        <p className="text-xl text-center mb-6">Reset your password now!</p>
        <div className="mb-4">
          <p className="mb-2 pl-2 font-medium">Email</p>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email is required!",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid Email!",
              },
            })}
            type="email"
            placeholder="deniel123@gmail.com"
            className="w-full outline-none border-[#244583]/70 border-2 py-2 px-4 rounded-3xl"
          />
          {errors?.email?.type === "required" && (
            <p className="ml-2 text-red-600 capitalize">
              {errors.email.message}
            </p>
          )}
          {errors?.email?.type === "pattern" && (
            <p className="ml-2 text-red-600 capitalize">
              {errors.email.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSent}
          className={`mb-1 w-full py-2 text-lg font-medium text-white rounded-3xl ${
            isSent ? "bg-green-500" : "bg-[#244583]/80"
          }`}
        >
          {sending ? (
            <SiSpinrilla className="text-center w-full text-2xl animate-spin" />
          ) : (
            <>{isSent ? "Email Sent" : "Submit"}</>
          )}
        </button>
        {error && (
          <p className="text-center text-red-600 mt-1 mb-4 capitalize">
            {error?.code}
          </p>
        )}
        <div className="flex justify-center ">
          <button
            type="button"
            onClick={() => {
              setIsSent(false);
              setIsMethod("login");
            }}
            className="text-[#244583] underline"
          >
            {isSent ? "Back to login" : "Cancel"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Reset;

import { firebase } from "@NextAlias/firebase/firebase";
import { addUser } from "@NextAlias/firebase/firestore";
import { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { SiSpinrilla } from "react-icons/si";
import Social from "./Social";

const Register = ({ setIsMethod }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [isShowPass, setIsShowPass] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(firebase.auth);
  const [updateProfile, updating] = useUpdateProfile(firebase.auth);
  const onSubmit = async (data) => {
    const { user } = await createUserWithEmailAndPassword(
      data.email,
      data.password
    );
    await addUser(user.uid, {
      userId: user.uid,
      name: data.name,
      email: data.email,
    });
    await updateProfile({ displayName: data.name });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="lg:w-96 text-gray-700">
        <h1 className="text-3xl uppercase font-semibold text-center">
          Create Account
        </h1>
        <p className="text-xl text-center mb-6">To get started now!</p>
        <div className="mb-4">
          <p className="mb-2 pl-2 font-medium">Name</p>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Name is required!",
              },
            })}
            type="text"
            placeholder="deniel123@gmail.com"
            className="w-full outline-none border-[#244583]/70 border-2 py-2 px-4 rounded-3xl"
          />
          {errors?.name?.type === "required" && (
            <p className="ml-2 text-red-600 capitalize">
              {errors.name.message}
            </p>
          )}
        </div>
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
        <div className="mb-4 relative">
          <p className="mb-2 pl-2 font-medium">Password</p>
          <input
            {...register("password", {
              required: {
                value: true,
                message: "Password is required!",
              },
              minLength: {
                value: 6,
                message: "Must be 6 characters or longer!",
              },
            })}
            type={isShowPass ? "text" : "password"}
            placeholder="••••••••"
            className="w-full outline-none border-[#244583]/70 border-2 py-2 px-4 rounded-3xl"
          />
          {errors?.password?.type === "required" && (
            <p className="ml-2 text-red-600 capitalize">
              {errors.password.message}
            </p>
          )}
          {errors?.password?.type === "minLength" && (
            <p className="ml-2 text-red-600 capitalize">
              {errors.password.message}
            </p>
          )}
          {isShowPass ? (
            <button
              type="button"
              onClick={() => setIsShowPass(false)}
              className="absolute top-1/2 translate-y-1/2 right-4"
            >
              <FaEye />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setIsShowPass(true)}
              className="absolute top-1/2 translate-y-1/2 right-4"
            >
              <FaEyeSlash />
            </button>
          )}
        </div>
        <div className="flex justify-end mb-4">
          <button
            type="button"
            onClick={() => setIsMethod("reset")}
            className="text-[#244583] underline"
          >
            Forgot Password
          </button>
        </div>
        <button
          type="submit"
          disabled={loading || updating}
          className="mb-4 w-full py-2 text-lg font-medium text-white rounded-3xl bg-[#244583]/80"
        >
          {loading || updating ? (
            <SiSpinrilla className="text-center w-full text-2xl animate-spin" />
          ) : (
            "Sign Up"
          )}
        </button>
        {error && (
          <p className="text-center text-red-600 my-1 capitalize">
            {error?.code}
          </p>
        )}
        <div className="mb-4 flex gap-4 justify-center items-center">
          <div className="w-28 h-[2px] bg-[#244583]/50" />
          <p>or</p>
          <div className="w-28 h-[2px] bg-[#244583]/50" />
        </div>
        <Social />
        <p className="mt-16 text-center font-medium">
          Already have an account,{" "}
          <button
            type="button"
            onClick={() => setIsMethod("login")}
            className="font-bold underline"
          >
            Sign In Now
          </button>
        </p>
      </form>
    </div>
  );
};

export default Register;

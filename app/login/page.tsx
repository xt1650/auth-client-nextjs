"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useFormState } from "react-dom";
import axios from "axios";
// import { FaGithub } from "react-icons/fa";

export default function Login() {
  const initialState = {
    message: "",
  };

  const handleAuth = (event) => {

    console.log(event.target.name)
    console.log(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET)
    console.log(process.env.GOOGLE_CLIENT_ID)
    // signIn(event.target.name
    // //   , 
    // //   {
    // //   callbackUrl: "http://localhost:3000/dashboard",
    // // }
    // );
  };

  const handleCredentials = async (prevState, formData) => {
    const response = await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirect: false,
    });
  };

  const [state, formAction] = useFormState(handleCredentials, initialState);
  return (
    <>
      <h1>Login Page</h1>
 
    



      <form className="max-w-sm mx-auto" action={formAction}>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
        <div className="mb-5">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            // onChange={setValue}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          {/* <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {userMessage}
          </p> */}
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            // onChange={setValue}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          {/* <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {passMessage}
          </p> */}
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

      <div className="section-break flex flex-row items-center w-1/3 mx-auto my-4">
        <div className="flex-grow border-b-2"></div>
        <div className="mx-2 font-serif text-white">OR</div>
        <div className="flex-grow border-b-2"></div>
      </div>

      <div className="container mx-auto grid grid-cols-4 gap-2 w-2/3 mt-2">
        <div className="my-2 flex justify-center">
      
          <button
            onClick={handleAuth}
            name="google"
            className="bg-blue-500 flex flex-row items-center hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Login with
          </button>
        </div>
      </div>
    </>
  );
}

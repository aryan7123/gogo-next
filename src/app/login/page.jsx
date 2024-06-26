'use client';

import React from "react";
import Link from "next/link";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useGlobalContext } from "@/context/context";

const page = () => {
  const {
    showPassword,
    handleShowPassword
  } = useGlobalContext();
  return (
    <>
      <main className="w-full h-full flex items-center justify-center fixed-background">
        <div className="max-w-sm md:max-w-[1400px] flex md:flex-row flex-col items-start justify-center mx-auto bg-white form-card">
          <div className="w-full md:w-[40%] md:pr-[18rem] md:pl-12 md:py-16 py-8 pr-8 pl-8 md:h-[70vh] image-side">
            <h3 className="text-white text-2xl mb-2 md:text-3xl font-medium whitespace-nowrap">
              MAGIC IS IN THE <br className="hidden md:block" /> DETAILS
            </h3>
            <span className="text-white text-sm whitespace-nowrap">
              Please use your credentials to login.
            </span>
            <br />
            <span className="text-white text-sm whitespace-nowrap">
              If you are not a member,{" "}
              <Link href="/register" className="underline">
                please register
              </Link>
            </span>
          </div>
          <div className="w-full md:w-[60%] md:pl-16 md:pr-[5rem] md:py-16 py-8 pr-8 pl-8">
            <span className="gogo-logo mb-5"></span>
            <span className="text-[#3a3a3a] text-sm font-medium">LOGIN</span>
            <form className="mt-8">
              <div className="flex flex-col gap-1.5 mb-6">
                <label
                  htmlFor="email"
                  className="text-[#3a3a3ab3] text-xs font-medium"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="border border-[#d7d7d7] p-1.5 text-sm text-[#3a3a3a] outline-none"
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="password"
                  className="text-[#3a3a3ab3] text-xs font-medium"
                >
                  Password
                </label>
                <div className="border border-[#d7d7d7] p-1.5 flex items-center justify-between w-[inherit]">
                  <input
                    type={showPassword ? "text" : "password"}
                    autoComplete="off"
                    name="password"
                    className="w-full text-sm text-[#3a3a3a] outline-none"
                  />
                  {showPassword ? (
                    <FaRegEyeSlash className="cursor-pointer" size={20} onClick={handleShowPassword}/>
                  ) : (
                    <FaRegEye className="cursor-pointer" size={20} onClick={handleShowPassword} />
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between w-[inherit] mt-6">
                <Link
                  href="/forgot-password"
                  className="text-[#3a3a3ab3] text-sm font-medium hover:text-[#922c88] transition-colors"
                >
                  Forgot Password?
                </Link>
                <button
                  type="button"
                  className="bg-[#922c88] text-white w-[120px] text-sm font-medium rounded-[50px] py-2.5 shadow-sm transition-colors hover:bg-[#73236b]"
                >
                  LOGIN
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;

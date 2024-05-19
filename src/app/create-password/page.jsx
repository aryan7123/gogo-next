'use client';

import React from 'react'
import Link from 'next/link'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useGlobalContext } from "@/context/context";

const page = () => {
  const {
    showPassword,
    showConfirmPassword,
    handleShowPassword,
    handleShowConfirmPassword,
  } = useGlobalContext();
  return (
    <>
        <main className="w-full h-full flex items-center justify-center fixed-background">
        <div className="max-w-sm md:max-w-[1400px] flex md:flex-row flex-col items-start justify-center mx-auto bg-white form-card">
          <div className="w-full md:w-[40%] md:pr-[20rem] md:pl-12 md:py-16 py-8 pr-8 pl-8 md:h-[95vh] image-side">
            <h3 className="text-white text-2xl mb-2 md:text-3xl font-medium whitespace-nowrap">
              MAGIC IS IN THE <br className="hidden md:block" /> DETAILS
            </h3>
            <span className="text-white text-sm whitespace-nowrap">
              Please use this form to register.
            </span>
            <br />
            <span className="text-white text-sm whitespace-nowrap">
              If you are a member,{" "}
              <Link href="/login" className="underline">
                please login
              </Link>
            </span>
          </div>
          <div className="w-full md:w-[60%] md:pl-16 md:pr-[6rem] md:py-16 py-8 pr-8 pl-8">
            <span className="gogo-logo mb-5"></span>
            <span className="text-[#3a3a3a] text-sm font-medium">CREATE NEW PASSWORD</span>
            <form className="mt-8">
              <div className="flex flex-col gap-1.5 mb-6">
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
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="confirmPassword"
                  className="text-[#3a3a3ab3] text-xs font-medium"
                >
                  Confirm Password
                </label>
                <div className="border border-[#d7d7d7] p-1.5 flex items-center justify-between w-[inherit]">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="off"
                    name="confirmPassword"
                    className="w-full text-sm text-[#3a3a3a] outline-none"
                  />
                  {showConfirmPassword ? (
                    <FaRegEyeSlash className="cursor-pointer" size={20} onClick={handleShowConfirmPassword}/>
                  ) : (
                    <FaRegEye className="cursor-pointer" size={20} onClick={handleShowConfirmPassword} />
                  )}
                </div>
              </div>
              <div className="w-[inherit] flex justify-end mt-6">
                <button
                  type="button"
                  className="bg-[#922c88] text-white w-[120px] text-sm font-medium rounded-[50px] py-2.5 shadow-sm transition-colors hover:bg-[#73236b]"
                >
                  CREATE
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}

export default page
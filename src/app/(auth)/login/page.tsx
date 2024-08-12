"use client";

import { Coming_Soon } from "next/font/google";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";

function Loginpage() {
  const router = useRouter();


 

  return (
    <>
      <div className="flex items-center justify-center h-full">
        <div className="w-[30%]">
          <form >
            <button type="submit" className="p-3 text-center bg-white text-black my-2 mb-8 rounded-lg w-full">Github</button>
          </form>
          <form
            
            className=" flex items-center justify-center h-full flex-col gap-7 w-full "
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              className="border-0 bg-[#2d2b42] p-4 border-none outline-none rounded-lg w-full "
            ></input>

            <input
              type="password"
              placeholder="password"
              name="password"
              className="border-0 bg-[#2d2b42] p-4 border-none outline-none rounded-lg w-full"
            ></input>
            <button className="p-3 text-center bg-[#3673fd] text-black my-2 w-full rounded-lg">Login</button>
          </form>
          
        </div>
      </div>
    </>
  );
}

export default Loginpage;

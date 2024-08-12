"use client";

import { createUser } from "@/lib/actions";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

import { useFormState } from "react-dom";

function Registerpage() {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-center h-full">
        <div className="bg-[#2d2b42] p-12 w-[30%] rounded-lg">
          <form action={createUser} className=" flex items-center justify-center h-full flex-col gap-7 w-full ">
            <div>
              <input
                type="text"
                placeholder="username"
                name="username"
                className="border-0 bg-[#0d0c22] p-4 border-none outline-none rounded-lg w-full "
              ></input>
            </div>
            <div>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="border-0 bg-[#0d0c22] p-4 border-none outline-none rounded-lg w-full"
              ></input>
            </div>
            <div>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="border-0 bg-[#0d0c22] p-4 border-none outline-none rounded-lg w-full"
              ></input>
            </div>
            <div>
              <input
                type="password"
                placeholder="password"
                name="checkPassword"
                className="border-0 bg-[#0d0c22] p-4 border-none outline-none rounded-lg w-full"
              ></input>
            </div>
            <button type="submit" className="bg-[#3673fd] p-4 w-full">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Registerpage;

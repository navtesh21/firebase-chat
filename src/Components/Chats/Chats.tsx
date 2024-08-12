"use client";
import React, { useEffect, useRef } from "react";

function Chats() {
  const own = true;
  const lastChat = useRef(null);

  useEffect(() => {
    if (lastChat) {
      console.log(lastChat.current, "hi");
    }
  }, []);
  return (
    <div className=" max-h-max overflow-y-auto flex-1 flex-col flex p-4 gap-3 self-end">
      <div className="max-w-[70%] ">
        <img src="./avatar.png" alt="" />
        <div className="flex flex-col gap-2">
          <p className="p-3 bg-slate-400 rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus www
            www quis quae qui! Sint asperiores vero nobis deserunt aperiam iusto
            ww repellendus, optio impedit eius, reprehenderit dolorum nihil www
            magnam alias, odit quam.
          </p>
          <span>1 min ago</span>
        </div>
      </div>
      <div className={`${own && "self-end"} max-w-[70%]`}>
        <img src="./avatar.png" alt="" />
        <div className="flex flex-col gap-2">
          <p className={`${own && "bg-blue-400"} p-3 rounded-lg`}>Lorem</p>
          <span>1 min ago</span>
        </div>
        <div ref={lastChat}></div>
      </div>
    </div>
  );
}

export default Chats;

import Image from "next/image";
import React from "react";

function ChatNavbar() {
  return (
    <div className=" border-b-2 bg-blue-700  border-white   z-10 w-full p-4">
      <div className="flex justify-between">
        <div className="flex gap-5">
          <div className="relative h-12 w-12 rounded-full  ">
            <Image
              fill
              className="rounded-full object-cover"
              src="https://images.pexels.com/photos/18986078/pexels-photo-18986078/free-photo-of-woman-leaning-on-vessel-railing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="flex-col flex gap-1 my-auto">
            <h2 className="text-sm font-bold">Maria</h2>
            <h3 className="text-xs font-medium text-gray-200">Looks good.</h3>
          </div>
        </div>
        <div className="flex gap-6 ">
          <Image
            src="https://static.thenounproject.com/png/1380510-200.png"
            width={24}
            height={24}
            alt=""
          />
          <Image
            src="https://static.thenounproject.com/png/1380510-200.png"
            width={24}
            height={24}
            alt=""
          />
          <Image
            src="https://static.thenounproject.com/png/1380510-200.png"
            width={24}
            height={24}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ChatNavbar;

import Image from "next/image";
import React from "react";
import AddUser from "../AddUser/AddUser";

function Users() {
  const arr = new Array(23).fill(0);

  return (
    <div className="flex-col flex gap-8   ">
      <div className="flex justify-between pr-3">
        <div className="flex gap-4">
          <div className="relative h-8 w-8 rounded-full ">
            <Image
              fill
              className="rounded-full object-cover"
              src="https://images.pexels.com/photos/18986078/pexels-photo-18986078/free-photo-of-woman-leaning-on-vessel-railing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <h2 className="my-auto">John Doe</h2>
        </div>
        <div className="flex gap-3 ">
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
      <div className="flex justify-between pr-3 ">
        <div className="max-w-sm space-y-3">
          <input
            type="text"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="Search"
          />
        </div>
        <div className="bg-gray-400 flex justify-center items-center rounded-lg">
          <Image
            src="https://static.thenounproject.com/png/1380510-200.png"
            width={38}
            height={38}
            className="p-2 z-10"
            alt=""
          />
        </div>
        <AddUser />
      </div>
      <div className=" flex flex-col gap-6 ">
        {arr.map((i) => (
          <div key={i}>
            <div className="flex gap-5">
              <div className="relative h-10 w-10 rounded-full  ">
                <Image
                  fill
                  className="rounded-full object-cover"
                  src="https://images.pexels.com/photos/18986078/pexels-photo-18986078/free-photo-of-woman-leaning-on-vessel-railing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-sm font-bold">Maria</h2>
                <h3 className="text-xs font-medium text-gray-200">
                  Looks good.
                </h3>
              </div>
            </div>
            <hr className="text-gray-300" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;

"use client";
import { addUserToChat, getSearchedUsers } from "@/lib/actions";
import React, { FormEvent, useState } from "react";

function AddUser() {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const query = e.target.name.value;
    setData(await getSearchedUsers(query));
  }
  return (
    <>
      <button
        onClick={() => setModal(!modal)}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button>

      <div
        id="authentication-modal"
        className={`${
          modal ? "null" : "hidden"
        } overflow-hidden fixed bottom-0 mt-44 ml-[600px] right-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Search User
              </h3>
              <button
                type="button"
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => setModal(false)}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-4 md:p-5">
              <form
                className="space-y-4"
                onSubmit={(event) => handleSubmit(event)}
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Name of User
                  </label>
                  <input
                    name="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <button type="submit">Submit</button>
              </form>
              <div className="mt-4">
                {data && data.length > 0 ? (
                  data.map((item) => (
                    <div>
                      <h1>{item.username}</h1>
                      <button onClick={() => addUserToChat()}>Add</button>
                    </div>
                  ))
                ) : (
                  <h1>No results found</h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUser;

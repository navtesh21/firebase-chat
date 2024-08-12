import Image from 'next/image'
import React from 'react'

function MessageInput() {
  return (
    <div className=' w-full p-4 border-t-2 border-white mt-auto   '>
        <div className='flex gap-3 justify-between'>
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
        <div className="w-96 flex gap-3">
          <input
            type="text"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="Search"
          />
          <div className="relative h-8 w-8 my-auto rounded-full  ">
            <Image
              fill
              className="rounded-full object-cover"
              src="https://images.pexels.com/photos/18986078/pexels-photo-18986078/free-photo-of-woman-leaning-on-vessel-railing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
        <button className='text-white bg-blue-600 p-2 rounded-lg'>Send</button>

        </div>
    </div>
  )
}

export default MessageInput
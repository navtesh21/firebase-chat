import ChatNavbar from "@/Components/ChatNavbar/ChatNavbar";
import Chats from "@/Components/Chats/Chats";
import MessageInput from "@/Components/MessageInput/MessageInput";
import Users from "@/Components/Users/Users";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className=" flex  max-h-[90vh] w-[90vw] relative ">
        <div className="w-[25%] border-r-2 border-white overflow-y-auto ">
          <Users />
        </div>
        <div className="w-[60%]  border-r-2 border-white flex flex-col relative min-h-full">
          <ChatNavbar />
          <Chats />
          <MessageInput />
        </div>
        <div className="w-[15%]">
          <h1>Hi</h1>
        </div>
      </div>
    </div>
  );
}

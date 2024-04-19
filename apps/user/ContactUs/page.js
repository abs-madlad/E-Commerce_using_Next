import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { BsCreditCard } from "react-icons/bs";
import { VscPackage } from "react-icons/vsc";
import { IoIosCall } from "react-icons/io";
import React from 'react'
import Header from '@/app/components/Header'
import Dd from '@/app/components/footer/cc'
const page = () => {
  return (
    <div className="flex flex-col bg-white text-black">
        <div><Header /></div>
        <div className="mt-[140px]">
            <div className="p-2">
                <p className="text-2xl font-medium text-center">Want to chat now or get a call from us?</p>
            </div>
            <div className="bg-gray-100 p-4 grid grid-cols-1 sm:grid-cols-2">
                <div className="border-2 rounded-md border-gray-400 p-3 bg-white mx-4">
                    <div className="text-lg font-medium flex items-center">
                        <p><MdOutlineMarkUnreadChatAlt /></p>
                        <p className="mx-1">Chat right now</p>
                    </div>
                    <span>Our messaging assistant can quickly solve many issues or direct you to the right person or place</span>
                    <div>
                        <p className="text-gray-700 font-black">Instant chat and always available.</p>
                        <div>
                            <button className="border-2 rounded-md py-2 px-4">Start Chatting</button>
                        </div>
                    </div>
                </div>
                <div className="border-2 rounded-md border-gray-400 p-3 bg-white">
                    <div className="text-lg font-medium flex items-center">
                        <p><IoIosCall /></p>
                        <p className="mx-1">Have us call you</p>
                    </div>
                    <span>We'll first get a few details about your issue and then someone will call you right away.</span>
                    <div>
                    <p className="text-gray-700 font-black">24/7 call support</p>
                        <div>
                            <button className="border-2 rounded-md py-2 px-4">Call me</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="text-xl font-medium text-center">
                    <p>Here are a few things you can take care of on your own</p>
                </div>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 ">
                        <div className="border-transparent "><span className="text-4xl text-center"><VscPackage /></span><p>Check on an order</p></div>
                        <div className="border-transparent "><span className="text-4xl text-center"><BsCreditCard /></span><p>Manage your payments</p></div>
                    </div>
                </div>
            </div>
        </div>
        <div><Dd /></div>
    </div>
  )
}

export default page
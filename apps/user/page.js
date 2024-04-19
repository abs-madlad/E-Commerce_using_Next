// import Header from "../../../../components/Header";
import Header from "@/app/components/Header";
import { BsCreditCard } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import Dd from "@/app/components/footer/cc";
import { VscPackage } from "react-icons/vsc";
import { FaUser } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import Link from "next/link";

import React from "react";

const page = () => {
  return (
    <div className="bg-white text-black flex flex-col">
        <div>
            <Header />
        </div>
        <div className="mt-[140px]">
        <div className="font-semibold p-2">
            <h1 className="text-2xl">Your Account</h1>
        </div>
        <div className="flex justify-center flex-wrap grid md:grid-cols-2 lg:grid-cols-3 ">
                <Link href="./user/order"><div className="border-2 rounded-xl border-gray-300 mx-3 my-2 w-auto h-[103px] px-3 bg-[#EEF5FF] hover:bg-[#9EB8D9] hover:text-white hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                    <div className="flex items-center p-1">
                        <p className="text-6xl"><VscPackage/></p>
                        <p className="text-xl font-medium">Your Orders</p>
                    </div>
                    <p className="px-2">Track, return, or buy things again</p>
                </div></Link>
                <Link href="./SignIn"><div className="border-2 rounded-xl border-gray-300 mx-3 my-2 w-auto h-[103px] px-3 bg-[#EEF5FF] hover:bg-[#9EB8D9] hover:text-white hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                    <div className="flex items-center p-1">
                        <p className="text-4xl"><MdOutlineSecurity /></p>
                        <p className="text-xl font-medium">Login and Security</p>
                    </div>
                    <p className="px-2">Edit login, name and mobile number</p>
                </div></Link>
                <div className="border-2 rounded-xl border-gray-300 mx-3 my-2 w-auto h-[103px] px-3 bg-[#EEF5FF] hover:bg-[#9EB8D9] hover:text-white hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                    <div className="flex items-center p-1">
                        <p className="text-4xl"><BsCreditCard /></p>
                        <p className="text-xl font-medium">Payment Options</p>
                    </div>
                    <p className="px-2">Edit or add payment methods</p>
                </div>
                
                <Link href="./user/Addresses"><div className="border-2 rounded-xl border-gray-300 mx-3 my-5 w-auto h-[103px] px-3 bg-[#EEF5FF] hover:bg-[#9EB8D9] hover:text-white hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                    <div className="flex items-center p-1">
                        <p className="text-4xl"><IoLocationSharp /></p>
                        <p className="text-xl font-medium">Your Addresses</p>
                    </div>
                    <p>Edit addresses for orders and gifts</p>
                </div></Link>
                <div className="border-2 rounded-xl border-gray-300 mx-3 my-5 w-auto h-[103px] px-3 bg-[#EEF5FF] hover:bg-[#9EB8D9] hover:text-white hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                    <div className="flex items-center p-1">
                    <p className="text-4xl"><FaUser /></p>
                    <p className="text-xl font-medium">Edit Your Profile</p>
                    </div>
                    <p className="px-2">Edit your profile details.</p>
                </div>
                <Link href="./user/ContactUs"> <div className="border-2 rounded-xl border-gray-300 mx-3 my-5 w-auto h-[103px] px-3 bg-[#EEF5FF] hover:bg-[#9EB8D9] hover:text-white hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                    <div className="flex items-center p-1">
                        <p className="text-4xl"><RiCustomerService2Fill /></p>
                        <p className="text-xl font-medium">Contact Us</p>
                    </div>
                    <p className="px-2">Get quick customer support</p>
                </div></Link>
            
        </div>
        </div>
        <div>
            <Dd />
        </div>
    </div>
  )
}

export default page
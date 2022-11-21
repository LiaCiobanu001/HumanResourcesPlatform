import { Topbar, Sidebar } from ".";
const { default: Head } = require("next/head");
import { useState } from "react";
import {BsArrowLeftShort} from "react-icons/bs";
import {HiOutlineMenu} from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import extramusLogoWhite from "../../public/extramusLogoWhite.png";
import { ArrowDropDown, NavigateBefore, NotificationsNoneOutlined } from "@mui/icons-material";
import Popup from "reactjs-popup"
import Notification from "../Feed/Notification";

 


const Layout = ({ children }) => {
	const [open, setOpen] =useState(true);
	const Notif =() =>
	{
		<Link href="/#">
				
		</Link>
	}
	return (
		<>
			<Head>
				<title>HR Project</title>
			</Head>

			<main>
			<div className="flex sticky top-0 z-50 ">
					{/* TopBar */}
		<div className="flex h-16 w-screen bg-[#0B3768] justify-between py-3 px-4 sm:w-screen">
			{/* Extramus Logo White*/}
			<Link href="/dashboard">
				<div className="flex items-center ml-5 hover:cursor-pointer  sm:hidden  ">
                    
					<Image
						src={extramusLogoWhite}
						alt="loginImg"
						width="80"
						height="40"
					/>
					

				</div>

			</Link>		
			<HiOutlineMenu className="md:hidden lg:hidden text-white text-3xl"
			onClick={()=>setOpen(!open)}
			/>		
			{/* Right Side */}
			<div className="flex items-center justify-between text-white gap-3 mr-5">
				<Popup contentStyle={{ borderRadius:"30px",margin:"14px"}} trigger={<button className="cursor-poiner relative scale-100 hover:scale-125">
					<NotificationsNoneOutlined />
					<span className="absolute rounded-full bg-red-600 w-[15px] h-[15px] top-[-1px] right-[-1px] flex items-center justify-center text-xs">
						2
					</span>
				</button>} position="bottom center">
					<div className="">
						{/* <h2 className="border-4 rounded-xl text-black font-bold text-xl bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-50 text-semibold p-2">Notifications:</h2> */}
						{/* <div className="h-0.5 bg-[gray]/75"></div> */}
						<Notification />
						<Notification />
						<Notification />
					</div>

				</Popup>
				<p className="text-2xl"> │ </p>
				<Link href="/#">
					<p className="cursor-pointer ">Ario Anindito</p>
				</Link>

				<Popup contentStyle={{ marginTop:"10px"}} trigger={<button><ArrowDropDown className="cursor-pointer text-4xl" /></button>} position="bottom center" >
					<div className="bg-[#0b3768] font-semibold rounded-md p-2 text-white transition ease-in-out delay-150 hover:text-[#0b3768] hover:bg-gray-100 hover:font-bold hover:-translate-y-0.5 hover:scale-90 hover: duration-200 ...">
						<Link href="/login">Log Out</Link>
					</div>
				</Popup>
				
			</div>
		</div>
				</div>
				{/* Main Container */}
				<div className="sm:static relative flex text-[#4F4F4F] ">
					{/* Left Side */}
					
					<div className={`h-full sticky top-16 drop-shadow-xl w-48 sm:w-40 bg-white ${open ? "sm:fixed" :"sm:hidden"} ` }>     
						<Sidebar />
					</div> 
			
					{/* Right Side */}
					<div className="flex flex-[5] p-4 bg-gradient-to-r from-sky-50 to-purple-50">
						{children}
					</div>
				</div>
			</main>
		</>
	);
};

export default Layout;

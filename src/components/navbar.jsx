"use client"
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion} from "framer-motion";

const menuLinks = [
        {url: "/projects", title: "Projects"},
        {url: "/contact", title: "Contact"},
        
    ]

export default function Navbar(){

    const [open, setOpen] = useState(false)

    // MENU VARIANTS
    const topVariant={
        closed: {rotate:0},
        open: {rotate: 45, backgroundColor: "rgb(255,255,255)"}
    }

    const centerVariant={
        closed: {opacity:1},
        open: {opacity: 0}
    }

    const bottomVariant={
        closed: {rotate:0},
        open: {rotate:-45, backgroundColor: "rgb(255,255,255)"}
    }

     return (
        <div className='h-full flex items-center justify-between px-8 md:px-12 lg:px-12 xl:px-16 pt-8'> 
       
       {/* LOGO */}
        <div>
            <Link href="/" className="flex flex-col font-extrabold text-xl text-blue-50 hover:text-orange-400">
                <span className="">
                    JIM
                </span>
                    
                <span className=" ">
                MY
                </span>
            </Link>

        </div>

        <div className="hidden md:flex gap-10 text-gray-400 uppercase">
            {menuLinks.map((link)=>(
                <NavLink link={link} key={link.title}/>
            ))}

        </div>

        {/*MENU*/}
        <div className="md:hidden ">
            {/* MENU BUTTON */}
            <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={(()=>setOpen(!open))}>
                <motion.div variants={topVariant} animate={open ? "opened":"closed"} className="w-10 h-1 bg-gray-400 rounded"></motion.div>
                <motion.div variants={centerVariant} animate={open ? "opened":"closed"} className="w-10 h-1 bg-gray-400 rounded"></motion.div>
                <motion.div variants={bottomVariant} animate={open ? "opened":"closed"} className="w-10 h-1 bg-gray-400 rounded"></motion.div>
            </button>

            {/* MENU LIST */}
            {
            open &&
            <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 z-40 text-4xl">
                {menuLinks.map(link=>(
                    <Link href={link.url} key={link.title}>{link.title}</Link>
                ))}
            </div>
            }
        </div>
        </div>
    )
}
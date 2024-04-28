"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({link}){
    const pathName = usePathname()

    return (
        <Link className={`rounded p-1 ${link.url == pathName && " bg-slate-500 text-black" }`} href={link.url}>{link.title}
        </Link>
    )
}
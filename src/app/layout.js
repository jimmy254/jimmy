import { Inter } from "next/font/google";
import Navbar from "../components/navbar";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jimmy",
  description: "Hi, I am Jimmy",
};

export default function RootLayout({ children }) {
  const date = new Date().getFullYear()
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen md:bg-gradient-to-br bg-gradient-to-b from-gray-800 to-gray-900"> 
          <div className=" h-24">
            <Navbar/>
          </div>
          <div className="h-[calc(100vh-6rem)] w-screen flex px-8 md:px-10 lg:px-12  ">
            {/* LEFT SIDEBAR */}
            <div className="w-12 md:w-20 lg:w-24 flex justify-center items-center">
              {/* SOCIALS ICONS */}
              <div className="absolute bottom-16 flex flex-col gap-4">                
                <Link className="opacity-30 hover:opacity-80" href="/">
                <Image src="/telegram.svg" alt="" width={20} height={20}/>
              </Link>
              <Link className="opacity-30 hover:opacity-80" href="/">
                <Image src="/github.svg" alt="" width={16} height={16}/>
                </Link>
              <Link className="opacity-30 hover:opacity-80" href="/">
                <Image src="/linkedin.svg" width={16} height={16}/>
                </Link>
            </div>
            </div>
            


            {/* MAIN CONTAINER */}
            <div className="w-full flex justify-center items-center pb-24">
              {children}
            </div>


            {/* RIGHT SIDEBAR */}
            <div className="w-16 md:w-16 lg:w-24 ">
              <div className="absolute bottom-24 w-24 rotate-90 flex justify-center items-center">
                <span className=" font-extralight opacity-30 text-sm ">
                ©{date} ------
                </span>
            </div>
            </div>
            
          </div>
          

        </div>
       
        </body>
    </html>
  );
}

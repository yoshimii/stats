import React from "react";
import Image from "next/image";
import { Permanent_Marker } from 'next/font/google'

const permanentMarker = Permanent_Marker({ subsets: ['latin'], weight: '400' })


const Header = () => {
    return (
        <header className="flex flex-col content-center max-w-full bg-black">
            <nav className="flex h-14 px-4 w-11/12 xl:max-w-7xl self-center"> 
                <div className="content-center max-w-60">
                    <Image alt="Texas Roller Derby Logo" src="/logo.svg" width="190" height="35" className="w-44 md:w-48 xl:w-60"/>
                </div>
            </nav>
            <div className="flex flex-col relative text-white">
            <Image alt="decorative grunge texture" src="/top.png" layout="responsive" width="234" height="43" className="absolute z-40"/>
            <div className="bg-[url('/helmets.jpg')] bg-cover h-48 md:h-56 lg:h-96 relative bg-center"></div>
            <Image alt="decorative grunge texture" src="/bottom.png" layout="responsive" width="234" height="43" className="absolute -bottom-px"/>
            <p className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ${permanentMarker.className} text-5xl md:text-7xl lg:text-9xl`}>Statistics</p>
            </div>
        </header>

    )
}

export default Header
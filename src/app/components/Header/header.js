import React from "react";
import Image from "next/image";
import { Permanent_Marker } from 'next/font/google'

const permanentMarker = Permanent_Marker({ subsets: ['latin'], weight: '400' })


const Header = () => {
    return (
        <header className="flex flex-col content-center">
            <nav className="flex h-20 px-4 w-full bg-black"> 
                <div className="content-center max-w-[234px]">
                    <Image alt="Texas Roller Derby Logo" src="/logo.svg" layout="responsive" width="234" height="43"/>
                </div>
            </nav>
            <div className="flex flex-col relative text-white">
            <Image alt="banner image of skater helmets with a red filter overlay" src="/top.png" layout="responsive" width="234" height="43" className="absolute"/>
            <Image alt="banner image of skater helmets with a red filter overlay" src="/helmets.jpg" layout="responsive" width="1400" height="43" className="relative"/>
            <Image alt="banner image of skater helmets with a red filter overlay" src="/bottom.png" layout="responsive" width="234" height="43" className="absolute -bottom-px"/>
            <p className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ${permanentMarker.className} text-9xl`}>Statistics</p>
            </div>
        </header>

    )
}

export default Header
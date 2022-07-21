// import { useState } from "react"
import { GiLockedChest } from "react-icons/gi"
import { SiFacebook, SiDiscord, SiTwitter, SiTelegram } from "react-icons/si"
import { IoAddCircleSharp } from "react-icons/io5"
import Link from "next/link"

export default function Sidebar() {
    // const { toggleCollapse, setToggleCollapse } = useState(false)

    return (
        <div className="bg-black flex justify-between flex-col w-60 border-r-2 border-dashed h-full">
            <div className="p-2 flex-1">
                <div className="p-1 mb-10">
                    <span className="text-stone-500 font-bold text-lg">COMMUNITY</span>
                    <ul>
                        <li className="cursor-pointer">
                            <Link href="/">
                                <div className=" p-2 text-base text-white hover:bg-sky-700 rounded-lg">
                                    <span className="mr-2">
                                        <GiLockedChest className="inline"></GiLockedChest>
                                    </span>
                                    Pool
                                </div>
                            </Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link href="/pool/create-pool">
                                <div className=" p-2 text-base text-white hover:bg-sky-700 rounded-lg">
                                    <span className="mr-2">
                                        <IoAddCircleSharp className="inline  text-white"></IoAddCircleSharp>
                                    </span>
                                    Create Pool
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="p-1">
                    <span className="text-stone-500 font-bold text-lg">INFORMATION</span>
                    <ul>
                        <li className="cursor-pointer">
                            <Link href="/faq">
                                <div className=" p-2 text-base hover:bg-sky-700 text-white rounded-lg">
                                    <span className="mr-2">
                                        <GiLockedChest className="inline"></GiLockedChest>
                                    </span>
                                    FAQ
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-row justify-evenly p-8 text-white text-2xl border-t-2 border-dashed">
                <div>
                    <SiFacebook></SiFacebook>
                </div>
                <div>
                    <SiDiscord></SiDiscord>
                </div>
                <div>
                    <SiTwitter></SiTwitter>
                </div>
                <div>
                    <SiTelegram></SiTelegram>
                </div>
            </div>
        </div>
    )
}

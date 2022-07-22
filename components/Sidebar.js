// import { useState } from "react"
import { SiFacebook, SiDiscord, SiTwitter, SiTelegram } from "react-icons/si"
import { classNames } from "../utilities/Utils"
import { RiFundsFill, RiQuestionFill, RiAddCircleFill } from "react-icons/ri"
import Link from "next/link"

export default function Sidebar() {
    //CLASSES
    const classSocialIcons = classNames(
        "h-6 w-6  text-red-700 hover:text-red-600 transition-all duration-500"
    )

    const classListItem = classNames("cursor-pointer")
    const classSubHeader = classNames("text-red-700  font-bold text-sm w-full")
    const classLinkItem = classNames(
        "flex items-center align-middle p-2 text-red-700 rounded-lg hover:bg-amber-200 hover:text-red-600 transition-all duration-200 font-bold text-lg"
    )
    const classIconItem = classNames("mr-1 h-6 w-6")
    const classSubHeaderDiv = classNames("border-b-2 pb-2 mb-2 border-red-700")

    return (
        <div className="bg-amber-400 flex justify-between flex-col w-60  h-full border-r-2 border-dotted border-red-700 ">
            <div className="p-4 flex-1 flex flex-col gap-y-20">
                <div className="">
                    <div className={classSubHeaderDiv}>
                        <span className={classSubHeader}>COMMUNITY</span>
                    </div>
                    <ul>
                        <li className={classListItem}>
                            <Link href="/">
                                <span className={classLinkItem}>
                                    <RiFundsFill className={classIconItem} />
                                    Pool
                                </span>
                            </Link>
                        </li>
                        <li className={classListItem}>
                            <Link href="/pool/create-pool">
                                <span className={classLinkItem}>
                                    <RiAddCircleFill className={classIconItem} />
                                    Create Pool
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <div className={classSubHeaderDiv}>
                        <span className={classSubHeader}>INFORMATION</span>
                    </div>
                    <ul>
                        <li className="cursor-pointer">
                            <Link href="/faq">
                                <span className={classLinkItem}>
                                    <RiQuestionFill className={classIconItem} />
                                    FAQ
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-row justify-evenly p-6 border-t-2 border-dotted  border-red-700">
                <a target="_blank" href="https://twitter.com/" rel="noopener noreferrer">
                    <SiFacebook className={classSocialIcons}></SiFacebook>
                </a>
                <a target="_blank" href="https://twitter.com/" rel="noopener noreferrer">
                    <SiDiscord className={classSocialIcons}></SiDiscord>
                </a>
                <a target="_blank" href="https://twitter.com/" rel="noopener noreferrer">
                    <SiTwitter className={classSocialIcons}></SiTwitter>
                </a>
                <a target="_blank" href="https://twitter.com/" rel="noopener noreferrer">
                    <SiTelegram className={classSocialIcons}></SiTelegram>
                </a>
            </div>
        </div>
    )
}

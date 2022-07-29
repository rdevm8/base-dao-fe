// import { useState } from "react"
import { SiFacebook, SiDiscord, SiTwitter, SiTelegram } from "react-icons/si"
import { classNames } from "../utilities/Utils"
import { RiFundsFill, RiQuestionFill, RiAddCircleFill } from "react-icons/ri"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Sidebar() {
    //CLASSES
    const classSocialIcons = classNames(
        "h-6 w-6 text-white hover:text-accent transition-all duration-primary"
    )

    const classListItem = classNames("cursor-pointer pb-1")
    const classSubHeader = classNames("text-stone-500 font-bold text-sm w-full")
    const classLinkItem = classNames(
        "flex items-center align-middle text-content p-2 rounded-lg hover:bg-accent hover:text-black transition-all duration-primary font-bold text-md"
    )
    const classIconItem = classNames("mr-1 text-lg")
    const classSubHeaderDiv = classNames("border-b-2 pb-2 mb-2 border-accent")

    const router = useRouter()

    return (
        <div className="bg-secondary justify-between flex-col h-full border-r-2 border-dotted border-accent flex w-60">
            <div className="border-b-2 border-dotted border-accent items-center align-middle text-center h-20 flex justify-center">
                <Link href="/">
                    <a className=" text-3xl font-bold text-content">DAO</a>
                </Link>
            </div>
            <div className="p-4 flex-1 flex flex-col gap-y-20">
                <div className="">
                    <div className={classSubHeaderDiv}>
                        <span className={classSubHeader}>COMMUNITY</span>
                    </div>
                    <ul>
                        <li className={classListItem}>
                            <Link href="/">
                                <span
                                    className={`${classLinkItem} ${
                                        router.pathname === "/"
                                            ? "bg-accent text-black"
                                            : "text-content"
                                    }`}
                                    aria-label="Link"
                                >
                                    <RiFundsFill className={classIconItem} />
                                    Pool
                                </span>
                            </Link>
                        </li>
                        <li className={classListItem}>
                            <Link href="/pool/create-pool">
                                <span
                                    className={`${classLinkItem} ${
                                        router.pathname === "/pool/create-pool"
                                            ? "bg-accent text-black"
                                            : "text-content"
                                    }`}
                                    aria-label="Link"
                                >
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
                                <span
                                    className={`${classLinkItem} ${
                                        router.pathname === "/faq"
                                            ? " text-black bg-accent"
                                            : "text-content"
                                    }`}
                                    aria-label="Link"
                                >
                                    <RiQuestionFill className={classIconItem} />
                                    FAQ
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-row justify-evenly p-6 border-t-2 border-dotted  border-accent">
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

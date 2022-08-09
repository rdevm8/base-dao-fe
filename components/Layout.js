import React from "react"
import Head from "next/head"
import Header from "./Header"
import Sidebar from "./Sidebar"
import { GiHamburgerMenu } from "react-icons/gi"
import { useEffect, useRef, useState } from "react"

export default function Layout({ title, children, createMode }) {
    const ref = useRef()
    const [isShowing, setIsShowing] = useState(false)
    const toggle = () => {
        setIsShowing(!isShowing)
    }

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            // If the menu is open and the clicked target is not within the menu,

            // then close the menu

            if (isShowing && ref.current && !ref.current.contains(e.target)) {
                setIsShowing(false)
            }
            // else if (e.target.attributes["aria-label"]) {
            //     if (e.target.attributes["aria-label"].value == "Link") {
            //         setIsShowing(false)
            //     }
            // }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener

            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isShowing])

    return (
        <>
            <Head>
                <title>{title ? title : "Base DAO Application"}</title>
                <meta name="description" content="Base DAO Application" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-row h-screen ">
                <div className=" " ref={ref}>
                    <aside
                        className={`flex-col h-screen z-10 sm:flex ${
                            isShowing ? "flex absolute" : "hidden relative"
                        }`}
                    >
                        <Sidebar />
                    </aside>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex flex-row align-middle items-center justify-center bg-secondary ">
                        <div className="p-4 text-content sm:hidden border-b-2 border-dotted  border-accent h-20 flex align-middle items-center justify-center ">
                            <GiHamburgerMenu
                                className="w-5 h-5 cursor-pointer"
                                onClick={() => toggle()}
                            ></GiHamburgerMenu>
                        </div>
                        <div className="flex-1">
                            <Header></Header>
                        </div>
                    </div>
                    <main className=" bg-background flex flex-1 p-4 overflow-y-auto flex-col  text-gray-900 ">
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}

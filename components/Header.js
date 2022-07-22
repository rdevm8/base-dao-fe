import Link from "next/link"
import { useEffect } from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { useMoralis } from "react-moralis"
import { GoGear } from "react-icons/go"
import { classNames } from "../utilities/Utils"

export default function Header() {
    const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading } =
        useMoralis()

    useEffect(() => {
        if (isWeb3Enabled) return
        if (typeof window !== "undefined") {
            if (window.localStorage.getItem("connected")) {
                enableWeb3()
            }
        }
    }, [isWeb3Enabled])

    useEffect(() => {
        Moralis.onAccountChanged((account) => {
            console.log(`Account changed to ${account}`)
            if (account == null) {
                window.localStorage.removeItem("connected")
                deactivateWeb3()
            }
        })
    }, [])

    return (
        <nav className="flex items-center justify-between shadow-lg bg-amber-400 sticky top-0 h-full border-b-2 border-dotted  border-red-700">
            <div className=" w-60 p-4 border-r-2 border-dotted border-red-700 items-center align-middle text-center">
                <Link href="/">
                    <a className=" text-3xl font-bold">POOLING</a>
                </Link>
            </div>

            <div className="flex flex-row p-4 gap-x-2">
                {account ? (
                    <div className="p-2 text-white rounded-lg bg-gradient-to-r from-red-900 via-red-700 to-red-500 hover:opacity-80 flex items-center align-middle">
                        <button
                            onClick={async () => {
                                deactivateWeb3()
                                window.localStorage.removeItem("connected")
                            }}
                            className=" w-36 text-center"
                        >
                            <span className="items-center justify-center">
                                {account.slice(0, 6)}...{account.slice(length - 4)}
                            </span>
                        </button>
                    </div>
                ) : (
                    <div className="p-2 text-white rounded-lg bg-gradient-to-r from-red-900 via-red-700 to-red-500 hover:opacity-80 flex items-center align-middle ">
                        <button
                            onClick={async () => {
                                await enableWeb3()
                                if (typeof window !== "undefined") {
                                    window.localStorage.setItem("connected", "injected")
                                }
                            }}
                            disabled={isWeb3EnableLoading}
                            className=" w-36"
                        >
                            <span className="flex items-center justify-center">
                                <img src="metamask.svg" className="w-5 h-5 mr-1"></img>
                                Connect Wallet
                            </span>
                        </button>
                    </div>
                )}
                <div className="p-2 text-base hover:opacity-80  bg-red-600 text-white rounded-lg flex items-center align-middle hover:bg-red-600">
                    <button>
                        <span className="flex items-center align-middle">
                            <GoGear className="w-5 h-5" />
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

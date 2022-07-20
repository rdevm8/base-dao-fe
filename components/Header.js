import Link from "next/link"
import { useEffect } from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { useMoralis } from "react-moralis"
import { GoGear } from "react-icons/go"

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
        <nav className="flex items-center px-4 py-2 justify-between shadow-lg bg-purple-400 sticky top-0 h-full">
            <Link href="/">
                <a className=" text-lg font-bold">WICKS CREW DAO</a>
            </Link>
            <div className="flex flex-row">
                {account ? (
                    <div className="p-2 mr-2 text-base hover:bg-sky-700 bg-sky-800 text-white rounded-lg">
                        <button
                            onClick={async () => {
                                deactivateWeb3()
                                window.localStorage.removeItem("connected")
                            }}
                        >
                            {account.slice(0, 6)}...{account.slice(length - 4)}
                        </button>
                    </div>
                ) : (
                    <div className="p-2 mr-2 text-base hover:bg-sky-700 bg-sky-800 text-white rounded-lg">
                        <button
                            onClick={async () => {
                                await enableWeb3()
                                if (typeof window !== "undefined") {
                                    window.localStorage.setItem("connected", "injected")
                                }
                            }}
                            disabled={isWeb3EnableLoading}
                        >
                            Connect Wallet
                        </button>
                    </div>
                )}
                <div className="p-2 text-base hover:bg-sky-700 bg-sky-800 text-white rounded-lg">
                    <button>
                        <GoGear />
                    </button>
                </div>
            </div>
        </nav>
    )
}

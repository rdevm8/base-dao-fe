import { useRouter } from "next/router"
import { StatusPill } from "../../components/table/StatusPill"
import {
    FaUserCircle,
    FaEthereum,
    FaPeopleArrows,
    FaInfoCircle,
    FaMoneyBill,
    FaArrowLeft,
} from "react-icons/fa"

export default function Pool() {
    const router = useRouter()
    const { pool } = router.query

    //MOCK DATA
    const poolId = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
    const submitterId = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"

    return (
        <>
            <div className="flex flex-row text-content gap-x-4">
                <div className="flex flex-col w-9/12 p-4 bg-secondary rounded-lg gap-y-4">
                    <div className="flex flex-row">
                        <div className="p-2 bg-secondary text-content rounded-lg flex items-center align-middle hover:text-black hover:bg-accent border border-accent transition-all duration-primary">
                            <button>
                                <span className="flex items-center align-middle">
                                    <FaArrowLeft className="w-5 h-5 inline mr-2" />
                                    Back
                                </span>
                            </button>
                        </div>
                    </div>

                    <div>
                        <span className="text-3xl font-bold">Pool Fund {pool}</span>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div>
                            <span>{StatusPill("Closed")}</span>
                            <span>4 ETH</span>
                        </div>
                        <div>
                            <span>Share</span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg">Description</span>
                        <span>Description Here</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg">Funders</span>
                        <span>Funders Here</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg">Transactions</span>
                        <span>Transactions Here</span>
                    </div>
                </div>
                <div className="flex flex-col flex-1 gap-y-4">
                    <div className=" bg-secondary rounded-lg p-4">
                        <div className="flex items-center align-middle text-md font-bold border-b-2 pb-2 mb-2 border-accent">
                            <FaInfoCircle />
                            <span className="ml-2">INFORMATION</span>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-subcontent font-bold text-sm">Pool ID</div>
                            <div className="flex items-center align-middle text-sm font-bold">
                                <span className="ml-2">
                                    {poolId.slice(0, 6)}
                                    ...
                                    {poolId.slice(poolId.length - 4)}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center align-middle">
                            <div className="text-subcontent font-bold text-sm">Submitter</div>
                            <div className="flex items-center align-middle text-sm font-bold">
                                <FaUserCircle />
                                <span className="ml-2">
                                    {submitterId.slice(0, 6)}
                                    ...
                                    {submitterId.slice(submitterId.length - 4)}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-subcontent font-bold text-sm">Date Created</div>
                            <div className="flex items-center align-middle text-sm font-bold">
                                July 30, 1992
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2 bg-secondary rounded-lg p-4">
                        <div className="flex items-center align-middle text-md font-bold border-b-2 pb-2 border-accent">
                            <FaMoneyBill />
                            <span className="ml-2">TOTAL FUNDS</span>
                        </div>
                        <div className="flex flex-col justify-between gap-y-2">
                            <p>Capital</p>
                            <div className="bg-green-700 rounded-xl h-3"></div>
                        </div>
                        <div className="flex flex-col justify-between gap-y-2">
                            <p>Returne</p>
                            <div className="bg-red-700 rounded-xl h-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

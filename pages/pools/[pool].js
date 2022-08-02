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
import Link from "next/link"

export default function Pool() {
    const router = useRouter()
    const { pool } = router.query

    //MOCK DATA
    const poolId = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
    const submitterId = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
    const fundersCount = 50
    const activitiesCount = 1

    return (
        <div className=" grid grid-rows-1 lg:grid-cols-8 text-content gap-4">
            <div className="lg:col-span-6 p-4 bg-secondary rounded-lg ">
                <div className="flex flex-col gap-y-4">
                    <div className="flex flex-row">
                        <div className="p-2 bg-secondary text-content rounded-lg flex items-center align-middle hover:text-black hover:bg-accent border border-accent transition-all duration-primary">
                            <Link href="/">
                                <button>
                                    <span className="flex items-center align-middle text-md">
                                        <FaArrowLeft />
                                        <span className="ml-2">Back</span>
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <span className="text-3xl font-bold">Pool Fund {pool}</span>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row gap-x-2">
                            <span>{StatusPill("Closed")}</span>
                            <div className="flex items-center align-middle">
                                <FaEthereum />
                                <span className="text-content font-semibold text-md ml-2">4</span>
                            </div>
                        </div>
                        <div>
                            <span>Share</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2 text-justify">
                        <span className="text-xl font-bold border-b-2 pb-2 border-accent">
                            Description
                        </span>
                        <span>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                            et quas molestias excepturi sint occaecati cupiditate non provident,
                            similique sunt in culpa qui officia deserunt mollitia animi, id est
                            laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
                            distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                            cumque nihil impedit quo minus id quod maxime placeat facere possimus,
                            omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
                            quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
                            ut et voluptates repudiandae sint et molestiae non recusandae. Itaque
                            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
                            voluptatibus maiores alias consequatur aut perferendis doloribus
                            asperiores repellat
                        </span>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <span className="text-xl font-bold  border-b-2 pb-2 border-accent">
                            Activity Logs
                        </span>
                        <div className="overflow-y-auto max-h-48">
                            <table className=" p-4 border border-collapse shadow-lg w-full">
                                <thead className=" bg-accent text-black">
                                    <tr>
                                        <th className="border py-2">Description</th>
                                        <th className="border py-2">Time Stamp</th>
                                        <th className="border py-2">Executed by</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {[...Array(activitiesCount)].map((value, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className="border py-2">Added Pool</td>
                                                <td className="border py-2">
                                                    July 30, 1992 12:00 PM UTC
                                                </td>
                                                <td className="border py-2">
                                                    <div className="flex items-center align-middle text-md justify-center">
                                                        <FaUserCircle />
                                                        <span className="ml-2">
                                                            {submitterId.slice(0, 6)}
                                                            ...
                                                            {submitterId.slice(
                                                                submitterId.length - 4
                                                            )}
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" lg:col-span-2">
                <div className="flex flex-col flex-1 gap-y-4">
                    <div className=" bg-secondary rounded-lg p-4">
                        <div className="flex items-center align-middle text-md font-bold border-b-2 pb-2 mb-2 border-accent">
                            <FaInfoCircle />
                            <span className="ml-2">INFORMATION</span>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-content font-semibold text-sm">Pool ID</div>
                            <div className="flex items-center align-middle text-sm font-bold">
                                <span className="ml-2">
                                    {poolId.slice(0, 6)}
                                    ...
                                    {poolId.slice(poolId.length - 4)}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center align-middle">
                            <div className="text-content font-semibold text-sm">Submitter</div>
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
                            <div className="text-content font-semibold text-sm">Date Created</div>
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
                            <p>Returned</p>
                            <div className="bg-red-700 rounded-xl h-3"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-2 bg-secondary rounded-lg p-4">
                        <div className="flex items-center align-middle text-md font-bold border-b-2 pb-2 border-accent">
                            <FaPeopleArrows />
                            <span className="ml-2">FUNDERS</span>
                        </div>
                        <div className="flex flex-col justify-between overflow-y-auto flex-1 max-h-48">
                            <table>
                                <tbody>
                                    {[...Array(fundersCount)].map((value, index) => {
                                        return (
                                            <tr className="text-center mb-10" key={index}>
                                                <td>
                                                    <div className="flex items-center align-middle text-md mb-2">
                                                        <FaUserCircle />
                                                        <span className="ml-2">
                                                            {submitterId.slice(0, 6)}
                                                            ...
                                                            {submitterId.slice(
                                                                submitterId.length - 4
                                                            )}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex items-center align-middle text-md mb-2">
                                                        <FaEthereum />
                                                        <span className="ml-2">{index + 1}</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

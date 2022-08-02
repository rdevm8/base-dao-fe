import { FaPlus } from "react-icons/fa"
import { RiFundsFill } from "react-icons/ri"
import { useState } from "react"
import CreatePool from "./create-pool"

export default function MyPools() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex flex-1 text-content">
            <div className="flex flex-1 flex-col gap-y-4">
                <div className="flex flex-row justify-between">
                    <h1 className="text-4xl font-bold text-content">MY POOLS</h1>
                    <div className="p-2 bg-secondary text-content rounded-lg flex items-center align-middle hover:text-black hover:bg-accent border border-accent transition-all duration-primary">
                        <button onClick={() => setIsOpen(true)}>
                            <span className="flex items-center align-middle text-md">
                                <FaPlus />
                                <span className="ml-2">Create Pool</span>
                            </span>
                        </button>
                    </div>
                </div>
                {/* <div className="flex-1 items-center justify-center align-middle text-center">1</div> */}
                <div className="flex flex-row text-center">
                    <div className="flex-1 bg-secondary rounded-lg p-10">
                        <span className="flex items-center justify-center align-middle text-md">
                            <RiFundsFill className="h-36 w-36" />
                        </span>

                        <p className="text-lg font-bold">No created pools found</p>
                        <p className="text-subcontent text-md">Submit your first pool</p>
                    </div>
                </div>
                <CreatePool open={isOpen} onClose={() => setIsOpen(false)}></CreatePool>
            </div>
        </div>
    )
}

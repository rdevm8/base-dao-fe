import { MdClose, MdCheck } from "react-icons/md"

export default function CreatePool({ open, children, onClose }) {
    if (!open) return null
    return (
        <>
            <div className="flex fixed inset-0 bg-black opacity-70 z-10"></div>
            <div className="flex flex-col fixed inset-0 bg-transparent z-10 text-content justify-center align-middle p-4">
                <div className="flex justify-center">
                    <div className="bg-secondary rounded-lg w-1/2 flex flex-col gap-y-4">
                        <div className="flex flex-row justify-between bg-accent p-4 rounded-tl-lg rounded-tr-lg">
                            <h1 className=" font-bold text-black text-xl">CREATE POOL</h1>
                            <div className="  text-black flex items-center align-middle transition-all duration-primary">
                                <button onClick={onClose}>
                                    <span className="flex items-center align-middle text-md">
                                        <MdClose />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2 p-4">
                            <fieldset className=" border-2 border-content rounded-lg items-center px-3">
                                <legend className=" font-normal text-content">
                                    <span>Title</span>
                                </legend>
                                <input
                                    type="text"
                                    className="block w-full bg-transparent border-none outline-0 hover:outline-0 active:outline-0 focus:ring-0 text-content  mb-2 placeholder:text-stone-500"
                                    //value={value || ""}
                                    onChange={(e) => {
                                        setValue(e.target.value)
                                        onChange(e.target.value)
                                    }}
                                    placeholder={`Pool Title`}
                                />
                            </fieldset>
                            <fieldset className=" border-2 border-content rounded-lg items-center px-3">
                                <legend className=" font-normal text-content">
                                    <span>Description</span>
                                </legend>
                                <textarea
                                    rows={5}
                                    type="text"
                                    className="block w-full bg-transparent border-none outline-0 hover:outline-0 active:outline-0 focus:ring-0 text-content  mb-2 placeholder:text-stone-500"
                                    //value={value || ""}
                                    onChange={(e) => {
                                        setValue(e.target.value)
                                        onChange(e.target.value)
                                    }}
                                    placeholder={`Short description of the pool to be created`}
                                />
                            </fieldset>
                            <fieldset className=" border-2 border-content rounded-lg items-center px-3">
                                <legend className=" font-normal text-content">
                                    <span>Minimum Investment</span>
                                </legend>
                                <input
                                    type="number"
                                    step={"0.01"}
                                    className="block w-full bg-transparent border-none outline-0 hover:outline-0 active:outline-0 focus:ring-0 text-content  mb-2 placeholder:text-stone-500"
                                    //value={value || ""}
                                    onChange={(e) => {
                                        setValue(e.target.value)
                                        onChange(e.target.value)
                                    }}
                                    placeholder={`ETH`}
                                />
                            </fieldset>
                        </div>
                        <div className="px-4">
                            <div className="border border-dotted border-accent"></div>
                        </div>
                        <div className="flex flex-row gap-x-4 justify-between px-4 pb-4">
                            <button
                                onClick={onClose}
                                className="p-2 bg-red-700 text-content rounded-lg flex items-center align-middle hover:opacity-70 border border-red-700 transition-all duration-primary"
                            >
                                <span className="flex items-center align-middle text-md">
                                    <MdClose />
                                    <span className="ml-2">Clear</span>
                                </span>
                            </button>
                            <div className="p-2 bg-green-700 text-content rounded-lg flex items-center align-middle hover:opacity-70 border border-green-700 transition-all duration-primary">
                                <button onClick={onClose}>
                                    <span className="flex items-center align-middle text-md">
                                        <MdCheck />
                                        <span className="ml-2">Submit</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

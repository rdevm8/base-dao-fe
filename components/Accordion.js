import { useState } from "react"
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai"

export default function Accordion({ title, children, index, activeIndex }) {
    const [isShowing, setIsShowing] = useState(false)
    const toggle = () => {
        setIsShowing(!isShowing)
    }

    return (
        <div className="  text-white border  bg-black   hover:bg-red-900 transition-all duration-500">
            <div
                // onClick={() => handleSetIndex(index)}
                onClick={toggle}
                className="flex justify-between p-4 cursor-pointer"
            >
                <div className="flex text-white">
                    <div className=" font-bold">{title}</div>
                </div>
                <div
                    className={`flex items-center justify-center transition-transform duration-500 ${
                        isShowing ? " rotate-180" : "rotate-0"
                    }`}
                >
                    <AiFillCaretDown className="w-4 h-4 text-white" />
                </div>
            </div>
            <div
                className={` text-stone-500 transition-all overflow-hidden duration-500  ${
                    isShowing ? "max-h-max p-4" : "max-h-0"
                }`}
            >
                {children}
            </div>
            {/* <div className="transition-all duration-500" style={isShowing ? {} : { opacity: "0" }}>
                <div className=" p-4 bg-black  text-stone-500">{children}</div>
            </div> */}
        </div>
    )
}

import { useState } from "react"
import { AiFillCaretDown } from "react-icons/ai"

export default function Accordion({ title, children, index, activeIndex, setActiveIndex }) {
    const [isShowing, setIsShowing] = useState(false)
    const toggle = () => {
        setIsShowing(!isShowing)
    }

    const handleSetIndex = (index) => {
        activeIndex !== index ? setActiveIndex(index) : setActiveIndex(0)
    }

    return (
        <div className="   border ">
            <div
                // onClick={() => handleSetIndex(index)}
                onClick={() => handleSetIndex(index)}
                className={`flex justify-between p-4 cursor-pointer text-red-700 bg-amber-400   hover:bg-amber-300 hover:text-red-600 transition-all duration-500 ${
                    activeIndex === index ? " bg-amber-300" : "bg-amber-400"
                }`}
            >
                <div className="flex">
                    <div className=" font-bold">{title}</div>
                </div>
                <div
                    className={`flex items-center justify-center transition-transform duration-500 ${
                        activeIndex === index ? " rotate-180" : "rotate-0"
                    }`}
                >
                    <AiFillCaretDown className="w-4 h-4" />
                </div>
            </div>
            <div
                className={`  transition-all overflow-hidden duration-500 bg-amber-100  ${
                    activeIndex === index ? "max-h-max p-4" : "max-h-0"
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

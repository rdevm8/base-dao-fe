import { AiFillCaretDown } from "react-icons/ai"

export default function Accordion({ title, children, index, activeIndex, setActiveIndex }) {
    const handleSetIndex = (index) => {
        activeIndex !== index ? setActiveIndex(index) : setActiveIndex(0)
    }

    return (
        <div className="flex flex-col rounded-lg">
            <div
                onClick={() => handleSetIndex(index)}
                className={`flex justify-between p-4 cursor-pointer text-content bg-secondary hover:bg-accent hover:text-black transition-all duration-primary ${
                    activeIndex === index
                        ? " bg-accent text-black rounded-t-lg"
                        : "bg-secondary rounded-lg"
                }`}
            >
                <div className=" font-bold">{title}</div>
                <div
                    className={`flex items-center justify-center transition-transform duration-primary ${
                        activeIndex === index ? " rotate-180" : "rotate-0"
                    }`}
                >
                    <AiFillCaretDown className="w-4 h-4" />
                </div>
            </div>
            <div
                className={`  transition-all overflow-hidden duration-primary  bg-secondary flex-1  ${
                    activeIndex === index ? "max-h-max p-4 rounded-b-lg" : "max-h-0"
                }`}
            >
                {children}
            </div>
        </div>
    )
}

import Accordion from "../components/Accordion"
import React, { useState, useEffect } from "react"
import { TitleHeader } from "../utilities/Title"
import { RiContactsBookLine, RiQuestionFill } from "react-icons/ri"
import { GraphQlService } from "./services/GraphQlService"
import { getFaqQuery } from "./services/QueryService"
import { useQuery } from "@apollo/client"
import { Slide, toast } from "react-toastify"
import { RiErrorWarningFill, RiCheckDoubleFill } from "react-icons/ri"
import { FaHourglass } from "react-icons/fa"
import { Messages } from "../constants/Messages"

//import { faqs } from "../data/mocks/faqs"

export default function Faq() {
    // const _svc = GraphQlService(getFaqQuery(), setAccordions)

    // _svc.then((res) => {
    //     console.log(res.data.faqs)

    //     accordions = res.data.faqs.map((faq) => (
    //         <Accordion
    //             title={faq.question}
    //             index={faq.order}
    //             activeIndex={activeIndex}
    //             setActiveIndex={setActiveIndex}
    //             key={faq.id}
    //         >
    //             {faq.answer}
    //         </Accordion>
    //     ))
    // }).catch(() => {
    //     //setAccordions([])
    // })

    return (
        <div className="flex flex-col flex-1 text-content gap-y-4">
            <TitleHeader>Frequently Asked Questions</TitleHeader>
            {faqs()}
        </div>
    )
}

function faqs() {
    const [activeIndex, setActiveIndex] = useState(0)
    const { loading, error, data } = useQuery(getFaqQuery())
    const toastId = React.useRef(null)
    let accordions = []

    if (loading) {
        toastId.current = toast(
            <div className="flex items-center text-content align-middle">
                <span className="">{Messages.loading}</span>
            </div>,
            {
                autoClose: false,
                hideProgressBar: true,
                type: toast.TYPE.INFO,
                icon: <FaHourglass />,
                theme: "colored",
                transition: Slide,
                closeButton: false,
            }
        )
        return
    }

    if (error || data.faqs == null || data.faqs.length == 0) {
        if (error) {
            toast.update(toastId.current, {
                render: (
                    <div className="flex items-center text-content align-middle">
                        <span className="">{Messages.error}</span>
                    </div>
                ),
                icon: <RiErrorWarningFill className=" h-5 w-5" />,
                type: toast.TYPE.ERROR,
                autoClose: 3000,
                hideProgressBar: false,
                theme: "colored",
                transition: Slide,
                closeButton: true,
                pauseOnFocusLoss: false,
                pauseOnHover: false,
            })
        } else {
            toast.update(toastId.current, {
                render: (
                    <div className="flex items-center text-content align-middle">
                        <span className="">{Messages.success}</span>
                    </div>
                ),
                icon: <RiCheckDoubleFill className=" h-5 w-5" />,
                type: toast.TYPE.SUCCESS,
                autoClose: 3000,
                hideProgressBar: false,
                theme: "colored",
                transition: Slide,
                closeButton: true,
                pauseOnFocusLoss: false,
                pauseOnHover: false,
            })
        }

        return (
            <div className="flex flex-row text-center">
                <div className="flex-1 bg-secondary rounded-lg p-10">
                    <span className="flex items-center justify-center align-middle text-md">
                        <RiQuestionFill className="h-36 w-36" />
                    </span>

                    <p className="text-lg font-bold">No FAQs available</p>
                    <p className="text-subcontent text-md">
                        There are no frequently asked questions as of the moment
                    </p>
                </div>
            </div>
        )
    }
    accordions = data.faqs.map((faq) => (
        <Accordion
            title={faq.question}
            index={faq.order}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            key={faq.id}
        >
            {faq.answer}
        </Accordion>
    ))

    toast.update(toastId.current, {
        render: (
            <div className="flex items-center text-content align-middle">
                <span className="">{Messages.success}</span>
            </div>
        ),
        icon: <RiCheckDoubleFill className=" h-5 w-5" />,
        type: toast.TYPE.SUCCESS,
        autoClose: 3000,
        hideProgressBar: false,
        theme: "colored",
        transition: Slide,
        closeButton: true,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
    })

    return <div className="flex flex-col flex-1 text-justify gap-y-1">{accordions}</div>
}

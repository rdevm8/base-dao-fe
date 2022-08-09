import Accordion from "../components/Accordion"
import React, { useState } from "react"
import { faqs } from "../data/mocks/faqs"
import { TitleHeader } from "../utilities/Title"
import { useQuery, gql } from "@apollo/client"
import { NotifError } from "../utilities/Notifications"

import { toast, Slide } from "react-toastify"

const notifArgs = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Slide,
}

const QUERY = gql`
    query {
        faqs(where: { isDeleted: { eq: false } }, order: { order: ASC }) {
            id
            order
            answer
            question
            createdBy
        }
    }
`

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState(0)

    const { data, loading, error } = useQuery(QUERY)

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        console.log("here")
        console.error(error)
        toast.error("HELLO", notifArgs)
        //return () => NotifError("Hello")
    }

    const acccordions = faqs.map((faq) => (
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

    return (
        <div className="flex flex-col flex-1 text-content gap-y-4">
            <div>
                <TitleHeader>Frequently Asked Questions</TitleHeader>
            </div>
            <div className="flex flex-col flex-1 text-justify gap-y-1">{acccordions}</div>
        </div>
    )
}

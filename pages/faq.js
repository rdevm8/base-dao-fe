import Accordion from "../components/Accordion"
import React, { useState } from "react"
import { faqs } from "../data/mocks/faqs"
import { TitleHeader } from "../utilities/Title"

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState(0)

    const acccordions = faqs.map((faq) => (
        <Accordion
            title={faq.title}
            index={faq.id}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            key={faq.id}
        >
            {faq.content}
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

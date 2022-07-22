import Accordion from "../components/Accordion"
import React, { useState } from "react"
import { faqs } from "../data/mocks/faqs"

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState(0)

    const acccordions = faqs.map((faq) => (
        <Accordion
            title={faq.title}
            index={faq.id}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
        >
            {faq.content}
        </Accordion>
    ))

    return (
        <div className=" items-center text-center text-red-700">
            <p className=" text-4xl font-bold">FAQs</p>
            <h3 className=" text-5xl font-bold mb-4">Frequently Asked Questions</h3>
            <div className=" text-justify">{acccordions}</div>
        </div>
    )
}

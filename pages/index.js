import React from "react"
import Table from "../components/table/Table"
import { cols, generateData } from "../data/mocks/data"
import { TitleHeader } from "../utilities/Title"

const getData = () => generateData()

export default function Home() {
    const columns = React.useMemo(() => cols, [])

    const data = React.useMemo(() => getData(), [])

    return (
        <div className="flex flex-col flex-1 gap-y-4">
            <div>
                <TitleHeader>POOLS</TitleHeader>
            </div>
            <div className="flex-1">
                <Table columns={columns} data={data} createMode={false} />
            </div>
        </div>
    )
}

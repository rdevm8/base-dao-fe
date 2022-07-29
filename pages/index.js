import React from "react"
import Table from "../components/table/Table"
import { data, cols } from "../data/mocks/data"

const getData = () => data

export default function Home() {
    const columns = React.useMemo(() => cols, [])

    const data = React.useMemo(() => getData(), [])

    return (
        <>
            <div>
                <main className="">
                    <div className="">
                        <h1 className="text-4xl font-bold text-content">POOLS</h1>
                    </div>
                    <div className="mt-4">
                        <Table columns={columns} data={data} />
                    </div>
                </main>
            </div>
        </>
    )
}

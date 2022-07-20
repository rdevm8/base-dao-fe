import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai"

export default function Home() {
    return (
        <div className="flex flex-col h-full justify-around">
            <div>
                <h1 className=" text-5xl font-bold">All Pools</h1>
            </div>
            <div className=" bg-red-600">Search Bar</div>
            <div>
                <table class="table-auto w-full">
                    <thead>
                        <tr>
                            <th>Song</th>
                            <th>Artist</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                            <td>Malcolm Lockyer</td>
                            <td>1961</td>
                        </tr>
                        <tr>
                            <td>Witchy Woman</td>
                            <td>The Eagles</td>
                            <td>1972</td>
                        </tr>
                        <tr>
                            <td>Shining Star</td>
                            <td>Earth, Wind, and Fire</td>
                            <td>1975</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>Pagination</div>
        </div>
    )
}

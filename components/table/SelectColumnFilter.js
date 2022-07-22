import React from "react"

export function SelectColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id, render },
}) {
    // Calculate the options for filtering
    // using the preFilteredRows
    const options = React.useMemo(() => {
        const options = new Set()
        preFilteredRows.forEach((row) => {
            options.add(row.values[id])
        })
        return [...options.values()]
    }, [id, preFilteredRows])

    // Render a multi-select box
    return (
        <label className="flex gap-x-2 items-baseline">
            <form className="w-full">
                <fieldset className=" border-4 border-red-700 rounded-lg items-center px-3">
                    <legend className=" font-bold">{render("Header")}</legend>
                    <select
                        className="block w-full bg-transparent border-none outline-0 hover:outline-0 active:outline-0 focus:ring-0"
                        name={id}
                        id={id}
                        value={filterValue}
                        onChange={(e) => {
                            setFilter(e.target.value || undefined)
                        }}
                    >
                        <option value="">All</option>
                        {options.map((option, i) => (
                            <option key={i} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </fieldset>
            </form>
        </label>
    )
}

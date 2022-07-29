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
                <fieldset className=" border-2 border-content rounded-lg items-center px-3">
                    <legend className=" font-bold text-content">{render("Header")}</legend>
                    <select
                        className="block w-full bg-transparent border-2 rounded-md border-accent outline-0 hover:outline-0 active:outline-0 focus:border-accent focus:ring-0  text-content mb-2 caret-content"
                        name={id}
                        id={id}
                        value={filterValue}
                        onChange={(e) => {
                            setFilter(e.target.value || undefined)
                        }}
                    >
                        <option className="text-content bg-secondary" value="">
                            All
                        </option>
                        {options.map((option, i) => (
                            <option className="text-content bg-secondary" key={i} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </fieldset>
            </form>
        </label>
    )
}

import React from "react"
import { useAsyncDebounce } from "react-table"

export function GlobalFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <label className="flex flex-1 gap-x-2 items-baseline">
            <form className="w-full">
                <fieldset className=" border-2 border-content rounded-lg items-center px-3">
                    <legend className=" font-bold text-content">
                        <span>Search</span>
                    </legend>
                    <input
                        type="text"
                        className="block w-full bg-transparent border-none outline-0 hover:outline-0 active:outline-0 focus:ring-0 text-content  mb-2 placeholder:text-stone-500"
                        value={value || ""}
                        onChange={(e) => {
                            setValue(e.target.value)
                            onChange(e.target.value)
                        }}
                        placeholder={`${count} records...`}
                    />
                </fieldset>
            </form>
        </label>
    )
}

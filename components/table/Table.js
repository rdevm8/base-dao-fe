import React from "react"
import { useTable, useGlobalFilter, useFilters, useSortBy, usePagination } from "react-table"

import { Button, PageButton } from "../../utilities/Button"
import {
    BsChevronLeft,
    BsChevronDoubleLeft,
    BsChevronRight,
    BsChevronDoubleRight,
} from "react-icons/bs"
import { SortDownIcon, SortUpIcon, SortIcon } from "../../utilities/Icons"
import { GlobalFilter } from "./GlobalFilter"

export default function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state,
        preGlobalFilteredRows,
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination
    )

    // Render the UI for your table
    return (
        <>
            <div className="flex gap-x-2">
                <GlobalFilter
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    globalFilter={state.globalFilter}
                    setGlobalFilter={setGlobalFilter}
                />
                {headerGroups.map((headerGroup) =>
                    headerGroup.headers.map((column) =>
                        column.Filter ? <div key={column.id}>{column.render("Filter")}</div> : null
                    )
                )}
            </div>
            <div className="mt-2 flex flex-col">
                <div className="">
                    <div className="align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table
                                {...getTableProps()}
                                className="min-w-full divide-y divide-gray-200"
                            >
                                <thead className="bg-gray-50">
                                    {headerGroups.map((headerGroup) => (
                                        <tr {...headerGroup.getHeaderGroupProps()}>
                                            {headerGroup.headers.map((column) => (
                                                // Add the sorting props to control sorting. For this example
                                                // we can add them into the header props
                                                <th
                                                    scope="col"
                                                    className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    {...column.getHeaderProps(
                                                        column.getSortByToggleProps()
                                                    )}
                                                >
                                                    <div className="flex items-center justify-between">
                                                        {column.render("Header")}
                                                        {/* Add a sort direction indicator */}
                                                        <span>
                                                            {column.isSorted ? (
                                                                column.isSortedDesc ? (
                                                                    <SortDownIcon className="w-4 h-4 text-gray-400" />
                                                                ) : (
                                                                    <SortUpIcon className="w-4 h-4 text-gray-400" />
                                                                )
                                                            ) : (
                                                                <SortIcon className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                                                            )}
                                                        </span>
                                                    </div>
                                                </th>
                                            ))}
                                        </tr>
                                    ))}
                                </thead>
                                <tbody
                                    {...getTableBodyProps()}
                                    className="bg-white divide-y divide-gray-200"
                                >
                                    {page.map((row, i) => {
                                        // new
                                        prepareRow(row)
                                        return (
                                            <tr {...row.getRowProps()}>
                                                {row.cells.map((cell) => {
                                                    return (
                                                        <td
                                                            {...cell.getCellProps()}
                                                            className="px-6 py-4 whitespace-nowrap"
                                                            role="cell"
                                                        >
                                                            {cell.column.Cell.name ===
                                                            "defaultRenderer" ? (
                                                                <div className="text-sm text-gray-500">
                                                                    {cell.render("Cell")}
                                                                </div>
                                                            ) : (
                                                                cell.render("Cell")
                                                            )}
                                                        </td>
                                                    )
                                                })}
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-3 flex items-center justify-center">
                <div className="flex flex-1 flex-row  items-center gap-x-5">
                    <div className="">
                        <span className="text-sm text-gray-700  inline-block align-middle">
                            Page <span className="font-medium">{state.pageIndex + 1}</span> of{" "}
                            <span className="font-medium">{pageOptions.length}</span>
                        </span>
                    </div>
                    <div>
                        <label>
                            <select
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                value={state.pageSize}
                                onChange={(e) => {
                                    setPageSize(Number(e.target.value))
                                }}
                            >
                                {[5, 10, 20].map((pageSize) => (
                                    <option key={pageSize} value={pageSize}>
                                        Show {pageSize}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                </div>
                <div>
                    <nav
                        className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                        aria-label="Pagination"
                    >
                        <PageButton
                            className="rounded-l-md"
                            onClick={() => gotoPage(0)}
                            disabled={!canPreviousPage}
                        >
                            <span className="sr-only">First</span>
                            <BsChevronDoubleLeft className="h-5 w-5" aria-hidden="true" />
                        </PageButton>
                        <PageButton onClick={() => previousPage()} disabled={!canPreviousPage}>
                            <span className="sr-only">Previous</span>
                            <BsChevronLeft className="h-5 w-5" aria-hidden="true" />
                        </PageButton>
                        <PageButton onClick={() => nextPage()} disabled={!canNextPage}>
                            <span className="sr-only">Next</span>
                            <BsChevronRight className="h-5 w-5" aria-hidden="true" />
                        </PageButton>
                        <PageButton
                            className="rounded-r-md"
                            onClick={() => gotoPage(pageCount - 1)}
                            disabled={!canNextPage}
                        >
                            <span className="sr-only">Last</span>
                            <BsChevronDoubleRight className="h-5 w-5" aria-hidden="true" />
                        </PageButton>
                    </nav>
                </div>
            </div>
        </>
    )
}

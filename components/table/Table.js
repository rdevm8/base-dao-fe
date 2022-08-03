import React from "react"
import { useTable, useGlobalFilter, useFilters, useSortBy, usePagination } from "react-table"

import { Button, PageButton } from "../../utilities/Button"
import { GlobalFilter } from "./GlobalFilter"
import { StatusPill } from "./StatusPill"
import { FaUserCircle, FaEthereum, FaPeopleArrows } from "react-icons/fa"
import Link from "next/link"

export default function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        pageCount,
        gotoPage,
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
            <div className="hidden md:flex gap-x-2 border border-accent rounded-md bg-secondary items-center justify-around p-4">
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
                <div>
                    <label className="flex gap-x-2 items-baseline">
                        <form className="w-full">
                            <fieldset className=" border-2 border-content rounded-lg items-center px-3">
                                <legend className=" font-bold text-content">Page Size</legend>
                                <select
                                    className="block w-full bg-transparent border-2 rounded-md border-accent outline-0 hover:outline-0 active:outline-0 focus:border-accent focus:ring-0  text-content mb-2 caret-content"
                                    value={state.pageSize}
                                    onChange={(e) => {
                                        setPageSize(Number(e.target.value))
                                    }}
                                >
                                    {[5, 10, 20].map((pageSize) => (
                                        <option
                                            className="text-content bg-secondary"
                                            key={pageSize}
                                            value={pageSize}
                                        >
                                            Show {pageSize}
                                        </option>
                                    ))}
                                </select>
                            </fieldset>
                        </form>
                    </label>
                </div>
            </div>
            <div className="mt-2 flex flex-col ">
                <div className="align-middle inline-block min-w-full">
                    <div className="shadow overflow-hidden sm:rounded-lg">
                        <table {...getTableProps()} className="min-w-full">
                            <tbody {...getTableBodyProps()} className="">
                                {page.map((row, i) => {
                                    // new
                                    prepareRow(row)
                                    return (
                                        <tr {...row.getRowProps()}>
                                            <td className="text-content py-2">
                                                <Link
                                                    // href={{
                                                    //     pathname: "/[id]",
                                                    //     query: {
                                                    //         id: i,
                                                    //     },
                                                    // }}
                                                    href={`pools/${i}`}
                                                >
                                                    <div className="p-4 flex flex-col gap-y-2  bg-secondary rounded-lg cursor-pointer hover:opacity-90">
                                                        <div className="flex flex-row justify-between ">
                                                            <div className="flex items-center text-black align-middle bg-accent px-2 rounded-lg">
                                                                <FaUserCircle />
                                                                <span className=" font-semibold text-md ml-2">
                                                                    {row.values.creator.slice(0, 6)}
                                                                    ...
                                                                    {row.values.creator.slice(
                                                                        row.values.creator.length -
                                                                            4
                                                                    )}
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <p>
                                                                    {StatusPill(row.values.status)}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="text-lg font-extrabold">
                                                                {row.values.title}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <p className="text-md text-content text-justify">
                                                                {row.values.description}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <hr className="text-accent"></hr>
                                                        </div>
                                                        <div className="flex flex-row justify-between items-center">
                                                            <div className="text-stone-500 text-sm italic">
                                                                Created on {row.values.dtCreate}
                                                            </div>
                                                            <div className=" flex divide-x divide-accent">
                                                                <div className="flex items-center align-middle px-2">
                                                                    <FaEthereum />
                                                                    <span className="text-content font-semibold text-md ml-2">
                                                                        {row.values.amount}
                                                                    </span>
                                                                </div>
                                                                <div className="flex items-center align-middle px-2">
                                                                    <FaPeopleArrows />
                                                                    <span className="text-content font-semibold text-md ml-2">
                                                                        {row.values.funders}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <nav className="mt-2 text-white flex justify-center items-center gap-x-3">
                {[...Array(pageCount)].map((value, index) => {
                    return (
                        <PageButton
                            onClick={() => gotoPage(index)}
                            className={`${
                                state.pageIndex == index
                                    ? "bg-accent text-black border border-accent transition-all tansition-primary"
                                    : " text-content border-none hover:bg-accent hover:text-black transition-all tansition-primary"
                            }`}
                        >
                            {index + 1}
                        </PageButton>
                    )
                })}
                {/* <PageButton>1</PageButton>
                <div className=" rounded-full bg-content w-8 h-8 text-black justify-center items-center flex">
                    1
                </div>
                <div>2</div> */}
            </nav>
            {/* <div className="py-3 flex items-center justify-center">
                <div>
                    <nav
                        className="relative z-0 inline-flex -space-x-px gap-x-2 w-full"
                        aria-label="Pagination"
                    >
                        <PageButton onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                            <span className="sr-only">First</span>
                            <BsChevronDoubleLeft className="h-8 w-8 " aria-hidden="true" />
                        </PageButton>
                        <PageButton onClick={() => previousPage()} disabled={!canPreviousPage}>
                            <span className="sr-only">Previous</span>
                            <BsChevronLeft className="h-8 w-8" aria-hidden="true" />
                        </PageButton>

                        {[...Array(pageCount)].map((value, index) => {
                            return (
                                <PageButton
                                    onClick={() => gotoPage(index)}
                                    className={`h-8 w-8 ${
                                        state.pageIndex == index
                                            ? "bg-accent text-black border border-accent"
                                            : " text-content border-none"
                                    }`}
                                >
                                    <span className="text-lg">{index + 1}</span>
                                </PageButton>
                            )
                        })}
                        <PageButton onClick={() => nextPage()} disabled={!canNextPage}>
                            <span className="sr-only">Next</span>
                            <BsChevronRight className="h-8 w-8" aria-hidden="true" />
                        </PageButton>
                        <PageButton onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                            <span className="sr-only">Last</span>
                            <BsChevronDoubleRight className="h-8 w-8" aria-hidden="true" />
                        </PageButton>
                    </nav>
                </div>
            </div> */}
        </>
    )
}

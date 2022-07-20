import React from "react"
import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"

export default function Layout({ title, children }) {
    return (
        <>
            <Head>
                <title>{title ? title : "Base DAO Application"}</title>
                <meta name="description" content="Base DAO Application" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col h-screen max-h-screen">
                <div style={{ height: "8%" }}>
                    <Header></Header>
                </div>

                <div className="flex" style={{ height: "92%" }}>
                    <aside className="sticky">
                        <Sidebar />
                    </aside>
                    <main className="bg-primary flex-1 p-4 overflow-y-auto flex-col">
                        {children}
                    </main>
                </div>

                {/* <Footer></Footer> */}
            </div>
        </>
    )
}

import React from "react"

import NavBar from "../NavBar"
import SideNav from "../SideNav"
import Footer from "../Footer"

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <SideNav />
            <header>
                <NavBar />
            </header>
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout

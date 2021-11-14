import React from 'react'

import NavBar from '../NavBar'
import SideNav from '../SideNav'
import Footer from '../Footer'

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <SideNav />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout

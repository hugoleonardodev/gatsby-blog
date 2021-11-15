import React from 'react'

import Footer from '../Footer'
import Header from '../Header'

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <footer className="page-footer">
                <Footer />
            </footer>
        </>
    )
}

export default Layout

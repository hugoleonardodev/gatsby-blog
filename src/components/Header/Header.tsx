import React from 'react'
import Hero from './Hero'
import NavBar from './NavBar'
import SideNav from './SideNav'

const Header: React.FC = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <SideNav />
            <Hero />
        </>
    )
}

export default Header

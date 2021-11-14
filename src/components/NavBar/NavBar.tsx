import React from "react"
import styled from "styled-components"
import { useCustomTheme } from "../../themes"

const NavWrapper = styled.div`
    nav {
        background-color: ${props => props.theme.colors.primary.main};
    }
    .brand-logo {
        padding-left: 20vw;
    }
`
const NavBar: React.FC = () => {
    const { switchTheme, setSwitchTheme } = useCustomTheme()
    return (
        <NavWrapper>
            <nav>
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">
                        Logo
                    </a>
                    <a
                        // href="#"
                        data-target="mobile-demo"
                        className="sidenav-trigger"
                        // onClick={toggle}
                    >
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <a onClick={() => setSwitchTheme(!switchTheme)}>
                                THEME
                            </a>
                        </li>
                        <li>
                            <a href="badges.html">Components</a>
                        </li>
                        <li>
                            <a href="collapsible.html">Javascript</a>
                        </li>
                        <li>
                            <a href="mobile.html">Mobile</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </NavWrapper>
    )
}

export default NavBar

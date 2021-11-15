import React from 'react'
import styled from 'styled-components'
import { useCustomTheme } from '../../themes'
import Links from './Links'

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
    const handleSwitchTheme = React.useCallback(() => {
        setSwitchTheme(!switchTheme)
    }, [switchTheme, setSwitchTheme])
    return (
        <NavWrapper>
            <nav>
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">
                        Logo
                    </a>
                    <a
                        href="#!"
                        data-target="mobile-demo"
                        className="sidenav-trigger"
                        // onClick={toggle}
                    >
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <a href="#!" onClick={handleSwitchTheme}>
                                THEME
                            </a>
                        </li>
                        <Links />
                    </ul>
                </div>
            </nav>
        </NavWrapper>
    )
}

export default NavBar

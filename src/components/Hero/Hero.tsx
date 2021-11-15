import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

type HeroProps = {
    showPerson?: boolean
}
const Hero: React.FC<HeroProps> = ({ showPerson }) => {
    return (
        <header className="hero">
            {showPerson && (
                <StaticImage
                    src="../assets/person.png"
                    placeholder="blurred"
                    className="hero-person"
                    alt="person typing"
                />
            )}
        </header>
    )
}

export default Hero

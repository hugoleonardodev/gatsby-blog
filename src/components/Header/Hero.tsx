import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

type HeroProps = {
    showPerson?: boolean
}
const Hero: React.FC<HeroProps> = ({ showPerson }) => {
    return (
        <section className="hero">
            {showPerson && (
                <StaticImage
                    src="../assets/person.png"
                    placeholder="blurred"
                    className="hero-person"
                    alt="person typing"
                />
            )}
        </section>
    )
}

export default Hero

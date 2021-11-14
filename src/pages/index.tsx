import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/SEO"

const IndexPage: React.FC = () => (
    <>
        <Seo title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
        />
        <p>
            <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
        </p>
    </>
)

export default IndexPage

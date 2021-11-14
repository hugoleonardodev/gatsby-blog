import * as React from 'react'
import { Link } from 'gatsby'
import { ImageFormat, StaticImage } from 'gatsby-plugin-image'

import Seo from '../components/SEO'

const formats: ImageFormat[] = ['auto', 'webp', 'avif']
const styles = { marginBottom: '1.45rem' }

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
            formats={formats}
            alt="A Gatsby astronaut"
            style={styles}
        />
        <p>
            <Link to="/using-typescript/">Go to &quot;Using TypeScript&quot;</Link> <br />
        </p>
    </>
)

export default IndexPage

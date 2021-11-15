import React from 'react'
import { Link } from 'gatsby'

// type LinksProps = {
//     styleClass: string
// }

const Links: React.FC = () => {
    return (
        <>
            <li>
                <Link to="/" className="page-link">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/posts" className="page-link">
                    Posts
                </Link>
            </li>
            <li>
                <Link to="/newsletter" className="page-link">
                    Newsletter
                </Link>
            </li>
            <li>
                <Link to="/post" className="page-link">
                    Post
                </Link>
            </li>
        </>
    )
}

export default Links

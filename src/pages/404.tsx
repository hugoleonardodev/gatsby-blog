import React from 'react'
import { Link } from 'gatsby'

const NotFoundPage: React.FC = () => (
    <section className="error-page">
        <div className="page-center">
            <span>404</span>
            <h3>Sorry, the page you tried cannot be found.</h3>
            <Link to="/" className="btn">
                back home
            </Link>
        </div>
    </section>
)

export default NotFoundPage

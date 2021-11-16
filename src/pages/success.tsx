import React from 'react'
import { Link } from 'gatsby'

const Success: React.FC = () => {
    return (
        <section className="success-page">
            <div className="page-center">
                <h2>your submission was recieved ! </h2>
                <Link to="/" className="btn">
                    back home
                </Link>
            </div>
        </section>
    )
}

export default Success

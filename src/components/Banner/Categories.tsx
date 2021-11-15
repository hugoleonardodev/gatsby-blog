import React from 'react'
import { graphql, StaticQueryDocument, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'

type CategoriesQueryProps = {
    allMdx: {
        distinct: ['HTML&CSS', 'gatsby', 'javascript', 'react']
    }
} & StaticQueryDocument

const query = graphql`
    {
        allMdx {
            distinct(field: frontmatter___category)
        }
    }
`

const Categories: React.FC = () => {
    const {
        allMdx: { distinct },
    } = useStaticQuery<CategoriesQueryProps>(query)
    return (
        <ul className="categories">
            {distinct.map((category, index) => {
                return (
                    <li key={index}>
                        <Link to={`/${category}`} className="category">
                            {category}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Categories

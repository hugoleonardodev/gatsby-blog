/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React from 'react'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

const CategoryTemplate = props => {
    const {
        data: {
            categories: { nodes: posts },
        },
    } = props
    const {
        pageContext: { category },
    } = props
    return (
        <>
            <Hero />
            <Posts posts={posts} title={`category / ${category}`} />
        </>
    )
}

export const query = graphql`
    query GetCategories($category: String) {
        categories: allMdx(
            sort: { fields: frontmatter___date, order: DESC }
            filter: { frontmatter: { category: { eq: $category } } }
        ) {
            nodes {
                excerpt
                frontmatter {
                    title
                    author
                    category
                    date(formatString: "MMMM, Do YYYY")
                    slug
                    image {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
                id
            }
        }
    }
`

export default CategoryTemplate

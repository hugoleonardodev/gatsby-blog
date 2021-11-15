import React from 'react'
import Hero from '../components/Hero'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'
const PostsPage: React.FC = ({ data }) => {
    const {
        allMdx: { nodes: posts },
    } = data
    return (
        <>
            <Hero />
            <Posts posts={posts} title="all posts" />
        </>
    )
}

export const query = graphql`
    {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
            nodes {
                excerpt
                frontmatter {
                    title
                    author
                    category
                    readTime
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

export default PostsPage

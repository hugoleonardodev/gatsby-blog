import React from 'react'
import { graphql } from 'gatsby'
import { Posts } from '../components/Layouts'
import { PostProps } from '../components/Layouts/Post'

type PostsPageProps = {
    data: {
        allMdx: {
            nodes: PostProps[]
        }
    }
}

const PostsPage: React.FC<PostsPageProps> = ({ data }) => {
    const {
        allMdx: { nodes: posts },
    } = data
    return <Posts posts={posts} title="all posts" />
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

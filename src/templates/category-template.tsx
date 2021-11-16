/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React from 'react'
import { Posts } from '../components/Layouts'
import { graphql } from 'gatsby'
import { PostProps } from '../components/Layouts/Post'

type CategoryTemplateProps = {
    data: {
        categories: {
            nodes: PostProps[]
        }
    }
    pageContext: {
        category: string
    }
}

const CategoryTemplate: React.FC<CategoryTemplateProps> = ({
    data,
    pageContext,
}) => {
    const {
        categories: { nodes: posts },
    } = data

    const { category } = pageContext

    return <Posts posts={posts} title={`category / ${category}`} />
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

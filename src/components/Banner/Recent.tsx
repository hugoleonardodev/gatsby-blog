import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import {
    GatsbyImage,
    getImage,
    GatsbyImageProps,
    IGatsbyImageData,
    ImageDataLike,
    StaticImage,
} from 'gatsby-plugin-image'
import Title from './Title'
import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks'

type PostProps = {
    frontmatter: {
        title: string
        date: Date
        slug: string
        // image: {
        //     childImageSharp: {
        //         gatsbyImageData: ImageDataLike | FileNode
        //     }
        // }
        image: ImageDataLike
    }
    id: string
}

type AllPostsProps = {
    allMdx: {
        nodes: PostProps[]
    }
}

const query = graphql`
    {
        allMdx(limit: 5, sort: { fields: frontmatter___date, order: DESC }) {
            nodes {
                frontmatter {
                    title
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

// const DefaultImage: React.FC = () => {
//     return (
//         <GatsbyImage
//             image="../images/gatsby-icon.png"
//             alt="Default"
//             placeholder="blurred"
//             layout="fixed"
//             width={200}
//             height={200}
//         />
//     )
// }

const Recent = () => {
    const {
        allMdx: { nodes: posts },
    } = useStaticQuery<AllPostsProps>(query)

    return (
        <Wrapper>
            <Title title="recent" />
            {posts.map(post => {
                const { title, slug, date, image } = post.frontmatter
                return (
                    <Link to={`/posts/${slug}`} key={post.id} className="post">
                        <GatsbyImage
                            image={getImage(image)}
                            alt={title}
                            className="img"
                        />
                        <div>
                            <h5>{title}</h5>
                            <p>{date}</p>
                        </div>
                    </Link>
                )
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .post {
        display: grid;
        grid-template-columns: 75px 1fr;
        column-gap: 1rem;
        margin-bottom: 1rem;
    }
    .img {
        border-radius: var(--radius);
    }
    h5 {
        font-size: 0.7rem;
        margin-bottom: 0.25rem;
        letter-spacing: 0;
        line-height: 1.2;
        color: var(--clr-grey-1);
    }
    p {
        font-size: 0.6rem;
        margin-bottom: 0;
        color: var(--clr-grey-5);
    }
    .post:hover {
        h5 {
            color: var(--clr-primary-5);
        }
    }
`

export default Recent

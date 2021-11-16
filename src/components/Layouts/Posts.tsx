import React from 'react'
import Post, { PostProps } from './Post'
import Banner from '../Banner'

type PostsProps = {
    posts: PostProps[]
    title: string
}

const Posts: React.FC<PostsProps> = ({ posts, title }) => {
    return (
        <section className="posts">
            <h3 className="posts-title">{title}</h3>
            <div className="posts-center">
                {/* posts column */}
                <article>
                    {posts.map(post => {
                        return <Post key={post.id} {...post} />
                    })}
                </article>
                {/* banner column */}
                <article>
                    <Banner />
                </article>
            </div>
        </section>
    )
}

export default Posts

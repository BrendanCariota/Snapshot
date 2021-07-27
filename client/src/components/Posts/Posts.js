import React from 'react'

import Post from './Post/Post'
import useStyles from './styles'

// Redux implementation
import { useSelector } from 'react-redux'

function Posts() {

    const posts = useSelector((state) => state.posts)
    const classes = useStyles()

    console.log(posts)

    return (
        <>
            <h1>Posts</h1>
            <Post />
            <Post />
        </>
    )
}

export default Posts

// Create handlers for all post routes

import PostMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find()

        console.log(postMessages)

        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    // Get the information sent in the req
    const post = req.body

    // Syntax to create a new post with our Post Schema
    const newPost = new PostMessage(post)

    try {
        // Saves new post in database
        await newPost.save()

        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
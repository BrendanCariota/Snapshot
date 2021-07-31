import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'

const app = express();
dotenv.config()

app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

// Sets up where every route inside the postRoutes is going to start with posts - MUST BE BELOW CORS INITIALIZATION
app.use('/posts', postRoutes)
app.use('/users', userRoutes)

app.get('/', (req, res) => {
    res.send('Hello to Snapshot API')
})

// PORT we are running the server on
const PORT = process.env.PORT

// Connecting to the Database with our URL and passing in the object to prevent warnings
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err.message))

// Prevents warnings in the console
mongoose.set('useFindAndModify', false)
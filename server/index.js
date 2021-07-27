import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'

const app = express();

app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

// Sets up where every route inside the postRoutes is going to start with posts - MUST BE BELOW CORS INITIALIZATION
app.use('/posts', postRoutes)

// Connect to our MongoDB Cluster
const CONNECTION_URL = `mongodb+srv://BrendanCariota:Cariota1.@cluster0.i14ly.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
// PORT we are running the server on
const PORT = process.env.PORT || 5000

// Connecting to the Database with our URL and passing in the object to prevent warnings
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err.message))

// Prevents warnings in the console
mongoose.set('useFindAndModify', false)
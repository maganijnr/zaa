import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDb from './config/db.js'
import {products} from './data.js'

//Importing routes
import productRoutes from './routes/products.js'
import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'


dotenv.config()
connectDb()

const app = express()
app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running on port ${PORT}`.blue.bold))
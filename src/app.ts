import express from 'express'
import { router } from './api/routes/index'
import { morgan } from './loaders/loggers'
import './loaders/dbConnection'
import cors from 'cors'
import path from 'path'

require('dotenv').config()

const app = express()

app.use(morgan(process.env.MORGAN_LOG_LEVEL))
app.use(cors())
app.use(express.json())

const uploadDir = path.join(__dirname, '/uploads/')

app.use('/uploads', express.static(uploadDir))
app.use(router)

app.listen(process.env.PORT, () => {
  console.log(`🌐[server]: Server is running at http://localhost:${process.env.PORT}`)
})

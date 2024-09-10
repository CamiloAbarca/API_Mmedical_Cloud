import express from 'express'
import morgan from 'morgan'
import apiRoutes from './routes'
import cors from 'cors'

const app = express()

app.use(cors({
  origin: ['http://localhost:5173'], // allow requests from this origin
  credentials: true, // allow credentials (e.g., cookies) to be sent
}));

app.use(express.json())
app.use(morgan('dev'))

app.use('/api/v1', apiRoutes)

app.use((_req, res) => {
  res.status(404).json({
    message: 'Not found'
  })
})

export default app
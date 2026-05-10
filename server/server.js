require('dotenv').config()

const express = require('express')
const connectDB = require('./config/db')
const jobRoutes = require('./routes/jobRoutes')
const resumeRoutes = require('./routes/resumeRoutes')

const app = express()

connectDB()

app.use(express.json())

app.use('/api/jobs', jobRoutes)
app.use('/api/resume', resumeRoutes)

app.get('/', (req, res) => {
  res.send('Backend server is running')
})

app.listen(5000, () => {
  console.log('Server running on port 5000')
})
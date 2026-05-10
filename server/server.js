require('dotenv').config()

const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const jobRoutes = require('./routes/jobRoutes')
const resumeRoutes = require('./routes/resumeRoutes')
const jobSearchRoutes = require('./routes/jobSearchRoutes')

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use('/api/jobs', jobRoutes)
app.use('/api/resume', resumeRoutes)
app.use('/api/search-jobs', jobSearchRoutes)

app.get('/', (req, res) => {
  res.send('Backend server is running')
})

app.listen(5000, () => {
  console.log('Server running on port 5000')
})
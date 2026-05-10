const express = require('express')
const Job = require('../models/Job')

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const job = await Job.create(req.body)
    res.status(201).json(job)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 })
    res.status(200).json(jobs)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
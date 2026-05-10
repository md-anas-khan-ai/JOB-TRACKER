const Job = require('../models/Job')

const createJob = async (req, res) => {
  try {
    const { company, role, location, salary, url } = req.body

    const job = await Job.create({
      company,
      role,
      location,
      salary,
      url,
    })

    res.status(201).json(job)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 })
    res.status(200).json(jobs)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

module.exports = {
  createJob,
  getJobs,
}
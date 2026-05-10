const express = require('express')
const axios = require('axios')

const router = express.Router()

router.get('/:skill', async (req, res) => {
  try {
    const skill = req.params.skill

    const response = await axios.get(
      `https://remotive.com/api/remote-jobs?search=${skill}`
    )

    res.status(200).json(response.data.jobs)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
})

module.exports = router
const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },

    location: {
      type: String,
    },

    salary: {
      type: String,
    },

    url: {
      type: String,
    },

    status: {
      type: String,
      enum: ['Saved', 'Applied', 'Interview', 'Offer', 'Rejected'],
      default: 'Saved',
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Job', jobSchema)
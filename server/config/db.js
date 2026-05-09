const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect('YOUR_MONGODB_CONNECTION_URL')
    console.log('MongoDB connected')
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = connectDB
const fs = require('fs')
const pdfParse = require('pdf-parse')

const extractResume = async (req, res) => {
  try {
    const dataBuffer = fs.readFileSync(req.file.path)

    const pdfData = await pdfParse(dataBuffer)

    const text = pdfData.text

    const skills = [
      'Python',
      'JavaScript',
      'React',
      'Node.js',
      'MongoDB',
      'Express',
      'HTML',
      'CSS',
      'Tailwind',
      'SQL',
      'MySQL',
      'Git',
      'GitHub',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'OpenCV',
      'Machine Learning',
    ]

    const foundSkills = skills.filter((skill) =>
      text.toLowerCase().includes(skill.toLowerCase())
    )

    res.status(200).json({
      message: 'Resume parsed successfully',
      skills: foundSkills,
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

module.exports = {
  extractResume,
}
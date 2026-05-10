const fs = require('fs')
const pdfParse = require('pdf-parse')
const axios = require('axios')

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

    const prioritySkills = [
      'React',
      'Node.js',
      'JavaScript',
      'Python',
      'Machine Learning',
    ]

    const mainSkill =
      foundSkills.find((skill) => prioritySkills.includes(skill)) ||
      foundSkills[0]

    const response = await axios.get(
      `https://remotive.com/api/remote-jobs?search=${mainSkill}`
    )

    const jobs = response.data.jobs
      .filter(
        (job) =>
          job.category.toLowerCase().includes('software') ||
          job.title.toLowerCase().includes('developer') ||
          job.title.toLowerCase().includes('engineer') ||
          job.category.toLowerCase().includes('artificial')
      )
      .slice(0, 5)

    res.status(200).json({
      message: 'Resume analyzed successfully',
      skills: foundSkills,
      jobs,
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
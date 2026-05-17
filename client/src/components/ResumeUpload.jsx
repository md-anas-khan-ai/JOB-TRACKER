import { useState } from 'react'
import axios from 'axios'

const API_URL = 'https://job-tracker-5yjb.onrender.com'

function ResumeUpload() {
  const [file, setFile] = useState(null)
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(false)

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a resume')
      return
    }

    const formData = new FormData()
    formData.append('resume', file)

    try {
      setLoading(true)

      const response = await axios.post(
        `${API_URL}/api/resume/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )

      setJobs(response.data.jobs)
      setLoading(false)
    } catch (error) {
      console.log(error)
      alert('Upload failed')
      setLoading(false)
    }
  }

  const saveJob = async (job) => {
    try {
      await axios.post(`${API_URL}/api/jobs`, {
        company: job.company_name,
        role: job.title,
        location: job.candidate_required_location,
        salary: job.salary,
        url: job.url,
      })

      alert('Job saved successfully')
    } catch (error) {
      console.log(error)
      alert('Failed to save job')
    }
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-8">
      <h2 className="text-2xl font-bold mb-2">AI Job Finder</h2>
      <p className="text-gray-600 mb-4">
        Upload your resume and find matching remote jobs.
      </p>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4 block border p-2 rounded-lg"
      />

      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        {loading ? 'Finding Jobs...' : 'Upload & Find Jobs'}
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {jobs.map((job) => (
          <div key={job.id} className="border rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-4">
              <img
                src={job.company_logo}
                alt={job.company_name}
                className="w-12 h-12 rounded-full"
              />

              <div>
                <h3 className="text-xl font-bold">{job.title}</h3>
                <p className="text-gray-600">{job.company_name}</p>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              <p>📍 {job.candidate_required_location}</p>
              <p>💼 {job.category}</p>
              <p>💰 {job.salary || 'Not disclosed'}</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {job.tags?.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-5">
              <a
                href={job.url}
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
              >
                Apply Now
              </a>

              <button
                onClick={() => saveJob(job)}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
              >
                Save Job
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResumeUpload
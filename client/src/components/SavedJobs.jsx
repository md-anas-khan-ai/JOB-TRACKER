import { useEffect, useState } from 'react'
import axios from 'axios'

const API_URL = 'https://job-tracker-5yjb.onrender.com'

function SavedJobs() {
  const [savedJobs, setSavedJobs] = useState([])

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/jobs`)
        setSavedJobs(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchJobs()
  }, [])

  return (
    <div className="bg-white mt-8 p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Saved Jobs</h2>

      <div className="grid grid-cols-1 gap-4">
        {savedJobs.map((job) => (
          <div key={job._id} className="border p-4 rounded-lg">
            <h3 className="text-xl font-bold">{job.role}</h3>

            <p className="text-gray-600">{job.company}</p>

            <p className="text-gray-500">{job.location}</p>

            <p className="text-sm text-blue-600">{job.status}</p>

            <a
              href={job.url}
              target="_blank"
              rel="noreferrer"
              className="text-green-600"
            >
              Apply Link
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SavedJobs
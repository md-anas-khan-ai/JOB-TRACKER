import Navbar from '../components/Navbar'
import JobCard from '../components/JobCard'
import ResumeUpload from '../components/ResumeUpload'

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-8">
        <h1 className="text-4xl font-bold text-blue-600">
          Dashboard
        </h1>

        <p className="text-gray-600 mt-2">
          Overview of your job applications
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500">Total Applied</h2>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500">Interviews</h2>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500">Offers</h2>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500">Rejected</h2>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>
        </div>

        <ResumeUpload />

        <div className="bg-white mt-8 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">
            Recent Applications
          </h2>

          <div className="grid grid-cols-1 gap-4 mt-4">
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
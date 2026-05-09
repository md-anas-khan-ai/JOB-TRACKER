import Navbar from '../components/Navbar'

function AddJob() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex justify-center items-center mt-16 px-4">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-xl">
          <h1 className="text-3xl font-bold text-blue-600 text-center">
            Add Job Application
          </h1>

          <form className="mt-6 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Company Name"
              className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="text"
              placeholder="Job Role"
              className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="text"
              placeholder="Location"
              className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />

            <select className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400">
              <option>Applied</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>

            <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              Add Job
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddJob
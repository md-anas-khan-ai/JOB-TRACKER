function JobCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-blue-600">
            Frontend Developer
          </h2>

          <p className="text-gray-600 mt-1">Google</p>

          <p className="text-gray-500 text-sm mt-1">Bangalore, India</p>
        </div>

        <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg text-sm font-semibold">
          Interview
        </span>
      </div>
    </div>
  )
}

export default JobCard
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex flex-col items-center justify-center text-center mt-24 px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-600 leading-tight">
          Track Your Job Applications Easily
        </h1>

        <p className="mt-6 text-gray-600 text-lg max-w-2xl">
          Organize your applications, interviews, offers, and career progress
          in one place.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>

          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-100 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
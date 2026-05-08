import Navbar from '../components/Navbar'

function Home() {
  return (
    <div>
      <Navbar />

      <div className="text-center mt-20">
        <h1 className="text-5xl font-bold text-blue-600">
          Track Your Job Applications
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Manage interviews, applications, and offers easily.
        </p>
      </div>
    </div>
  )
}

export default Home
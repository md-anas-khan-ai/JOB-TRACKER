import Navbar from '../components/Navbar'

function Login() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex justify-center items-center mt-20">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-blue-600">
            Login
          </h2>

          <form className="mt-6 flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
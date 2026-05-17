import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const API_URL = 'https://job-tracker-5yjb.onrender.com'

function Signup() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignup = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(`${API_URL}/api/auth/signup`, {
        name,
        email,
        password,
      })

      localStorage.setItem('user', JSON.stringify(response.data))
      alert('Signup successful')
      navigate('/dashboard')
    } catch (error) {
      alert(error.response?.data?.message || 'Signup failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded-xl shadow w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6 text-blue-600">Signup</h1>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
          required
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
          Create Account
        </button>
      </form>
    </div>
  )
}

export default Signup
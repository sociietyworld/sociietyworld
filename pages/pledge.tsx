'use client'

import { useState } from 'react'

export default function PledgePage() {
  const [form, setForm] = useState({
    name: '',
    instagram: '',
    address: '',
    email: '',
    phone: '',
  })

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      await fetch('https://script.google.com/macros/s/AKfycbzZieNLs-DPx-eDgngCg9qnAKZMXmtnLgesh2iTUf-H-m3my7m-lmSquoC7V9lbSngT/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      window.location.href = '/thank-you'
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center px-4 py-16">
      <form onSubmit={handleSubmit} className="bg-white text-black p-10 rounded-xl w-full max-w-lg shadow-xl space-y-6">
        <h1 className="text-4xl font-bold text-center text-yellow-500 drop-shadow-lg">Join the SOCIIETY</h1>

        {[
          { name: 'name', placeholder: 'Full Name' },
          { name: 'instagram', placeholder: 'Instagram Handle' },
          { name: 'address', placeholder: 'Shipping Address' },
          { name: 'email', placeholder: 'Email Address', type: 'email' },
          { name: 'phone', placeholder: 'Phone Number', type: 'tel' },
        ].map(({ name, placeholder, type = 'text' }) => (
          <input
            key={name}
            name={name}
            type={type}
            placeholder={placeholder}
            value={form[name as keyof typeof form]}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        ))}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-yellow-500 text-black py-3 font-bold rounded hover:bg-yellow-400"
        >
          {status === 'submitting' ? 'Submitting...' : 'Submit'}
        </button>

        {status === 'error' && <p className="text-red-600 text-center">Something went wrong. Please try again.</p>}
      </form>
    </div>
  )
}


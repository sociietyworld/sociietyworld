'use client'

import { useState } from 'react'

export default function PledgePage() {
  const [form, setForm] = useState({
    name: '',
    instagram: '',
    address: '',
    email: '',
    phone: '',
    shirtSize: '',
    sizeCategory: '',
    pantsSize: '',
    gender: '',
  })

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch('/api/pledge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        window.location.href = '/thank-you'
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  // Pants size options by category
  const mensSizes = Array.from({ length: 17 }, (_, i) => 28 + i)
  const womensSizes = ['00', '0', '2', '4', '6', '8', '10', '12', '14', '16']

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

        {/* Shirt Size Dropdown */}
        <select
          name="shirtSize"
          value={form.shirtSize}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md"
        >
          <option value="">Select Shirt Size</option>
          {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>

        {/* Size Category */}
        <select
          name="sizeCategory"
          value={form.sizeCategory}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md"
        >
          <option value="">Select Size Category</option>
          <option value="Mens">Men’s</option>
          <option value="Womens">Women’s</option>
        </select>

        {/* Pants Size Dropdown (Conditional) */}
        <select
          name="pantsSize"
          value={form.pantsSize}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md"
        >
          <option value="">Select Pants Size</option>
          {(form.sizeCategory === 'Mens' ? mensSizes : womensSizes).map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>

        {/* Gender Radio Buttons */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold">Gender</label>
          {['Male', 'Female', 'Non-binary', 'Prefer not to say'].map(option => (
            <label key={option} className="block">
              <input
                type="radio"
                name="gender"
                value={option}
                checked={form.gender === option}
                onChange={handleChange}
                required
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>

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


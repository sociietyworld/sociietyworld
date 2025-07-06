import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../lib/supabaseClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' })
  }

  const {
    name,
    instagram,
    address,
    email,
    phone,
    shirtSize,
    sizeCategory,
    pantsSize,
    gender,
  } = req.body

  const { data, error } = await supabase.from('pledges').insert([
    {
      name,
      instagram,
      address,
      email,
      phone,
      shirtSize,
      sizeCategory,
      pantsSize,
      gender,
    },
  ])

  if (error) {
    console.error('Supabase Error:', error)
    return res.status(500).json({ message: 'Error saving pledge', error })
  }

  return res.status(200).json({ message: 'Pledge successfully saved', data })
}


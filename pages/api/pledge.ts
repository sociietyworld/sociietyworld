import type { NextApiRequest, NextApiResponse } from 'next'

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

  console.log('🔐 New SOCIIETY Pledge:', {
    name,
    instagram,
    address,
    email,
    phone,
    shirtSize,
    sizeCategory,
    pantsSize,
    gender,
  })

  // TODO: Add real storage, email, or database call here

  return res.status(200).json({ message: 'Pledge successfully received' })
}


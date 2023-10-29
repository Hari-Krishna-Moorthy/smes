import { existsSync } from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (existsSync(path.join(process.cwd(), `data/${req.query.code}`))) {
  }

  return res.json({
    products: ['some name'],

    code: req.query.code,
  })
}

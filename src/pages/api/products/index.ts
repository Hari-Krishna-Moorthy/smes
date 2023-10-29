import { existsSync, readFileSync } from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import Product from '../../../interfaces/Product'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<
    { products: Product[]; code: string } | { error: string }
  >
) {
  try {
    if (!req.query.code) throw new Error('Invalid query')

    const pathToProducts = path.join(
      process.cwd(),
      `data/${req.query.code}.json`
    )
    let products = [] as Array<Product>

    if (existsSync(pathToProducts))
      products = JSON.parse(
        readFileSync(pathToProducts, 'utf8')
      ) as Array<Product>
    else throw new Error('Products Not Found')
    
    res.json({
      products,
      code: req.query.code as string,
    })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

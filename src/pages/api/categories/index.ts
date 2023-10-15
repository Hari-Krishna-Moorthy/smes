import type { NextApiRequest, NextApiResponse } from 'next'
import Category from '../../../interfaces/ProductCategory'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Category[]>
) {
  const productCategories = [
    {
      thumbnailUrl:
        'https://images.unsplash.com/photo-1607428262964-5646fce23b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2573&q=80',
      name: 'Product',
      country: 'Japanese spare parts',
    },
    {
      thumbnailUrl:
        'https://images.unsplash.com/photo-1607428262964-5646fce23b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2573&q=80',
      name: 'Product',
      country: 'Korean spare parts',
    },
    {
      thumbnailUrl:
        'https://images.unsplash.com/photo-1607428262964-5646fce23b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2573&q=80',
      name: 'Product',
      country: 'Korean spare parts',
    },
    {
      thumbnailUrl:
        'https://images.unsplash.com/photo-1607428262964-5646fce23b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2573&q=80',
      name: 'Product',
      country: 'Korean spare parts',
    },
  ]
  res.status(200).json(productCategories)
}

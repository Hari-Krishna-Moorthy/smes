import React from 'react'
import ImageSlider from '../../components/ImageSlider'
import Image from 'next/image'

const ProductsPromo = () => {
  return (
    <div className="bg-[#F2F5FD] w-full px-12 pt-8 rounded-md flex justify-center align-middle">
      <div className="w-2/3 flex-1">
        <h1 className="font-bold">Products</h1>
        <p>
          Our Marine Spare & equipment department supply Genuine and OEM spares
          worldwide to Ship Owners, Ship Managers, Repairing Companies, Ship
          yards and other Trading Companies. Our staff members are been trained
          in Japan have excellent technical knowledge in Ship spares and
          equipment’s, they can source out Genuine & OEM spares with competitive
          prices with least delivery time and no compromise in Quality. SMES
          promote Japanese reliable spares from Japan OEM factories as we are
          authorised for International Sales/Marketing. With an exclusive
          agreement with various Genuine Maker in Japan/ Europe / Korea we can
          supply genuine spares with Maximum discount.
        </p>
      </div>
      <div className="w-1/2 mb-8">
        <ImageSlider />
      </div>
    </div>
  )
}

const Categories: React.FC<{
  thumbnailUrl: string
  name: string
  country: string
}> = ({ country, name, thumbnailUrl }) => {
  return (
    <div className="hover:scale-[101%] hover:shadow-lg shadow-sm transition-all transform-gpu ease-in-out duration-200 relative hs-[20.8125rem] ws-[27.375rem]  rounded-[0.5rem] overflow-hidden drop-shadow-md  bg-black">
      <Image
        src={thumbnailUrl}
        alt={name}
        width={250}
        height={1000}
        className="w-full h-full object-cover opacity-70"
      />
      <h1 className="absolute text-xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {name}
      </h1>
    </div>
  )
}

const ProductCategories = () => {
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
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-2/4 grid grid-cols-2 justify-center align-middle gap-3 mx-auto">
        {productCategories.map((info) => (
          <Categories {...info} />
        ))}
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <div className="h-full bg-white text-black font-lexEnd container mx-auto px-4 py-4">
      <ProductsPromo />
      <ProductCategories />
    </div>
  )
}

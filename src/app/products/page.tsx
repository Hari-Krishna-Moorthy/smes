import React from 'react'
import ImageSlider from '../../components/ImageSlider'

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
      <div className='w-1/2 mb-8'>
        <ImageSlider></ImageSlider>
      </div>
    </div>
  )
}

const Categories = () => {
  return <div>Category</div>
}

const ProductCategories = () => {
  return (
    <div>
      ProductCategories
      {Array(3)
        .fill(0)
        .map(() => (
          <Categories />
        ))}
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

'use client'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ImageSlider from '../../components/ImageSlider'
import Category from '../../interfaces/ProductCategory'

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

const Categories: React.FC<Category> = ({ name, thumbnailUrl, flag }) => {
  return (
    <div className="hover:scale-[101%] hover:shadow-lg shadow-sm transition-all transform-gpu ease-in-out duration-200 relative hs-[20.8125rem] ws-[27.375rem]  rounded-[0.5rem] overflow-hidden drop-shadow-md  bg-black">
      <Image
        src={thumbnailUrl}
        alt={name}
        width={250}
        height={1000}
        className="w-full h-full object-cover opacity-70"
      />
      <div className="absolute flex justify-center  gap-1 text-center align-baseline text-xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-8 rounded-full overflow-hidden align-middle justify-center">
          <img
            className="w-full object-cover h-full"
            src={flag.svg}
            alt={flag.alt}
          />
        </div>
        <h1 className="whitespace-nowrap">{name}</h1>
      </div>
    </div>
  )
}

const getProductCategories = async () => {
  const { data } = await axios.get<Category[]>('/api/categories')
  return data
}

const ProductCategories = () => {
  const [categories, setCategories] = useState<Category[]>()
  useEffect(() => {
    ;(async () => setCategories(await getProductCategories()))()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-2/4 grid grid-cols-2 justify-center align-middle gap-3 mx-auto">
        {!categories
          ? Array(4)
              .fill(0)
              .map(() => (
                <div className="border shadow rounded-md px-4 py-4 h-40 w-full mx-auto">
                  <div className="animate-pulse flex space-x-4 ">
                    <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div className="flex-1 space-y-6 py-1">
                      <div className="h-2 bg-slate-700 rounded"></div>
                      <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                          <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-slate-700 rounded"></div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                          <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
          : categories.map((info) => <Categories {...info} />)}
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

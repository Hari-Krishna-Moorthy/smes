'use client'

import axios from 'axios'
import { head } from 'lodash'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ImageSlider from '../../../components/ImageSlider'
import ProductList from '../../../components/ProductList'
import Footer from '../../../components/ui/footer/footer'
import Navbar from '../../../components/ui/navbar/navbar1'
import Product from '../../../interfaces/Product'
import Category from '../../../interfaces/ProductCategory'
import { getProductCategories as getProductCategoriesStatic } from '../../services/getCategories'
import { getProductViaCode } from '../../services/products'

const ProductsPromo = () => {
  return (
    <div className="bg-[#F2F5FD] dark:bg-secondary-dark dark:text-primary-light w-full px-6 md:px-12 pt-8 rounded-3xl flex flex-col md:flex-row justify-center items-center">
      <div className="md:w-3/5 md:pr-4">
        <h1 className="font-bold pb-4 text-xl">Products</h1>
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

      <div className="md:w-2/5 w-full h-full mb-4 md:mb-0">
        <ImageSlider />
      </div>
    </div>

  )
}

const Categories: React.FC<{
  category: Category
  onClick: (code: string) => void
  current: string
}> = ({ onClick, category, current }) => {
  const { name, thumbnailUrl, flag, code } = category

  return (
    <div
      className={`h-full ${
        code === current ? 'scale-[103%] border' : 'hover:scale-[101%]'
      } w-full hover:shadow-lg shadow-sm transition-all transform-gpu ease-in-out duration-200 relative hs-[20.8125rem] ws-[27.375rem]  rounded-[0.5rem] overflow-hidden drop-shadow-md  bg-black cursor-pointer dark:bg-white`}
      onClick={() => onClick(code)}
    >
      <Image
        width={1000}
        height={1000}
        src={thumbnailUrl}
        alt={name}
        className="w-full sm:max-h-36  h-full object-cover opacity-70 dark:opacity-40"
      />

      <div className="absolute flex justify-center items-center gap-2 text-xl font-medium text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:text-black">
        <div className="w-10 h-10 rounded-full overflow-hidden align-middle justify-center items-center">
          <img
            className="w-full object-cover h-full"
            src={flag.svg}
            alt={flag.alt}
          />
        </div>
        <p className="whitespace-nowrap text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
          {name}
        </p>
      </div>

    </div>
  )
}

const getProductCategories = async () => {
  const { data } = await axios.get<Category[]>('/api/categories')
  return data
}

const getProducts = async ({ code }) => {
  const { data } = await axios.get<{ products: Product[] }>(
    `/api/products?code=${code}`
  )
  return data.products
}

const ProductCategories = ({ countryMeta, handleCodeChange }) => {
  const [categories, setCategories] = useState<Category[]>()
  const [selectedCategory, setSelectedCategory] = useState<
    Category | undefined
  >()
  const [products, setProducts] = useState<Product[]>()

  useEffect(() => {
    if (!categories) setCategories(getProductCategoriesStatic())
  }, [categories, setCategories])

  useEffect(() => {
    if (countryMeta.code) {
      setSelectedCategory(
        categories?.find(({ code }) => code == countryMeta.code)
      )
    }
  }, [countryMeta.code, categories, setSelectedCategory])

  useEffect(() => {
    if (countryMeta.code)
      setProducts(getProductViaCode({ code: countryMeta.code }).products)
  }, [countryMeta.code])
  return (
    <div className="container mx-auto px-4 py-8">
      <div
        className={`${
          countryMeta?.code
            ? 'flex  gap-3 min-h-[9.75rem] flex-wrap  md:flex-nowrap max-h-max'
            : 'w-2/4 grid grid-cols-2 justify-center align-middle gap-3'
        } mx-auto`}
      >
        {!categories
          ? Array(4)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="border shadow rounded-md px-4 py-4 h-40 w-full "
              >
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
          : categories.map((info, index) => (
              <Categories
                key={index}
                current={countryMeta.code}
                category={info}
                onClick={handleCodeChange}
              />
            ))}
      </div>
      <div className="w-full ">
        {selectedCategory && products && (
          <ProductList name={selectedCategory.name} products={products} />
        )}
      </div>
    </div>
  )
}

const Products: React.FC<{
  params: { country: string[] | undefined }
}> = ({ params }) => {
  const [countryMeta, setCountryMeta] = useState<{
    code: string | undefined
  }>({
    code: undefined,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    if (head(params.country)) {
      setCountryMeta({ code: head(params.country) })
      setLoading(false)
    } else setLoading(false)
  }, [setCountryMeta, params.country, setLoading])

  return (
    <main className="light">
      <div className="h-20">
        {/* Navbar  */}
        <Navbar activePage={'Products'} />
      </div>
      <div className="h-full dark:bg-primary-dark bg-white text-black font-lexEnd container mx-auto px-4 py-4">
        {loading ? (
          <div className="flex items-center justify-center w-full h-[95vh]">
            <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
              <svg
                fill="none"
                className="w-6 h-6 animate-spin"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
                  fill="currentColor"
                  fill-rule="evenodd"
                />
              </svg>
              <div>Loading ...</div>
            </div>
          </div>
        ) : (
          <>
            {!countryMeta.code && <ProductsPromo />}
            <ProductCategories
              countryMeta={countryMeta}
              handleCodeChange={(code: string) => setCountryMeta({ code })}
            />
          </>
        )}
      </div>
      <Footer />
    </main>
  )
}

export default Products

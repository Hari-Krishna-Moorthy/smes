import { isEmpty, trim } from 'lodash'
import React, { useEffect, useState } from 'react'
import Product from '../../interfaces/Product'

const Product: React.FC<{ name: string }> = ({ name }) => <div>{name}</div>
const ProductList: React.FC<{
  name: string
  products: Product[]
}> = ({ name, products }) => {
  const [productsOnFilter, setProductsOnFilter] = useState(products)
  const [filter, setFilter] = useState({
    searchTerm: '',
  })

  useEffect(() => {
    if (isEmpty(trim(filter.searchTerm))) return setProductsOnFilter(products)

    const regex = new RegExp(filter.searchTerm, 'i')
    setProductsOnFilter(productsOnFilter.filter(({ name }) => regex.test(name)))
    console.log(productsOnFilter)
  }, [filter, productsOnFilter, setProductsOnFilter,  products])

  return (
    <div className="p-8 my-8 mx-4 h-full shadow-md shadow-[#C4CFD4] outline-1 border-[1px]  rounded-md">
      <div className="flex justify-between items-center  whitespace-nowrap">
        <h2 className="font-bold text-2xl flex-1">{name}</h2>

        <div className="relative flex items-center w-52 h-12 rounded-lg focus-within:shadow-lg  border-neutral-900 border-[2px] border-opacity-10 overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search something.."
            name="searchTerm"
            value={filter.searchTerm}
            onChange={({ target: { name, value } }) =>
              setFilter((filter) => ({
                ...filter,
                [name]: value,
              }))
            }
          />
        </div>
      </div>
      <div className="py-8 grid grid-cols-3 gap-5">
        {productsOnFilter.map((product, index) => (
          <Product {...product} key={index} />
        ))}
      </div>
    </div>
  )
}

export default ProductList

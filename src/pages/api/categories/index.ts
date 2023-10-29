import axios from 'axios'
import { get, isEmpty, map } from 'lodash'
import type { NextApiRequest, NextApiResponse } from 'next'
import Category from '../../../interfaces/ProductCategory'

type CountryIsoMap = {
  Code: string
  Flag: string
  Name: string
}
let countryCodeMap: undefined | Record<string, CountryIsoMap> = undefined

const getCountryFlagIcon = (code: string) => {
  return `https://raw.githubusercontent.com/lipis/flag-icons/6784329d3fa1466fb8ef184ac69b021a45691271/flags/4x3/${code}.svg`
}

const getCountryMetaViaCodes = (codes: string[]) => {
  return Promise.all(
    codes.map((code) =>
      axios
        .get(`https://restcountries.com/v3.1/alpha/${code}`)
        .then(({ data }) => data)
    )
  )
}
const getCountryCodesMap = () =>
  axios
    .get<CountryIsoMap[]>(
      'https://pkgstore.datahub.io/core/country-list/data_json/data/8c458f2d15d9f2119654b29ede6e45b8/data_json.json'
    )
    .then(({ data }) =>
      data.reduce(
        (acc, { Code, Name }) => ({
          ...acc,
          [Code]: { Name, Code, Flag: getCountryFlagIcon(Code) },
        }),
        {} as Record<string, CountryIsoMap>
      )
    )

const getCategoriesWithCountryMeta = async (
  categories: Omit<Category, 'flag'>[]
): Promise<Category[]> => {
  const countryMeta = await getCountryMetaViaCodes(
    map(categories, 'code') as string[]
  )
  return categories.map((category, idx) => ({
    ...category,
    flag: get(countryMeta[idx], '[0].flags'),
  }))
}

const includeCountryMeta = ({
  code,
  ...rest
}: {
  thumbnailUrl: string
  name: string
  code: string
}) => ({
  ...rest,
  code,
  flag: countryCodeMap![code].Flag,
})

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Category[]>
) {
  if (isEmpty(countryCodeMap)) countryCodeMap = await getCountryCodesMap()
  const productCategories = [
    {
      thumbnailUrl: '/categories/Rectangle%2024874.png',
      name: 'Japanese spare parts',
      code: 'JP',
    },
    {
      thumbnailUrl: '/categories/Rectangle%2024875.png',
      name: 'Korean spare parts',
      code: 'KR',
    },
    {
      thumbnailUrl: '/categories/Rectangle%2024876.png',
      name: 'European spare parts',
      code: 'DE',
    },
    {
      thumbnailUrl: '/categories/Rectangle%2024877.png',
      name: 'Chinese Spare Parts',
      code: 'CN',
    },
  ]
  const categories = await getCategoriesWithCountryMeta(productCategories)

  res.status(200).json(categories)
}

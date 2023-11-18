import Product from '../../interfaces/Product'

const productsCodeMap = {
  ['CN']: [
    {
      name: 'Hokuetsu Industries',
      productCategory: 'AIR COMPRESSORS',
    },
    {
      name: 'Kobe Steel Ltd.',
      productCategory: 'AIR COMPRESSORS',
    },
    {
      name: 'Matsubara Iron Works, Ltd.',
      productCategory: 'AIR COMPRESSORS',
    },
  ],
  ['DE']: [
    {
      name: 'Hokuetsu Industries',
      productCategory: 'AIR COMPRESSORS',
    },
    {
      name: 'Kobe Steel Ltd.',
      productCategory: 'AIR COMPRESSORS',
    },
    {
      name: 'Matsubara Iron Works, Ltd.',
      productCategory: 'AIR COMPRESSORS',
    },
  ],
  ['JP']: [
    {
      name: 'Hokuetsu Industries',
      productCategory: 'AIR COMPRESSORS',
    },
    {
      name: 'Kobe Steel Ltd.',
      productCategory: 'AIR COMPRESSORS',
    },
    {
      name: 'Matsubara Iron Works, Ltd.',
      productCategory: 'AIR COMPRESSORS',
    },
    {
      name: 'Meiji Air Compressor Mfg. Co., Ltd.',
      productCategory: 'AIR COMPRESSORS',
    },
    {
      name: 'Suction Gas Engine Mfg. Co., Ltd.',
      productCategory: 'AIR COMPRESSORS',
    },
    {
      name: 'Tanabe Pneumatic Machinery Co., Ltd.',
      productCategory: 'AIR COMPRESSORS',
    },
    {
      name: 'Teikoku Machinery Works Ltd.',
      productCategory: 'AIR COMPRESSORS',
    },
    {
      name: 'Yanmar Diesel Engine Co., Ltd.',
      productCategory: 'AIR COMPRESSORS',
    },
    {
      name: 'Daikin Kogyo',
      productCategory: 'AIR CONDITIONING & REFRIGERATION PLANT',
    },
    {
      name: 'Namirei',
      productCategory: 'AIR CONDITIONING & REFRIGERATION PLANT',
    },
    {
      name: 'Nippon Sabroe',
      productCategory: 'AIR CONDITIONING & REFRIGERATION PLANT',
    },
    {
      name: 'Nisshin Refrigeration & Engineering',
      productCategory: 'AIR CONDITIONING & REFRIGERATION PLANT',
    },
    {
      name: 'Shin Nippon Air Conditioning Engineering',
      productCategory: 'AIR CONDITIONING & REFRIGERATION PLANT',
    },
    {
      name: 'Takatori',
      productCategory: 'AIR CONDITIONING & REFRIGERATION PLANT',
    },
    {
      name: 'Toyo Engineering Works',
      productCategory: 'AIR CONDITIONING & REFRIGERATION PLANT',
    },
    {
      name: 'Ushio Reinetsu',
      productCategory: 'AIR CONDITIONING & REFRIGERATION PLANT',
    },
    {
      name: 'Henmi Iron Works',
      productCategory: 'AIR MOTOR',
    },
    {
      name: 'Henmi Iron Works',
      productCategory: 'AIR RESERVOIRS',
    },
    {
      name: 'Kanazawa Iron Works',
      productCategory: 'AIR RESERVOIRS',
    },
    {
      name: 'Miura',
      productCategory: 'AIR RESERVOIRS',
    },
    {
      name: 'Nishida Marine Boiler',
      productCategory: 'AIR RESERVOIRS',
    },
    {
      name: 'Osaka Boilers',
      productCategory: 'AIR RESERVOIRS',
    },
    {
      name: 'Fuji Air Tool',
      productCategory: 'AIR TOOLS',
    },
    {
      name: 'Nitto Kohki',
      productCategory: 'AIR TOOLS',
    },
    {
      name: 'Uryu Seisakusho',
      productCategory: 'AIR TOOLS',
    },
    {
      name: 'Yokota Industrial',
      productCategory: 'AIR TOOLS',
    },
    {
      name: 'Yutani Tekko',
      productCategory: 'AIR TOOLS',
    },
    {
      name: 'Fujikura Cable Works, Ltd.',
      productCategory: 'ANCHORS & CHAINS',
    },
    {
      name: 'Hamanaka Chain Mfg. Co., Ltd.',
      productCategory: 'ANCHORS & CHAINS',
    },
    {
      name: 'Hien Electric Industries, Ltd.',
      productCategory: 'ANCHORS & CHAINS',
    },
    {
      name: 'Japan Mechanical Chain Co., Ltd.',
      productCategory: 'ANCHORS & CHAINS',
    },
    {
      name: 'Komatsu Ltd.',
      productCategory: 'ANCHORS & CHAINS',
    },
    {
      name: 'Koyo Chain Mfg. Co., Ltd.',
      productCategory: 'ANCHORS & CHAINS',
    },
    {
      name: 'Kuroki Seisa K.K.',
      productCategory: 'ANCHORS & CHAINS',
    },
    {
      name: 'Nippon Chain & Anchor Co., Ltd.',
      productCategory: 'ANCHORS & CHAINS',
    },
    {
      name: 'Onomichi Anchor Mfg. Ltd.',
      productCategory: 'ANCHORS & CHAINS',
    },
    {
      name: 'Osaka Byosa Kogyo Co., Ltd.',
      productCategory: 'ANCHORS & CHAINS',
    },
    {
      name: 'Osaka Chain & Machinery Mfg. Co., Ltd.',
      productCategory: 'ANCHORS & CHAINS',
    },
    {
      name: 'Tatsuta Electric Wire & Cable Co., Ltd.',
      productCategory: 'ANCHORS & CHAINS',
    },
    {
      name: 'Tsubakimoto Chain Mfg. Co., Ltd.',
      productCategory: 'ANCHORS & CHAINS',
    },
    {
      name: 'Fuji Electric',
      productCategory: 'AUTOMATION & REMOTE CONTROL EQUIPMENT',
    },
    {
      name: 'Hanshin Diesel Works',
      productCategory: 'AUTOMATION & REMOTE CONTROL EQUIPMENT',
    },
    {
      name: 'Koyo Seiko Co., Ltd.',
      productCategory: 'BEARINGS',
    },
    {
      name: 'Nihon Seiko Co., Ltd.',
      productCategory: 'BEARINGS',
    },
    {
      name: 'Toyo Bearing Mfg. Co., Ltd.',
      productCategory: 'BEARINGS',
    },
    {
      name: 'Fuji Electric',
      productCategory: 'BLOWERS & FANS',
    },
    {
      name: 'Kubota Kogyo',
      productCategory: 'BLOWERS & FANS',
    },
    {
      name: 'Nishishiba Electric',
      productCategory: 'BLOWERS & FANS',
    },
    {
      name: 'Osaka Blower',
      productCategory: 'BLOWERS & FANS',
    },
    {
      name: 'Shinko Electric',
      productCategory: 'BLOWERS & FANS',
    },
    {
      name: 'Taiyo Electric',
      productCategory: 'BLOWERS & FANS',
    },
    {
      name: 'Daikin Kogyo',
      productCategory: 'BOILER PARTS & ACCESSORIES',
    },
    {
      name: 'Namirei',
      productCategory: 'BOILER PARTS & ACCESSORIES',
    },
  ],
  ['KR']: [
    {
      name: 'Hokuetsu Industries',
      productCategory: 'AIR COMPRESSORS',
    },
    {
      name: 'Kobe Steel Ltd.',
      productCategory: 'AIR COMPRESSORS',
    },
    {
      name: 'Matsubara Iron Works, Ltd.',
      productCategory: 'AIR COMPRESSORS',
    },
  ],
}

export const getProductViaCode = ({
  code,
}: Record<string, string>): {
  products: Product[]
  code: string
} => {
  if (!productsCodeMap[code]) throw new Error(`cannot get product`)

  const products = productsCodeMap[code]
  return {
    products,
    code: code,
  }
}

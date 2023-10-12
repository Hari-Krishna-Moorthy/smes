import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SINGAPORE MARINE ENGINEERING &amp; SPARES',
  description: 'We Singapore Marine Engineering and Spares SMES is an international supplier and exporter of Marine Equipment, Spares, Stores and marine services.',
  keywords: 'SMES, Singapore, Marines, Marine Equipment, Spares, Marine services'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

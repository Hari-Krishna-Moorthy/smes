import './globals.css'
import Providers from './providers'

export const metadata = {
  title: 'SINGAPORE MARINE ENGINEERING &amp; SPARES',
  description:
    'We Singapore Marine Engineering and Spares SMES is an international supplier and exporter of Marine Equipment, Spares, Stores and marine services.',
  keywords:
    'SMES, Singapore, Marines, Marine Equipment, Spares, Marine services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

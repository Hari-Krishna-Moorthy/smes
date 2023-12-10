/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";
import Providers from "./providers";
import 'react-toastify/dist/ReactToastify.css';


export const metadata = {
  title: "SINGAPORE MARINE ENGINEERING & SPARES",
  description:
    "We Singapore Marine Engineering and Spares SMES is an international supplier and exporter of Marine Equipment, Spares, Stores and marine services.",
  keywords:
    "SMES, Singapore Marine, ship spares, ship repair, ship stores, spare parts, engine spares, compressor spares, purifier spares, japanese spares, oem spares, genuine ship spares",
  openGraph: {
    title: "SINGAPORE MARINE ENGINEERING & SPARES",
    description:
      "We Singapore Marine Engineering and Spares SMES is an international supplier and exporter of Marine Equipment, Spares, Stores and marine services.",
    type: "website",
    url: "https://smesgroup.com.sg/",
    siteName: "SMES",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <meta name="author" content="Innovation Geeks" />
        <meta name="author-site" content="https://www.innovationgeeks.in" />
        <meta name="author-contact" content="info@innovationgeeks.in" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "SINGAPORE MARINE ENGINEERING &amp; SPARES",
  description:
    "We Singapore Marine Engineering and Spares SMES is an international supplier and exporter of Marine Equipment, Spares, Stores and marine services.",
  keywords:
    "SMES, Singapore, Marines, Marine Equipment, Spares, Marine services",
};

export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

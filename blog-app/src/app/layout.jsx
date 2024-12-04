import { Outfit } from 'next/font/google'
import "./globals.css";

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata = {
  title: "Blogyo",
  description: "A minmalist blog website with Admin panel | By SufiProg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

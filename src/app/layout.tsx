import type { Metadata } from "next";
import "./globals.css";
import Header from './components/Header/Header'
import {CartProvider} from '../context/ContextCart'
import {FilterProvider} from '../context/FilterContext'
import { FavContextProvider } from "@/context/FavContext";



export const metadata: Metadata = {
  title: {
    default:"TechShop",
    template:"TechShop | %s"
  },
  description: "Shop that sells eletronics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
/>

      </head>
      <body>
        <FavContextProvider>
        <CartProvider>
        <FilterProvider>

        <Header />
        {children}

        </FilterProvider>
        </CartProvider>
        </FavContextProvider>
      </body>
    </html>
  );
}

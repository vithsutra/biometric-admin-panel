import { Geist, Geist_Mono, Comfortaa, Poppins } from "next/font/google";


export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

   export  const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

import { Inter } from "next/font/google"

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})
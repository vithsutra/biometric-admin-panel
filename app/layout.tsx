import { Geist, Geist_Mono, Comfortaa, Poppins } from "next/font/google";
import "./globals.css";
import { LayoutWrapper } from "./utils/LayoutWrapper";
import { metadata } from "./metadata";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-geist-popins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Add the weights you need
});

export { metadata}; 

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}

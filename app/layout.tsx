import "./globals.css";
import { LayoutWrapper } from "./utils/LayoutWrapper";
import { metadata } from "./metadata";
import { inter } from "./fonts";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
